import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import QuestionnaireHeader from '../QuestionnaireHeader/QuestionnaireHeader'
import Unauthorized from '../Unauthorized/Unauthorized';
import { fetchCohort } from '../../reducers/cohort';
import { updateUserSession } from '../../reducers/user';
import { initializeLookup } from '../../reducers/lookupReducer';
import SelectCohort from '../SelectCohort/SelectCohort';
import CohortForm from '../CohortForm/CohortForm'
import EnrollmentCountsForm from '../EnrollmentCounts/EnrollmentCountsForm'
import MajorContentForm from '../MajorContentForm/MajorContentForm'
import CancerInfoForm from '../CancerInfoForm/CancerInfoForm'
import MortalityForm from '../MortalityForm/MortalityForm'
import SpecimenForm from '../SpecimenForm/SpecimenForm'
import DataLinkageForm from '../DataLinkageForm/DataLinkageForm'

const Questionnaire = ({ ...props }) => {
    const dispatch = useDispatch();
    const getCohortId = () => +window.location.pathname.split('/').pop();
    const cohortID = getCohortId();
    const userSession = useSelector(state => state.user);
    const cohort = useSelector(state => state.cohort);
    const [current, setCurrent] = useState('A')
    const location = useLocation();

    const isAuthorized = userSession && (userSession.role === 'CohortAdmin' || userSession.role === 'SystemAdmin');
    const hasAccess = userSession && (userSession.role === 'SystemAdmin' || (userSession.cohorts || []).map(c => +c.id).includes(cohortID));
    const Content = {
        A: CohortForm,
        B: EnrollmentCountsForm,
        C: MajorContentForm,
        D: CancerInfoForm,
        E: MortalityForm,
        F: DataLinkageForm,
        G: SpecimenForm
    }[current];

    useEffect(() => {
        let cohortID = location.pathname.split('/').pop();
        if (cohortID) {
            if (!cohort || !cohort.id || cohortID !== +cohort.id) {
                dispatch(fetchCohort(cohortID));
                dispatch(updateUserSession());
            }
            dispatch(initializeLookup());
        }
    }, [location]);

    if (!isAuthorized)
        return <Unauthorized />

    else if (!hasAccess)
        return <SelectCohort />

    return <div>
        <QuestionnaireHeader activeSection={current} handler={setCurrent} isReadOnly={props.isReadOnly} />
        <Content isReadOnly={props.isReadOnly} sectionPicker={setCurrent} cohortID={cohortID} />
    </div>;
}

export default Questionnaire
