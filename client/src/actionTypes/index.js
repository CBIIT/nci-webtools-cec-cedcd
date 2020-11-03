const actionTypes = {
    setHasLoaded: 'SET_COHORT_LOADED_FROM_DB',
    setCohortName: 'SET_COHORT_NAME',
    setAcronym: 'SET_COHORT_ACRONYM',
    setCompletionDate: 'SET_COHORT_COMPLETION_DATE',
    setCompleterName: 'SET_COHORT_COMPLETER_NAME',
    setCompleterPosition: 'SET_COHORT_COMPLETER_POSITION',
    setCompleterPhone: 'SET_COHORT_COMPLETER_PHONE',
    setCompleterEmail: 'SET_COHORT_COMPLETER_EMAIL',
    setContacterRight: 'SET_COHORT_COMPLETER_AS_CONTACTER',
    setContacterName: 'SET_COHORT_CONTACTER_NAME',
    setContacterPosition: 'SET_COHORT_CONTACTER_POSITION',
    setContacterPhone: 'SET_COHORT_CONTACTER_PHONE',
    setContacterEmail: 'SET_COHORT_CONTACTER_EMAIL',
    setInvestigators: 'SET_COHORT_INVESTIGATORS',
    setInvestigatorName: 'SET_COHORT_INVESTIGATOR_NAME',
    setInvestigatorInstitution: 'SET_COHORT_INVESTIGATOR_INSTITUTION',
    setInvestigatorEmail: 'SET_COHORT_INVESTIGATOR_EMAIL',
    addInvestigator: 'ADD_NEW_INVESTIGATOR',
    setCollaboratorName: 'SET_COLLABORATOR_NAME',
    setCollaboratorPosition: 'SET_COLLABORATOR_POSITION',
    setCollaboratorPhone: 'SET_COLLABORATOR_PHONE',
    setCollaboratorEmail: 'SET_COLLABORATOR_EMAIL',  
    setSameAsSomeone: 'SET_COHORT_PI_CONTACT_SAME_AS_SOMEONE',
    setDescription: 'SET_COHORT_DESCRIPTION',
    setEligibleGender: 'SET_COHORT_ELIGIBLE_GENDER',
    setHasAWebSite: 'SET_COHORT_HAS_A_WEBSITE',
    setWebSite: 'SET_COHORT_WEBSITE',
    setHasCancerSite: 'SET_COHORT_HAS_CANCER_SITE',
    setCancerSites: 'SET_COHORT_CANCER_SITES',
    setEligibilityCriteriaOther: 'SET_COHORT_ELIGIBILITY_CRITERIA_OTHER',
    setEnrolledTotal: 'SET_COHORT_TOTAL_ENROLLED',
    setEnrollStartYear: 'SET_COHORT_ENROLL_START_YEAR',
    setEnrollEndYear: 'SET_COHORT_ENROLL_END_YEAR',
    setEnrollOnGoing: 'SET_COHORT_ENROLL_ON_GOING',
    setNumOfPlans: 'SET_COHORT_ENROLL_NUMBER_OF_PLANS',
    setYearToComplete: 'SET_COHORT_ENROLL_YEAR_TO_COMPLETE',
    setBaseLineMinAge: 'SET_COHORT_BASELINE_MIN_AGE',
    setBaseLineMaxAge: 'SET_COHORT_BASELINE_MAX_AGE',
    setBaseLineMedianAge: 'SET_COHORT_BASELIEN_MEDIAN_AGE',
    setBaseLineMeanAge: 'SET_COHORT_BASELIEN_MEAN_AGE',
    setCurrentMinAge: 'SET_COHORT_CURRENT_MIN_AGE',
    setCurrentMaxAge: 'SET_COHORT_CURRENT_MAX_AGE',
    setCurrentMedianAge: 'SET_COHORT_CURRENT_MEDIAN_AGE',
    setCurrentMeanAge: 'SET_COHORT_CURRENT_MEAN_AGE',
    setQuestionnarieFrequency: 'SET_COHORT_QUESTIONNAIREFREQUENCY', 
    setMostRecentYear: 'SET_COHORT_MOST_RECENT_YEAR',
    setCollectedInPerson: 'SET_COHORT_COLLECTED_IN_PERSON', 
    setCollectedPhone: 'SET_COHORT_COLLECTED_BY_PHONE', 
    setCollectedPaper: 'SET_COHORT_COLLECTED_BY_PAPER',
    setCollectedWeb: 'SET_COHORT_COLLECTED_ON_WEB', 
    setCollectedOther: 'SET_COHORT_COLLECTED_OTHER',
    setOtherMeans: 'SET_COHORT_COLLECTED_OTHER_SPECIFY',
    setRequireNone: 'SET_COHORT_REQUIRE_NONE',
    setRequireCollab: 'SET_COHORT_REQUIRE_COLLAB',
    setRequireIrb: 'SET_COHORT_REQUIRE_IRB',
    setRequireData: 'SET_COHORT_REQUIRE_DATA',
    setRestrictGenoInfo: 'SET_COHORT_RESTRICT_GENO_INFO',
    setRestrictOtherDb: 'SET_COHORT_RESTRICT_OTHER_DATABASE',
    setRestrictCommercial: 'SET_COHORT_RESTRICT_COMMERCIAL',
    setRestrictOther: 'SET_COHORT_RESTRICT_OTHER',
    setRestrictOtherSpecify: 'SET_COHORT_RESTRICT_OTHER_SPECIFY',
    setStrategyRoutine: 'SET_COHORT_STRATEGY_ROUTINE',
    setStrategyMailing: 'SET_COHORT_STRATEGY_MAILING',
    setStrategyAggregateStudy: 'SET_COHORT_STRATEGY_AGGREGATED_STUDY',
    setStrategyIndividualStudy: 'SET_STRATEGY_INDIVIDUAL_STUDY',
    setStrategyInvitation: 'SET_STRATEGY_INVITATION',
    setStrategyOther: 'SET_STRATEGY_OTHER',
    setStrategyOtherSepcify: 'SET_STRATEGY_OTHER_SPECIFY',
    setQuestionnaireFile: 'SET_COHORT_QUESTIONNAIRE_FILE',
    setMainCohortFile: 'SET_COHORT_MAIN_FILE',
    setDataFile: 'SET_COHORT_DATA_FILE',
    setSpecimenFile: 'SET_COHORT_SPECIMEN_FILE',
    setPublicationFile: 'SET_COHORT_PUBLICATION_FILE',
    setQuestionnaireUrl: 'SET_COHORT_QUESTIONNAIRE_URL',
    setMainCohortUrl: 'SET_COHORT_MAIN_URL',
    setDataUrl: 'SET_COHORT_DATA_URL',
    setSpecimenUrl: 'SET_COHORT_SPECIMENT_URL',
    setPublicationUrl: 'SET_COHORT_PUBLICATION_URL',
    /*section B*/
    updateEnrollmentCount: 'UPDATE_ENROLLMENT_COUNT',
    updateTotals: 'UPDATE_TOTALS',
    updateMostRecentDate: 'UPDATE_MOST_RECENT_DATE',
    /*section C*/
    setSeStatusBaseLine: 'SET_MC_SESTATUS_BSASELINE',
    setSeStatusFollowUp: 'SET_MC_SESTATUS_FOLLOWUP',
    setEducationBaseLine: 'SET_MC_EDUCATION_BASELINE',
    setEducationFollowUp: 'SET_MC_EDUCATION_FOLLOWUP',
    setMaritalStatusBaseLine: 'SET_MC_MARITAL_STATUS_BASELINE',
    setMaritalStatusFollowUp: 'SET_MC_MARITAL_STATUS_FOLLOWUP',
    setOriginBaseLine: 'SET_MC_ORIGIN_BASELINE',
    setOriginFollowUp: 'SET_MC_ORIGIN_FOLLOWUP',
    setEmpStatusBaseLine: 'SET_MC_EMPLOYMENT_BASELINE',
    setEmpStatusFollowUp: 'SET_MC_EMPLOYMENT_FOLLOWUP',
    setInsuranceStatusBaseLine: 'SET_MC_INSURANCE_BASELINE',
    setInsuranceStatusFollowUp: 'SET_MC_INSURANCE_FOLLOWUP',
    setAnthropometryBaseLine: 'SET_MC_ANTHROPOMETRY_BASELINE',
    setAnthropometryFollowUp: 'SET_MC_ANTHROPOMETRY_FOLLOWUP',
    setDietaryBaseLine: 'SET_MC_DIETARY_BASELINE',
    setDietaryFollowUp: 'SET_MC_DIETARY_FOLLOWUP',
    setSupplementBaseLine: 'SET_MC_SUPPLEMENT_BASELINE',
    setSupplementFollowUp: 'SET_MC_SUPPLEMENT_FOLLOWUP',
    setMedicineBaseLine: 'SET_MC_MEDICINE_BASELINE',
    setMedicineFollowUp: 'SET_MC_MEDICINE_FOLLOWUP',
    setPrescriptionBaseLine: 'SET_MC_PRESCRIPTION_BASELINE',
    setPrescriptionFollowUp: 'SET_MC_PRESCRIPTION_FOLLOWUP',
    setNonprescriptionBaseLine: 'SET_MC_NONPRESCRIPTION_BASELINE',
    setNonprescriptionFollowUp: 'SET_MC_NONPRESCRIPTION_FOLLOWUP',
    setAlcoholBaseLine: 'SET_MC_ALCOHOL_BASELINE',
    setAlcoholFollowUp: 'SET_MC_ALCOHOL_FOLLOWUP',
    setCigaretteBaseLine: 'SET_MC_CIGARETTE_BASELINE',
    setCigaretteFollowUp: 'SET_MC_CIGARETTE_FOLLOWUP',
    setCigarBaseLine: 'SET_MC_CIGAR_BASELINE',
    setCigarFollowUp: 'SET_MC_CIGAR_FOLLOWUP',
    setPipeBaseLine: 'SET_MC_PIPE_BASELINE',
    setPipeFollowUp: 'SET_MC_PIPE_FOLLOWUP',
    setTobaccoBaseLine: 'SET_MC_TOBACCO_BASELINE',
    setTobaccoFollowUp : 'SET_MC_TOBACCO_FOLLOWUP',
    setEcigarBaseLine: 'SET_MC_ECIGAR_BASELINE',
    setEcigarFollowUp: 'SET_MC_ECIGAR_FOLLOWUP',
    setNoncigarOtherBaseLine: 'SET_MC_NONCIGAROTHER_BASELINE',
    setNoncigarOtherFollowUp : 'SET_MC_NONCIGAROTHER_FOLLOWUP ',
    setNoncigarBaseLineSpecify: 'SET_MC_NONCIGARBASELINE_SPECIFY',
    setNoncigarFollowUpSpecify: 'SET_MC_NONCIGARFOLLOWUP_SPECIFY',
    setPhysicalBaseLine: 'SET_MC_PHYSICAL_BASELINE',
    setPhysicalFollowUp : 'SET_MC_PHYSICAL_FOLLOWUP',
    setSleepBaseLine: 'SET_MC_SLEEP_BASELINE',
    setSleepFollowUp : 'SET_MC_SLEEP_FOLLOWUP',
    setReproduceBaseLine: 'SET_MC_REPRODUCE_BASELINE',
    setReproduceFollowUp : 'SET_MC_REPRODUCE_FOLLOWUP',
    setReportedHealthBaseLine: 'SET_MC_REPORTEDHEALTH_BASELINE',
    setReportedHealthFollowUp : 'SET_MC_REPORTEDHEALTH_FOLLOWUP',
    setLifeBaseLine: 'SET_MC_LIFE_BASELINE',
    setLifeFollowUp: 'SET_MC_LIFE_FOLLOWUP',
    setSocialSupportBaseLine: 'SET_MC_SOCIALSUPPORT_BASELINE',
    setSocialSupportFollowUp: 'SET_MC_SOCIALSUPPORT_FOLLOWUP',
    setCognitionBaseLine: 'SET_MC_COGNITION_BASELINE',
    setCognitionFollowUp : 'SET_MC_COGNITION_FOLLOWUP',
    setDepressionBaseLine: 'SET_MC_DEPRESSION_BASELINE',
    setDepressionFollowUp: 'SET_MC_DEPRESSION_FOLLOWUP',
    setPsychosocialBaseLine: 'SET_MC_PSYCHOSOCIAL_BASELINE',
    setPsychosocialFollowUp : 'SET_MC_PSYCHOSOCIAL_FOLLOWUP',
    setFatigueBaseLine: 'SET_MC_FATIGUE_BASELINE',
    setFatigueFollowUp : 'SET_MC_FATIGUE_FOLLOWUP',
    setCancerHistoryBaseLine: 'SET_MC_CANCERHISTORY_BASELINE',
    setCancerHistoryFollowUp : 'SET_MC_CANCERHISTORY_FOLLOWUP',
    setCancerPedigreeBaseLine: 'SET_MC_CANCERPEDIGREE_BASELINE',
    setCancerPedigreeFollowUp: 'SET_MC_CANCERPEDIGREE_FOLLOWUP',
    setPhysicalMeasureBaseLine: 'SET_MC_PHYSICALMEASURE_BASELINE',
    setPhysicalMeasureFollowUp: 'SET_MC_PHYSICALMEASURE_FOLLOWUP',
    setExposureBaseLine: 'SET_MC_EXPOSURE_BASELINE',
    setExposureFollowUp: 'SET_MC_EXPOSURE_FOLLOWUP',
    setResidenceBaseLine: 'SET_MC_RESIDENCE_BASELINE',
    setResidenceFollowUp : 'SET_MC_RESIDENCE_FOLLOWUP',
    setDiabetesBaseLine: 'SET_MC_DIABETES_BASELINE',
    setDiabetesFollowUp: 'SET_MC_DIABETES_FOLLOWUP',
    setStrokeBaseLine: 'SET_MC_STROKE_BASELINE',
    setStrokeFollowUp: 'SET_MC_STROKE_FOLLOWUP',
    setCopdBaseLine: 'SET_MC_COPD_BASELINE',
    setCopdFollowUp: 'SET_MC_COPD_FOLLOWUP',
    setCardiovascularBaseLine: 'SET_MC_CARDIOVASCULAR_BASELINE',
    setCardiovascularFollowUp: 'SET_MC_CARDIOVASCULAR_FOLLOWUP',
    setOsteoporosisBaseLine: 'SET_MC_OSTEOPOROSIS_BASELINE',
    setOsteoporosisFollowUp: 'SET_MC_OSTEOPOROSIS_FOLLOWUP',
    setMentalBaseLine: 'SET_MC_MENTAL_BASELINE',
    setMentalFollowUp: 'SET_MC_MENTAL_FOLLOWUP',
    setCognitiveDeclineBaseLine: 'SET_MC_COGNITIVEDECLINE_BASELINE',
    setCognitiveDeclineFollowUp: 'SET_MC_COGNITIVEDECLINE_FOLLOWUP',
    setCancerToxicity: 'SET_MC_CANCER_TOXICITY',
    setCancerLateEffects: 'SET_MC_CANCERLAT_EEFFECTS',
    setCancerSymptom : 'SET_MC_CANCER_SYMPTOM',
    setCancerOther: 'SET_MC_CANCER_OTHER',
    setCancerOtherSpecify: 'SET_MC_CANCER_OTHER_SPECIFY',

    /* section D */
    setCancerCount: 'SET_CANCER_COUNT',
    setSelfReport: 'SET_CANCER_CASE_SELF_REPORTED',
    setSectionStatus: 'SET_COHORT_SECTION_STATUS'
}

export default  actionTypes