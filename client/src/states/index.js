const InitialStates = {
    cohort_status: '',
    cohort: {
        hasLoaded: false,
        sectionAStatus: '',
        cohort_name: '',
        cohort_acronym: '',
        completionDate: '2020-10-12T05:00:00.000Z',
        completerName: '',
        completerPosition: '',
        completerPhone: '',
        completerCountry: '+1',
        completerEmail: '',
        clarification_contact: true,
        contacterName: '',
        contacterPosition: '',
        contacterPhone: '',
        contacterCountry: '+1',
        contacterEmail: '',
        investigators: [
            {
                personId: true,
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
        sameAsSomeone: true,
        cohort_description: '',
        hasAWebSite: true,
        cohort_web_site: '',
        eligible_gender_id: true,
        eligible_disease: true,
        eligible_disease_cancer_specify: '',
        eligible_disease_other_specify: '',
        enrollment_total: '',
        enrollment_year_start: '',
        enrollment_year_end: '',
        enrollment_ongoing: '',
        enrollment_target: '',
        enrollment_year_complete: '',
        enrollment_age_min: '',
        enrollment_age_max: '',
        enrollment_age_median: '',
        enrollment_age_mean: '',
        current_age_min: '',
        current_age_max: '',
        current_age_median: '',
        current_age_mean: '',
        time_interval: '',
        most_recent_year: '',
        data_collected_in_person: true,
        data_collected_phone: true,
        data_collected_paper: true,
        data_collected_web: true,
        data_collected_other: true,
        data_collected_other_specify: '',
        requireNone: true,
        requireCollab: true,
        requireIrb: true,
        requireData: true,
        restrictGenoInfo: true,
        restrictOtherDb: true,
        restrictCommercial: true,
        restrictOther: true,
        restrictOtherSpecify: '',
        strategy_routine: true,
        strategy_mailing: true,
        strategy_aggregate_study: true,
        strategy_individual_study: true,
        strategy_invitation: true,
        strategy_other: true,
        strategy_other_specify: '',
        questionnaireFile: true,
        mainCohortFile: true,
        dataFile: true,
        specimenFile: true,
        publicationFile: true,
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
        questionnaire: true,
        main: true,
        data: true,
        specimen: true,
        publication: true
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
        seStatusBaseLine: true,
        seStatusFollowUp: true,
        educationBaseLine: true,
        educationFollowUp: true,
        maritalStatusBaseLine: true,
        maritalStatusFollowUp: true,
        originBaseLine: true,
        originFollowUp: true,
        empStatusBaseLine: true,
        empStatusFollowUp: true,
        insuranceStatusBaseLine: true,
        insuranceStatusFollowUp: true,
        anthropometryBaseLine: true,
        anthropometryFollowUp: true,
        dietaryBaseLine: true,
        dietaryFollowUp: true,
        supplementBaseLine: true,
        supplementFollowUp: true,
        medicineBaseLine: true,
        medicineFollowUp: true,
        prescriptionBaseLine: true,
        prescriptionFollowUp: true,
        nonprescriptionBaseLine: true,
        nonprescriptionFollowUp: true,
        alcoholBaseLine: true,
        alcoholFollowUp: true,
        cigaretteBaseLine: true,
        cigaretteFollowUp: true,
        cigarBaseLine: true,
        cigarFollowUp: true,
        pipeBaseLine: true,
        pipeFollowUp: true,
        tobaccoBaseLine: true,
        tobaccoFollowUp: true,
        ecigarBaseLine: true,
        ecigarFollowUp: true,
        noncigarOtherBaseLine: true,
        noncigarOtherFollowUp: true,
        noncigarBaseLineSpecify: true,
        noncigarFollowUpSpecify: true,
        physicalBaseLine: true,
        physicalFollowUp: true,
        sleepBaseLine: true,
        sleepFollowUp: true,
        reproduceBaseLine: true,
        reproduceFollowUp: true,
        reportedHealthBaseLine: true,
        reportedHealthFollowUp: true,
        lifeBaseLine: true,
        lifeFollowUp: true,
        socialSupportBaseLine: true,
        socialSupportFollowUp: true,
        cognitionBaseLine: true,
        cognitionFollowUp: true,
        depressionBaseLine: true,
        depressionFollowUp: true,
        psychosocialBaseLine: true,
        psychosocialFollowUp: true,
        fatigueBaseLine: true,
        fatigueFollowUp: true,
        cancerHistoryBaseLine: true,
        cancerHistoryFollowUp: true,
        cancerPedigreeBaseLine: true,
        cancerPedigreeFollowUp: true,
        physicalMeasureBaseLine: true,
        physicalMeasureFollowUp: true,
        exposureBaseLine: true,
        exposureFollowUp: true,
        residenceBaseLine: true,
        residenceFollowUp: true,
        diabetesBaseLine: true,
        diabetesFollowUp: true,
        strokeBaseLine: true,
        strokeFollowUp: true,
        copdBaseLine: true,
        copdFollowUp: true,
        cardiovascularBaseLine: true,
        cardiovascularFollowUp: true,
        osteoporosisBaseLine: true,
        osteoporosisFollowUp: true,
        mentalBaseLine: true,
        mentalFollowUp: true,
        cognitiveDeclineBaseLine: true,
        cognitiveDeclineFollowUp: true,
        cancerToxicity: true,
        cancerLateEffects: true,
        cancerSymptom: true,
        cancerOther: true,
        cancerOtherSpecify: true
    },
    majorContentError: {
        seStatusBaseLine: true,
        seStatusFollowUp: true,
        educationBaseLine: true,
        educationFollowUp: true,
        maritalStatusBaseLine: true,
        maritalStatusFollowUp: true,
        originBaseLine: true,
        originFollowUp: true,
        empStatusBaseLine: true,
        empStatusFollowUp: true,
        insuranceStatusBaseLine: true,
        insuranceStatusFollowUp: true,
        anthropometryBaseLine: true,
        anthropometryFollowUp: true,
        dietaryBaseLine: true,
        dietaryFollowUp: true,
        supplementBaseLine: true,
        supplementFollowUp: true,
        medicineBaseLine: true,
        medicineFollowUp: true,
        prescriptionBaseLine: true,
        prescriptionFollowUp: true,
        nonprescriptionBaseLine: true,
        nonprescriptionFollowUp: true,
        alcoholBaseLine: true,
        alcoholFollowUp: true,
        cigaretteBaseLine: true,
        cigaretteFollowUp: true,
        cigarBaseLine: true,
        cigarFollowUp: true,
        pipeBaseLine: true,
        pipeFollowUp: true,
        tobaccoBaseLine: true,
        tobaccoFollowUp: true,
        ecigarBaseLine: true,
        ecigarFollowUp: true,
        noncigarOtherBaseLine: true,
        noncigarOtherFollowUp: true,
        noncigarBaseLineSpecify: true,
        noncigarFollowUpSpecify: true,
        physicalBaseLine: true,
        physicalFollowUp: true,
        sleepBaseLine: true,
        sleepFollowUp: true,
        reproduceBaseLine: true,
        reproduceFollowUp: true,
        reportedHealthBaseLine: true,
        reportedHealthFollowUp: true,
        lifeBaseLine: true,
        lifeFollowUp: true,
        socialSupportBaseLine: true,
        socialSupportFollowUp: true,
        cognitionBaseLine: true,
        cognitionFollowUp: true,
        depressionBaseLine: true,
        depressionFollowUp: true,
        psychosocialBaseLine: true,
        psychosocialFollowUp: true,
        fatigueBaseLine: true,
        fatigueFollowUp: true,
        cancerHistoryBaseLine: true,
        cancerHistoryFollowUp: true,
        cancerPedigreeBaseLine: true,
        cancerPedigreeFollowUp: true,
        physicalMeasureBaseLine: true,
        physicalMeasureFollowUp: true,
        exposureBaseLine: true,
        exposureFollowUp: true,
        residenceBaseLine: true,
        residenceFollowUp: true,
        diabetesBaseLine: true,
        diabetesFollowUp: true,
        strokeBaseLine: true,
        strokeFollowUp: true,
        copdBaseLine: true,
        copdFollowUp: true,
        cardiovascularBaseLine: true,
        cardiovascularFollowUp: true,
        osteoporosisBaseLine: true,
        osteoporosisFollowUp: true,
        mentalBaseLine: true,
        mentalFollowUp: true,
        cognitiveDeclineBaseLine: true,
        cognitiveDeclineFollowUp: true,
        cancerToxicity: true,
        cancerLateEffects: true,
        cancerSymptom: true,
        cancerOther: true,
        cancerOtherSpecify: true
    },
    mortality: {
        hasLoaded: false,
        mortalityYear: '',
        deathIndex: 0,
        deathCertificate: 0,
        otherDeath: 0,
        otherDeathSpecify: '',
        haveDeathDate: null,
        haveDeathCause: null,
        icd9: 0,
        icd10: 0,
        notCoded: 0,
        otherCode: 0,
        otherCodeSpecify: '',
        deathNumbers: '',
        sectionEStatus: '',
    },
    dataLinkage: {
        hasLoaded: false,
        haveDataLink: null,
        haveDataLinkSpecify: null,
        haveHarmonization: null,
        haveHarmonizationSpecify: null,
        haveDeposited: null,
        dbGaP: 0,
        BioLINCC: 0,
        otherRepo: 0,
        dataOnline: null,
        dataOnlineWebsite: 0,
        dataOnlinePolicy: 0,
        dataOnlineURL: '',
        createdRepo: null,
        createdRepoSpecify: null,
        sectionFStatus: '',
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
    cancerInfo: {
        cohort: {},
        counts: {},
        form: {},
    },

    specimen: {
        counts: {
            '1-1': 0, '1-2': 0, '1-3': 0, '1-4': 0, '1-5': 0, '1-6': 0, '1-7': 0,
            '2-1': 0, '2-2': 0, '2-3': 0, '2-4': 0, '2-5': 0, '2-6': 0, '2-7': 0,
            '3-1': 0, '3-2': 0, '3-3': 0, '3-4': 0, '3-5': 0, '3-6': 0, '3-7': 0,
            '4-1': 0, '4-2': 0, '4-3': 0, '4-4': 0, '4-5': 0, '4-6': 0, '4-7': 0,
            '5-1': 0, '5-2': 0, '5-3': 0, '5-4': 0, '5-5': 0, '5-6': 0, '5-7': 0,
            '6-1': 0, '6-2': 0, '6-3': 0, '6-4': 0, '6-5': 0, '6-6': 0, '6-7': 0,
            '7-1': 0, '7-2': 0, '7-3': 0, '7-4': 0, '7-5': 0, '7-6': 0, '7-7': 0,
            '8-1': 0, '8-2': 0, '8-3': 0, '8-4': 0, '8-5': 0, '8-6': 0, '8-7': 0,
            '9-1': 0, '9-2': 0, '9-3': 0, '9-4': 0, '9-5': 0, '9-6': 0, '9-7': 0,
            '10-1': 0, '10-2': 0, '10-3': 0, '10-4': 0, '10-5': 0, '10-6': 0, '10-7': 0,
            '11-1': 0, '11-2': 0, '11-3': 0, '11-4': 0, '11-5': 0, '11-6': 0, '11-7': 0,
            '12-1': 0, '12-2': 0, '12-3': 0, '12-4': 0, '12-5': 0, '12-6': 0, '12-7': 0,
            '13-1': 0, '13-2': 0, '13-3': 0, '13-4': 0, '13-5': 0, '13-6': 0, '13-7': 0,
            '14-1': 0, '14-2': 0, '14-3': 0, '14-4': 0, '14-5': 0, '14-6': 0, '14-7': 0,
            '15-1': 0, '15-2': 0, '15-3': 0, '15-4': 0, '15-5': 0, '15-6': 0, '15-7': 0,
            '16-1': 0, '16-2': 0, '16-3': 0, '16-4': 0, '16-5': 0, '16-6': 0, '16-7': 0,
            '17-1': 0, '17-2': 0, '17-3': 0, '17-4': 0, '17-5': 0, '17-6': 0, '17-7': 0,
            '18-1': 0, '18-2': 0, '18-3': 0, '18-4': 0, '18-5': 0, '18-6': 0, '18-7': 0,
            '19-1': 0, '19-2': 0, '19-3': 0, '19-4': 0, '19-5': 0, '19-6': 0, '19-7': 0,
            '20-1': 0, '20-2': 0, '20-3': 0, '20-4': 0, '20-5': 0, '20-6': 0, '20-7': 0,
            '21-1': 0, '21-2': 0, '21-3': 0, '21-4': 0, '21-5': 0, '21-6': 0, '21-7': 0,
            '22-1': 0, '22-2': 0, '22-3': 0, '22-4': 0, '22-5': 0, '22-6': 0, '22-7': 0,
            '23-1': 0, '23-2': 0, '23-3': 0, '23-4': 0, '23-5': 0, '23-6': 0, '23-7': 0,
            '24-1': 0, '24-2': 0, '24-3': 0, '24-4': 0, '24-5': 0, '24-6': 0, '24-7': 0,
            '25-1': 0, '25-2': 0, '25-3': 0, '25-4': 0, '25-5': 0, '25-6': 0, '25-7': 0,
            '26-1': 0, '26-2': 0, '26-3': 0, '26-4': 0, '26-5': 0, '26-6': 0, '26-7': 0,
            '27-1': 0, '27-2': 0, '27-3': 0, '27-4': 0, '27-5': 0, '27-6': 0, '27-7': 0,
            '28-1': 0, '28-2': 0, '28-3': 0, '28-4': 0, '28-5': 0, '28-6': 0, '28-7': 0,
            '29-1': 0, '29-2': 0, '29-3': 0, '29-4': 0, '29-5': 0, '29-6': 0, '29-7': 0
        },
        specimenLoaded: false,
        bioBloodBaseline: true,
        bioBloodBaselineSerum: true,
        bioBloodBaselinePlasma: true,
        bioBloodBaselineBuffyCoat: true,
        bioBloodBaselineOtherDerivative: true,
        bioBloodOtherTime: true,
        bioBloodOtherTimeSerum: true,
        bioBloodOtherTimePlasma: true,
        bioBloodOtherTimeBuffyCoat: true,
        bioBloodOtherTimeOtherDerivative: true,
        bioBuccalSalivaBaseline: true,
        bioBuccalSalivaOtherTime: true,
        bioTissueBaseline: true,
        bioTissueOtherTime: true,
        bioUrineBaseline: true,
        bioUrineOtherTime: true,
        bioFecesBaseline: true,
        bioFecesOtherTime: true,
        bioOtherBaseline: true,
        bioOtherOtherTime: true,
        bioRepeatedSampleSameIndividual: true,
        bioTumorBlockInfo: true,
        bioGenotypingData: true,
        bioSequencingDataExome: true,
        bioSequencingDataWholeGenome: true,
        bioEpigeneticOrMetabolicMarkers: true,
        bioOtherOmicsData: true,
        bioTranscriptomicsData: true,
        bioMicrobiomeData: true,
        bioMetabolomicData: true,
        bioMetaFastingSample: true,
        bioMetaOutcomesInCancerStudy: true,
        bioMetaOutcomesInCvdStudy: true,
        bioMetaOutcomesInDiabetesStudy: true,
        bioMetaOutcomesInOtherStudy: true,
        bioMemberOfMetabolomicsStudies: true,
        bioOtherBaselineSpecify: '',
        bioOtherOtherTimeSpecify: '',
        bioMetaOutcomesOtherStudySpecify: '',
        bioMemberInStudy: '',
        bioLabsUsedForAnalysis: '',
        bioAnalyticalPlatform: '',
        bioSeparationPlatform: '',
        bioNumberMetabolitesMeasured: '',
        bioYearSamplesSent: '',
        error: {
            bioBloodBaseline: true,
            bioBloodBaselineSerum: true,
            bioBloodBaselinePlasma: true,
            bioBloodBaselineBuffyCoat: true,
            bioBloodBaselineOtherDerivative: true,
            bioBloodOtherTime: true,
            bioBloodOtherTimeSerum: true,
            bioBloodOtherTimePlasma: true,
            bioBloodOtherTimeBuffyCoat: true,
            bioBloodOtherTimeOtherDerivative: true,
            bioBuccalSalivaBaseline: true,
            bioBuccalSalivaOtherTime: true,
            bioTissueBaseline: true,
            bioTissueOtherTime: true,
            bioUrineBaseline: true,
            bioUrineOtherTime: true,
            bioFecesBaseline: true,
            bioFecesOtherTime: true,
            bioOtherBaseline: true,
            bioOtherOtherTime: true,
            bioRepeatedSampleSameIndividual: true,
            bioTumorBlockInfo: true,
            bioGenotypingData: true,
            bioSequencingDataExome: true,
            bioSequencingDataWholeGenome: true,
            bioEpigeneticOrMetabolicMarkers: true,
            bioOtherOmicsData: true,
            bioTranscriptomicsData: true,
            bioMicrobiomeData: true,
            bioMetabolomicData: true,
            bioMetaFastingSample: true,
            bioMetaOutcomesInCancerStudy: true,
            bioMetaOutcomesInCvdStudy: true,
            bioMetaOutcomesInDiabetesStudy: true,
            bioMetaOutcomesInOtherStudy: true,
            bioMemberOfMetabolomicsStudies: true,
            bioOtherBaselineSpecify: true,
            bioOtherOtherTimeSpecify: true,
            bioMetaOutcomesOtherStudySpecify: true,
            bioMemberInStudy: true,
            bioLabsUsedForAnalysis: true,
            bioAnalyticalPlatform: true,
            bioSeparationPlatform: true,
            bioNumberMetabolitesMeasured: true,
            bioYearSamplesSent: true
        },

        sectionGStatus: ''
    },

    sectionStatus: {
        'A': 'complete',
        'B': 'complete  ',
        'C': 'complete',
        'D': 'complete',
        'E': 'complete',
        'F': 'complete',
        'G': 'incomplete'
    },
    lookup: {},
    cohortId: 0
}

export default InitialStates