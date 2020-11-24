const InitialStates = {
    cohort: {
        hasLoaded: false,
        sectionAStatus: '',
        cohort_Id: null,
        cohort_name: '',
        cohort_acronym: '',
        completionDate: '2020-10-12T05:00:00.000Z',
        completerName: '',
        completerPosition: '',
        completerPhone: '',
        completerCountry: '+1',
        completerEmail: '',
        clarification_contact: null,
        contacterName: '',
        contacterPosition: '',
        contacterPhone: '',
        contacterCountry: '+1',
        contacterEmail: '',

        investigators: [
            {
                personId: null,
                name: '',
                institution: '',
                email: ''
            }
        ],
        collaboratorName: '',
        collaboratorPosition: '',
        collaboratorPhone: '',
        collaboratorCountry: '+1',
        collaboratorEmail: '',
        sameAsSomeone: null,
        cohort_description: '',
        hasAWebSite: null,
        cohort_web_site: '',
        eligible_gender_id: null,
        eligible_disease: null,
        eligible_disease_cancer_specify: '',
        eligible_disease_other_specify: '',
        enrollment_total: null,
        enrollment_year_start: null,
        enrollment_year_end: null,
        enrollment_ongoing: null,
        enrollment_target: null,
        enrollment_year_complete: null,
        enrollment_age_min: null,
        enrollment_age_max: null,
        enrollment_age_median: null,
        enrollment_age_mean: null,
        current_age_min: null,
        current_age_max: null,
        current_age_median: null,
        current_age_mean: null,
        time_interval: '',
        most_recent_year: null,
        data_collected_in_person: null,
        data_collected_phone: null,
        data_collected_paper: null,
        data_collected_web: null,
        data_collected_other: null,
        data_collected_other_specify: '',
        requireNone: null,
        requireCollab: null,
        requireIrb: null,
        requireData: null,
        restrictGenoInfo: null,
        restrictOtherDb: null,
        restrictCommercial: null,
        restrictOther: null,
        restrictOtherSpecify: '',
        strategy_routine: null,
        strategy_mailing: null,
        strategy_aggregate_study: null,
        strategy_individual_study: null,
        strategy_invitation: null,
        strategy_other: null,
        strategy_other_specify: '',
        questionnaireFile: null,
        mainCohortFile: null,
        dataFile: null,
        specimenFile: null,
        publicationFile: null,
        questionnaireFileName: '',
        mainFileName: '',
        dataFileName: '',
        specimenFileName: '',
        publicationFileName: '',
        questionnaire_url: '',
        main_cohort_url: '',
        data_url: '',
        specimen_url: '',
        publication_url: ''
    },
    cohortErrors: {
        completionDate: 'please provide a value',
        clarification_contact: 'please choose one',
        completerName: 'please provide a value',
        completerPosition: 'please provide a value',
        completerEmail: 'please provide a value',
        contacterName: 'please provide a value',
        contacterPosition: 'please provide a value',
        contacterEmail: 'please provide a value',
        collaboratorName: 'please provide a value',
        collaboratorPosition: 'please provide a value',
        collaboratorEmail: 'please provide a value',
        investigatorName: 'please provide a value',
        investigatorInsitution: 'please provide a value',
        investigatorEmail: 'please provide a value',
        eligible_gender_id: 'please select one',
        enrollment_ongoing: 'please select one',
        enrollment_total: 'please provide a value',
        enrollment_year_start: 'please provide a value',
        enrollment_year_end: 'please provide a value',
        enrollment_ongoing: 'please select one',
        enrollment_target: 'please specify',
        enrollment_year_complete: 'please specify',
        enrollment_age_min: 'please specify',
        enrollment_age_max: 'please specify',
        enrollment_age_mean: 'please specify',
        enrollment_age_median: 'please specify',
        current_age_min: 'please specify',
        current_age_max: 'please specify',
        current_age_mean: 'please specify',
        current_age_median: 'please specify',
        time_interval: 'please provide a value',
        most_recent_year: 'please provide a value',
        dataCollection: 'please select at least one value',
        requirements: 'please select at least one value',
        strategy: 'please select at least one value',
        data_collected_other_specify: 'please specify',
        restrictions_other_specify: 'please specify',
        strategy_other_specify: 'please specify',
        questionnaire: false,
        main: false,
        data: false,
        specimen: false,
        publication: false
    },
    enrollmentCount: {
        'hasLoaded': false,
        '111': 50,
        '112': 50,
        '113': 50,
        '121': 50,
        '122': 50,
        '123': 50,
        '131': 50,
        '132': 50,
        '133': 50,
        '141': 450,
        '211': 50,
        '212': 50,
        '213': 50,
        '221': 50,
        '222': 50,
        '223': 50,
        '231': 50,
        '232': 50,
        '233': 50,
        '241': 450,
        '311': 50,
        '312': 50,
        '313': 50,
        '321': 50,
        '322': 50,
        '323': 50,
        '331': 50,
        '332': 50,
        '333': 50,
        '341': 450,
        '411': 50,
        '412': 50,
        '413': 50,
        '421': 50,
        '422': 50,
        '423': 50,
        '431': 50,
        '432': 50,
        '433': 50,
        '441': 450,
        '511': 50,
        '512': 50,
        '513': 50,
        '521': 50,
        '522': 50,
        '523': 50,
        '531': 50,
        '532': 50,
        '533': 50,
        '541': 450,
        '611': 50,
        '612': 50,
        '613': 50,
        '621': 50,
        '622': 50,
        '623': 50,
        '631': 50,
        '632': 50,
        '633': 50,
        '641': 450,
        '711': 50,
        '712': 50,
        '713': 50,
        '721': 50,
        '722': 50,
        '723': 50,
        '731': 50,
        '732': 50,
        '733': 50,
        '741': 450,
        '811': 350,
        '812': 350,
        '813': 350,
        '821': 350,
        '822': 350,
        '823': 350,
        '831': 350,
        '832': 350,
        '833': 350,
        '841': 3150,
        'mostRecentDate': '2020-10-12T05:00:00.000Z',
        'sectionBStatus': ''
    },
    enrollmentCountErrors: {
        mostRecentDate: 'please provide a value'
    }, 
    majorContent: {
        hasLoaded: false,
        seStatusBaseLine: null,
        seStatusFollowUp: null,
        educationBaseLine: null,
        educationFollowUp: null,
        maritalStatusBaseLine: null,
        maritalStatusFollowUp: null,
        originBaseLine: null,
        originFollowUp: null,
        empStatusBaseLine: null,
        empStatusFollowUp: null,
        insuranceStatusBaseLine: null,
        insuranceStatusFollowUp: null,
        anthropometryBaseLine: null,
        anthropometryFollowUp: null,
        dietaryBaseLine: null,
        dietaryFollowUp: null,
        supplementBaseLine: null,
        supplementFollowUp: null,
        medicineBaseLine: null,
        medicineFollowUp: null,
        prescriptionBaseLine: null,
        prescriptionFollowUp: null,
        nonprescriptionBaseLine: null,
        nonprescriptionFollowUp: null,
        alcoholBaseLine: null,
        alcoholFollowUp: null,
        cigaretteBaseLine: null,
        cigaretteFollowUp: null,
        cigarBaseLine: null,
        cigarFollowUp: null,
        pipeBaseLine: null,
        pipeFollowUp: null,
        tobaccoBaseLine: null,
        tobaccoFollowUp: null,
        ecigarBaseLine: null,
        ecigarFollowUp: null,
        noncigarOtherBaseLine: null,
        noncigarOtherFollowUp: null,
        noncigarBaseLineSpecify: null,
        noncigarFollowUpSpecify: null,
        physicalBaseLine: null,
        physicalFollowUp: null,
        sleepBaseLine: null,
        sleepFollowUp: null,
        reproduceBaseLine: null,
        reproduceFollowUp: null,
        reportedHealthBaseLine: null,
        reportedHealthFollowUp: null,
        lifeBaseLine: null,
        lifeFollowUp: null,
        socialSupportBaseLine: null,
        socialSupportFollowUp: null,
        cognitionBaseLine: null,
        cognitionFollowUp: null,
        depressionBaseLine: null,
        depressionFollowUp: null,
        psychosocialBaseLine: null,
        psychosocialFollowUp: null,
        fatigueBaseLine: null,
        fatigueFollowUp: null,
        cancerHistoryBaseLine: null,
        cancerHistoryFollowUp: null,
        cancerPedigreeBaseLine: null,
        cancerPedigreeFollowUp: null,
        physicalMeasureBaseLine: null,
        physicalMeasureFollowUp: null,
        exposureBaseLine: null,
        exposureFollowUp: null,
        residenceBaseLine: null,
        residenceFollowUp: null,
        diabetesBaseLine: null,
        diabetesFollowUp: null,
        strokeBaseLine: null,
        strokeFollowUp: null,
        copdBaseLine: null,
        copdFollowUp: null,
        cardiovascularBaseLine: null,
        cardiovascularFollowUp: null,
        osteoporosisBaseLine: null,
        osteoporosisFollowUp: null,
        mentalBaseLine: null,
        mentalFollowUp: null,
        cognitiveDeclineBaseLine: null,
        cognitiveDeclineFollowUp: null,
        cancerToxicity: null,
        cancerLateEffects: null,
        cancerSymptom: null,
        cancerOther: null,
        cancerOtherSpecify: null
    },
    majorContentError: {
        seStatusBaseLine: null,
        seStatusFollowUp: null,
        educationBaseLine: null,
        educationFollowUp: null,
        maritalStatusBaseLine: null,
        maritalStatusFollowUp: null,
        originBaseLine: null,
        originFollowUp: null,
        empStatusBaseLine: null,
        empStatusFollowUp: null,
        insuranceStatusBaseLine: null,
        insuranceStatusFollowUp: null,
        anthropometryBaseLine: null,
        anthropometryFollowUp: null,
        dietaryBaseLine: null,
        dietaryFollowUp: null,
        supplementBaseLine: null,
        supplementFollowUp: null,
        medicineBaseLine: null,
        medicineFollowUp: null,
        prescriptionBaseLine: null,
        prescriptionFollowUp: null,
        nonprescriptionBaseLine: null,
        nonprescriptionFollowUp: null,
        alcoholBaseLine: null,
        alcoholFollowUp: null,
        cigaretteBaseLine: null,
        cigaretteFollowUp: null,
        cigarBaseLine: null,
        cigarFollowUp: null,
        pipeBaseLine: null,
        pipeFollowUp: null,
        tobaccoBaseLine: null,
        tobaccoFollowUp: null,
        ecigarBaseLine: null,
        ecigarFollowUp: null,
        noncigarOtherBaseLine: null,
        noncigarOtherFollowUp: null,
        noncigarBaseLineSpecify: null,
        noncigarFollowUpSpecify: null,
        physicalBaseLine: null,
        physicalFollowUp: null,
        sleepBaseLine: null,
        sleepFollowUp: null,
        reproduceBaseLine: null,
        reproduceFollowUp: null,
        reportedHealthBaseLine: null,
        reportedHealthFollowUp: null,
        lifeBaseLine: null,
        lifeFollowUp: null,
        socialSupportBaseLine: null,
        socialSupportFollowUp: null,
        cognitionBaseLine: null,
        cognitionFollowUp: null,
        depressionBaseLine: null,
        depressionFollowUp: null,
        psychosocialBaseLine: null,
        psychosocialFollowUp: null,
        fatigueBaseLine: null,
        fatigueFollowUp: null,
        cancerHistoryBaseLine: null,
        cancerHistoryFollowUp: null,
        cancerPedigreeBaseLine: null,
        cancerPedigreeFollowUp: null,
        physicalMeasureBaseLine: null,
        physicalMeasureFollowUp: null,
        exposureBaseLine: null,
        exposureFollowUp: null,
        residenceBaseLine: null,
        residenceFollowUp: null,
        diabetesBaseLine: null,
        diabetesFollowUp: null,
        strokeBaseLine: null,
        strokeFollowUp: null,
        copdBaseLine: null,
        copdFollowUp: null,
        cardiovascularBaseLine: null,
        cardiovascularFollowUp: null,
        osteoporosisBaseLine: null,
        osteoporosisFollowUp: null,
        mentalBaseLine: null,
        mentalFollowUp: null,
        cognitiveDeclineBaseLine: null,
        cognitiveDeclineFollowUp: null,
        cancerToxicity: null,
        cancerLateEffects: null,
        cancerSymptom: null,
        cancerOther: null,
        cancerOtherSpecify: null
    },
    mortality: {
        hasLoaded: false,
        mortalityYear: null,
        deathIndex: null,
        deathCertificate: null,
        otherDeath: null,
        otherDeathSpecify: null,
        haveDeathDate: null,
        haveDeathCause: null,
        icd9: null,
        icd10: null,
        notCoded: null,
        otherCode: null,
        otherCodeSpecify: null,
        deathNumbers: null,
        sectionEStatus: '',
    },
    cancerCount: {
        '1-2-1': 50,
        '2-2-1': 50,
        '3-2-1': 50,
        '4-2-1': 50,
        '5-2-1': 50,
        '6-2-1': 50,
        '7-2-1': 50,
        '8-2-1': 50,
        '9-2-1': 50,
        '10-2-1': 50,
        '11-2-1': 50,
        '12-2-1': 50,
        '13-2-1': 50,
        '14-2-1': 50,
        '15-2-1': 50,
        '16-2-1': 50,
        '17-2-1': 50,
        '18-2-1': 50,
        '19-2-1': 50,
        '20-2-1': 50,
        '21-2-1': 50,
        '22-2-1': 50,
        '23-2-1': 50,
        '24-2-1': 50,
        '25-2-1': 50,
        '26-2-1': 50,
        '27-2-1': 50,
        '28-2-1': 50,
        '1-2-2': 50,
        '2-2-2': 50,
        '3-2-2': 50,
        '4-2-2': 50,
        '5-2-2': 50,
        '6-2-2': 50,
        '7-2-2': 50,
        '8-2-2': 50,
        '9-2-2': 50,
        '10-2-2': 50,
        '11-2-2': 50,
        '12-2-2': 50,
        '13-2-2': 50,
        '14-2-2': 50,
        '15-2-2': 50,
        '16-2-2': 50,
        '17-2-2': 50,
        '18-2-2': 50,
        '19-2-2': 50,
        '20-2-2': 50,
        '21-2-2': 50,
        '22-2-2': 50,
        '23-2-2': 50,
        '24-2-2': 50,
        '25-2-2': 50,
        '26-2-2': 50,
        '27-2-2': 50,
        '28-2-2': 50,
        '1-1-1': 50,
        '2-1-1': 50,
        '3-1-1': 50,
        '4-1-1': 50,
        '5-1-1': 50,
        '6-1-1': 50,
        '7-1-1': 50,
        '8-1-1': 50,
        '9-1-1': 50,
        '10-1-1': 50,
        '11-1-1': 50,
        '12-1-1': 50,
        '13-1-1': 50,
        '14-1-1': 50,
        '15-1-1': 50,
        '16-1-1': 50,
        '17-1-1': 50,
        '18-1-1': 50,
        '19-1-1': 50,
        '20-1-1': 50,
        '21-1-1': 50,
        '22-1-1': 50,
        '23-1-1': 50,
        '24-1-1': 50,
        '25-1-1': 50,
        '26-1-1': 50,
        '27-1-1': 50,
        '28-1-1': 50,
        '1-1-2': 50,
        '2-1-2': 50,
        '3-1-2': 50,
        '4-1-2': 50,
        '5-1-2': 50,
        '6-1-2': 50,
        '7-1-2': 50,
        '8-1-2': 50,
        '9-1-2': 50,
        '10-1-2': 50,
        '11-1-2': 50,
        '12-1-2': 50,
        '13-1-2': 50,
        '14-1-2': 50,
        '15-1-2': 50,
        '16-1-2': 50,
        '17-1-2': 50,
        '18-1-2': 50,
        '19-1-2': 50,
        '20-1-2': 50,
        '21-1-2': 50,
        '22-1-2': 50,
        '23-1-2': 50,
        '24-1-2': 50,
        '25-1-2': 50,
        '26-1-2': 50,
        '27-1-2': 50,
        '28-1-2': 50
    },
    sectionStatus: {
        'A': 'complete',
        'B': 'complete',
        'C': 'complete',
        'D': 'complete',
        'E': 'complete',
        'F': 'complete',
        'G': 'incomplete'
    }
}

export default InitialStates