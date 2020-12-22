import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { parseISO } from 'date-fns';
import './QuestionnaireHeader.css'


const QuestionnaireHeader = ({ ...props }) => {
    const sectionStatus = useSelector(state => state.sectionReducer)
    const cohort = useSelector(state => state.cohortReducer);
    const { 
        status,
        publish_time: publishTime,  
        update_time: updateTime,
    } = useSelector(state => state.cohort);
    const publishDate = publishTime ? parseISO(publishTime) : null;
    const updateDate = updateTime ? parseISO(updateTime) : null;

    const asTitleCase = str => String(str).split(/\W/g).map(str => 
        str[0].toLocaleUpperCase() + str.slice(1).toLocaleLowerCase()
    );

    const asDateString = date => date && date instanceof Date 
        ? date.toLocaleDateString()
        : null;

    const pickColor = (status) => {
        switch (status) {
            case 'incomplete':
                return 'orange'
            case 'complete':
                return 'green'
            case 'new':
            default:
                return 'grey'
        }
    }
    //const regularStyle={flex: '1', width: '37px', height: '37px', border: '3px solid grey', borderRadius: '50%', display: 'flex', justifyContent: 'center', margin: 'auto'}
    //const activeStyle = {flex: '1', width: '37px', height: '37px', border: '3px solid #f0f', borderRadius: '50%', display: 'flex', justifyContent: 'center', margin: 'auto'}
    const activeStyle = { fontWeight: 'bold', color: 'blue', borderBottom: '2px solid blue', paddingRight: '0' }
    const specialHeader = { fontWeight: 'bold', color: 'blue', borderBottom: '2px solid blue', paddingLeft: '0', paddingRight: '0', marginLeft: '0', marginRight: '0' }
    const [ARing, setARing] = useState('')
    const [BRing, setBRing] = useState('')
    const [CRing, setCRing] = useState('')
    const [DRing, setDRing] = useState('')
    const [ERing, setERing] = useState('')
    const [FRing, setFRing] = useState('')
    const [GRing, setGRing] = useState('')

    return <div>
        <div style={{ display: 'flex', flexDirection: 'column' }} className="mb-4">
            <h1 className='pg-title'>{cohort.cohort_acronym} Questionnaire</h1>
            <p style={{ fontFamily: '"PT Sans", Arial, sans-serif', fontSize: '16px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="mb-4 p-4 border row">
            <div className="col-md">
                <strong>Cohort Status: </strong>
                {asTitleCase(status)}
            </div>
            <div className="col-md">
                <strong>Last Updated Date: </strong>
                {asDateString(updateDate) || 'Not available'}
            </div>
            <div className="col-md">
                <strong>Last Published Date: </strong>
                {asDateString(publishDate) || 'Not available'}
            </div>
        </div>

        {
        window.innerWidth <= 800 ? 
        <div className='col-xm-12'>
            <div id='sectionA' onClick={() => props.handler('A')} style={{marginBottom: '5px'}}>
                <div onMouseEnter={() => setARing('blue')} onMouseMove={() => setARing('blue')} onMouseOut={() => setARing('')}>
                    <div style={{color: 'white', height: '38px', borderRadius: '25px', display: 'flex', justifyContent: 'center', margin: 'auto', border: ARing ? `3px solid ${ARing}` : '3px solid ' + pickColor(sectionStatus['A']) }}>
                        <div style={{width: '99%', paddingTop: '3px', height: '25px', borderRadius: '25px', paddingLeft: '15px', backgroundColor: pickColor(sectionStatus['A']), margin: 'auto' }}>
                            <span style={props.activeSection === 'A' ? activeStyle : {}}>Basic Information</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id='sectionB' onClick={() => props.handler('B')} style={{marginBottom: '5px'}}>
                <div onMouseEnter={() => setBRing('blue')} onMouseMove={() => setBRing('blue')} onMouseOut={() => setBRing('')}>
                    <div style={{color: 'white', height: '38px', display: 'flex', justifyContent: 'center', borderRadius: '25px',  margin: 'auto', border: BRing ? `3px solid ${BRing}` : '3px solid ' + pickColor(sectionStatus['B']) }}>
                        <div style={{width: '99%',  height: '25px', borderRadius: '25px', paddingLeft: '15px', paddingTop: '3px', backgroundColor: pickColor(sectionStatus['B']), margin: 'auto'}}>
                            <span style={props.activeSection === 'B' ? activeStyle : {}}>Enrollment Counts</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id='sectionC' onClick={() => props.handler('C')} style={{marginBottom: '5px'}}>
                <div onMouseEnter={() => setCRing('blue')} onMouseMove={() => setCRing('blue')} onMouseOut={() => setCRing('')}>
                    <div style={{color: 'white', height: '38px', display: 'flex', justifyContent: 'center', borderRadius: '25px',  margin: 'auto', border: CRing ? `3px solid ${CRing}` : '3px solid ' + pickColor(sectionStatus['C']) }}>
                        <div style={{width: '99%',  height: '25px', borderRadius: '25px', paddingLeft: '15px', paddingTop: '3px', backgroundColor: pickColor(sectionStatus['C']), margin: 'auto'}}>
                            <span style={props.activeSection === 'C' ? activeStyle : {}}>Major Content</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id='sectionD' onClick={() => props.handler('D')} style={{marginBottom: '5px'}}>
                <div onMouseEnter={() => setDRing('blue')} onMouseMove={() => setDRing('blue')} onMouseOut={() => setDRing('')}>
                    <div style={{color: 'white', height: '38px', display: 'flex', justifyContent: 'center', borderRadius: '25px',  margin: 'auto', border: DRing ? `3px solid ${DRing}` : '3px solid ' + pickColor(sectionStatus['D']) }}>
                        <div style={{width: '99%',  height: '25px', borderRadius: '25px', paddingLeft: '15px', paddingTop: '3px', backgroundColor: pickColor(sectionStatus['D']), margin: 'auto'}}>
                            <span style={props.activeSection === 'D' ? activeStyle : {}}>Cancer Information</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id='sectionE' onClick={() => props.handler('E')} style={{marginBottom: '5px'}}>
                <div onMouseEnter={() => setERing('blue')} onMouseMove={() => setERing('blue')} onMouseOut={() => setERing('')}>
                    <div style={{color: 'white', height: '38px', display: 'flex', justifyContent: 'center', borderRadius: '25px',  margin: 'auto', border: ERing ? `3px solid ${ERing}` : '3px solid ' + pickColor(sectionStatus['E']) }}>
                        <div style={{width: '99%',  height: '25px', borderRadius: '25px', paddingLeft: '15px', paddingTop: '3px', backgroundColor: pickColor(sectionStatus['E']), margin: 'auto'}}>
                            <span style={props.activeSection === 'E' ? activeStyle : {}}>Mortality</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id='sectionF' onClick={() => props.handler('F')} style={{marginBottom: '5px'}}>
                <div onMouseEnter={() => setFRing('blue')} onMouseMove={() => setFRing('blue')} onMouseOut={() => setFRing('')}>
                    <div style={{color: 'white', height: '38px', display: 'flex', justifyContent: 'center', borderRadius: '25px',  margin: 'auto', border: FRing ? `3px solid ${FRing}` : '3px solid ' + pickColor(sectionStatus['F']) }}>
                        <div style={{width: '99%',  height: '25px', borderRadius: '25px', paddingLeft: '15px', paddingTop: '3px', backgroundColor: pickColor(sectionStatus['F']), margin: 'auto'}}>
                            <span style={props.activeSection === 'F' ? activeStyle : {}}>Data Linkage & Harmonization</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id='sectionF' onClick={() => props.handler('G')} style={{marginBottom: '5px'}}>
                <div onMouseEnter={() => setGRing('blue')} onMouseMove={() => setGRing('blue')} onMouseOut={() => setGRing('')}>
                    <div style={{color: 'white', height: '38px', display: 'flex', justifyContent: 'center', borderRadius: '25px',  margin: 'auto', border: GRing ? `3px solid ${GRing}` : '3px solid ' + pickColor(sectionStatus['G']) }}>
                        <div style={{width: '99%',  height: '25px', borderRadius: '25px', paddingLeft: '15px', paddingTop: '3px', backgroundColor: pickColor(sectionStatus['G']), margin: 'auto'}}>
                            <span style={props.activeSection === 'G' ? activeStyle : {}}>Specimen</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        :
        <div style={{ display: 'flex' }}>
            <div id='sectionA' style={{ flex: '1', textAlign: 'center' }} onClick={() => props.handler('A')}>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: '1' }}></div>
                    <div onMouseEnter={() => setARing('blue')} onMouseMove={() => setARing('blue')} onMouseOut={() => setARing('')}>
                        <div style={{ flex: '1', width: '37px', height: '37px', borderRadius: '50%', display: 'flex', justifyContent: 'center', margin: 'auto', border: ARing ? `3px solid ${ARing}` : '3px solid ' + pickColor(sectionStatus['A']) }}>
                            <div style={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: pickColor(sectionStatus['A']), margin: 'auto' }}></div>
                        </div>
                    </div>
                    <div style={{ flex: '1', height: '3px', border: '3px solid #9f3', margin: 'auto 0' }}></div>
                </div>
                <div style={{ marginTop: '5px' }}><span style={props.activeSection === 'A' ? activeStyle : {}}>Basic Information</span></div>
            </div>
            <div id='sectionB' style={{ flex: '1', textAlign: 'center' }} onClick={() => props.handler('B')}>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: '1', height: '3px', border: '3px solid #9f3', margin: 'auto 0' }}></div>
                    <div onMouseEnter={() => setBRing('blue')} onMouseMove={() => setBRing('blue')} onMouseOut={() => setBRing('')}>
                        <div style={{ flex: '1', width: '37px', height: '37px', borderRadius: '50%', display: 'flex', justifyContent: 'center', margin: 'auto', border: BRing ? `3px solid ${BRing}` : '3px solid ' + pickColor(sectionStatus['B']) }}>
                            <div style={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: pickColor(sectionStatus['B']), margin: 'auto' }}></div>
                        </div>
                    </div>
                    <div style={{ flex: '1', height: '3px', border: '3px solid #9f3', margin: 'auto 0' }}></div>
                </div>
                <div style={{ marginTop: '5px' }}><span style={props.activeSection === 'B' ? activeStyle : {}}>Enrollment Counts</span></div>
            </div>
            <div id='sectionC' style={{ flex: '1', textAlign: 'center' }} onClick={() => props.handler('C')}>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: '1', height: '3px', border: '3px solid #9f3', margin: 'auto 0' }}></div>
                    <div onMouseEnter={() => setCRing('blue')} onMouseMove={() => setCRing('blue')} onMouseOut={() => setCRing('')}>
                        <div style={{ flex: '1', width: '37px', height: '37px', borderRadius: '50%', display: 'flex', justifyContent: 'center', margin: 'auto', border: CRing ? `3px solid ${CRing}` : '3px solid ' + pickColor(sectionStatus['C']) }}>
                            <div style={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: pickColor(sectionStatus['C']), margin: 'auto' }}></div>
                        </div>
                    </div>
                    <div style={{ flex: '1', height: '3px', border: '3px solid #9f3', margin: 'auto 0' }}></div>
                </div>
                <div style={{ marginTop: '5px' }}><span style={props.activeSection === 'C' ? activeStyle : {}}>Major Content</span></div>
            </div>
            <div id='sectionD' style={{ flex: '1', textAlign: 'center' }} onClick={() => props.handler('D')}>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: '1', height: '3px', border: '3px solid #9f3', margin: 'auto 0' }}></div>
                    <div onMouseEnter={() => setDRing('blue')} onMouseMove={() => setDRing('blue')} onMouseOut={() => setDRing('')}>
                        <div style={{ flex: '1', width: '37px', height: '37px', borderRadius: '50%', display: 'flex', justifyContent: 'center', margin: 'auto', border: DRing ? `3px solid ${DRing}` : '3px solid ' + pickColor(sectionStatus['D']) }}>
                            <div style={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: pickColor(sectionStatus['D']), margin: 'auto' }}></div>
                        </div>
                    </div>
                    <div style={{ flex: '1', height: '3px', border: '3px solid #9f3', margin: 'auto 0' }}></div>
                </div>
                <div style={{ marginTop: '5px' }}><span style={props.activeSection === 'D' ? activeStyle : {}}>Cancer Information</span></div>
            </div>
            <div id='sectionE' style={{ flex: '1', textAlign: 'center' }} onClick={() => props.handler('E')}>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: '1', height: '3px', border: '3px solid #9f3', margin: 'auto 0' }}></div>
                    <div onMouseEnter={() => setERing('blue')} onMouseMove={() => setERing('blue')} onMouseOut={() => setERing('')}>
                        <div style={{ flex: '1', width: '37px', height: '37px', borderRadius: '50%', display: 'flex', justifyContent: 'center', margin: 'auto', border: ERing ? `3px solid ${ERing}` : '3px solid ' + pickColor(sectionStatus['E']) }}>
                            <div style={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: pickColor(sectionStatus['E']), margin: 'auto' }}></div>
                        </div>
                    </div>
                    <div style={{ flex: '1', height: '3px', border: '3px solid #9f3', margin: 'auto 0' }}></div>
                </div>
                <div style={{ marginTop: '5px' }}><span style={props.activeSection === 'E' ? activeStyle : {}}>Mortality</span></div>
            </div>
            <div id='sectionF' style={{ flex: '1', textAlign: 'center' }} onClick={() => props.handler('F')}>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: '1', height: '3px', border: '3px solid #9f3', margin: 'auto 0' }}></div>
                    <div onMouseEnter={() => setFRing('blue')} onMouseMove={() => setFRing('blue')} onMouseOut={() => setFRing('')}>
                        <div style={{ flex: '1', width: '37px', height: '37px', borderRadius: '50%', display: 'flex', justifyContent: 'center', margin: 'auto', border: FRing ? `3px solid ${FRing}` : '3px solid ' + pickColor(sectionStatus['F']) }}>
                            <div style={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: pickColor(sectionStatus['F']), margin: 'auto' }}></div>
                        </div>
                    </div>
                    <div style={{ flex: '1', height: '3px', border: '3px solid #9f3', margin: 'auto 0' }}></div>
                </div>
                <div style={{ marginTop: '5px', paddingLeft: '0', paddingRight: '0', width: '214px' }}><span style={props.activeSection === 'F' ? specialHeader : {}}>Data Linkage & Harmonization</span></div>
            </div>
            <div id='sectionG' style={{ flex: '1', textAlign: 'center' }} onClick={() => props.handler('G')}>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: '1', height: '3px', border: '3px solid #9f3', margin: 'auto 0' }}></div>
                    <div onMouseEnter={() => setGRing('blue')} onMouseMove={() => setGRing('blue')} onMouseOut={() => setGRing('')}>
                        <div style={{ flex: '1', width: '37px', height: '37px', borderRadius: '50%', display: 'flex', justifyContent: 'center', margin: 'auto', border: GRing ? `3px solid ${GRing}` : '3px solid ' + pickColor(sectionStatus['G']) }}>
                            <div style={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: pickColor(sectionStatus['G']), margin: 'auto' }}></div>
                        </div>
                    </div>
                    <div style={{ flex: '1' }}></div>
                </div>
                <div style={{ marginTop: '5px' }}><span style={props.activeSection === 'G' ? activeStyle : {}}>Specimens</span></div>
            </div>
        </div>
        }
    </div>
}

export default QuestionnaireHeader