const InitialStates ={
    cohort: {
        hasLoaded: false,
        sectionAStatus: '',
        cohortId: null,
        name: '',
        acronym: 'HWS',
        completionDate: '',
        completerName: 'Joe',
        completerPosition: 'Developer',
        completerPhone: '225-125-3344',
        completerEmail: 'joez@hws.com',
        contacterRight: null,
        contacterName: 'anna',
        contacterPosition: 'manager',
        contacterPhone: '225-255-5555',
        contacterEmail: 'anna@hws.com',
        investigators: [
            {
                personId: 0,
                name: 'chao',
                institution: 'zhang',
                email: 'cz@hws.com'
            }
        ],
        collaboratorName: 'Joe',
        collaboratorPosition: 'Developer',
        collaboratorPhone: '225-125-3344',
        collaboratorEmail: 'joez@hws.com',
        sameAsSomeone: 0,
        description: 'this is a description demo',
        hasAWebSite: null,
        webSite: '',
        eligibleGender: '',
        hasCancerSite: true,
        cancerSites: 'cancersite.com, cancerSites.org',
        eligibilityCriteriaOther: 'BMI',
        enrolledTotal: 10,
        enrollStartYear: 2020,
        enrollEndYear: 2020,
        enrollOnGoing: null,
        numOfPlans: null,
        yearToComplete: null,
        baseLineMinAge: null,
        baseLineMaxAge: null,
        baseLineMedianAge: null,
        baseLineMeanAge: null,
        currentMinAge: null,
        currentMaxAge: null,
        currentMedianAge: null,
        currentMeanAge: null,
        timeInterval: '',
        mostRecentYear: null,
        collectedInPerson: 0,
        collectedPhone: 1,
        collectedPaper: 1,
        collectedWeb: 1,
        collectedOther: 0,
        collectedOtherSpecify: '',
        requireNone: 0,
        requireCollab: 1,
        requireIrb: 1,
        requireData: 1,
        restrictGenoInfo: 1,
        restrictOtherDb: 1,
        restrictCommercial: 1,
        restrictOther: 0,
        restrictOtherSpecify: '',
        strategyRoutine: 1,
        strategyMailing: 1,
        strategyAggregateStudy: 1,
        strategyIndividualStudy: 1,
        strategyInvitation: 1,
        strategyOther: 0,
        strategyOtherSpecify: '',
        questionnaireFile: 0,
        mainCohortFile: 0,
        dataFile: 0,
        specimenFile: 0,
        publicationFile: 0,
        questionnaireFileName: '',
        mainFileName: '',
        dataFileName: '',
        specimenFileName: '',
        publicationFileName: '',
        questionnaireUrl: '',
        mainCohortUrl: '',
        dataUrl: '',
        specimenUrl: '',
        publicationUrl: ''
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
        'mostRecentDate': '',
        'sectionBStatus': ''
    },
    majorContent: {
        'seStatusBaseLine': 1,
        'seStatusFollowUp': 1,
        'educationBaseLine': 1,
        'educationFollowUp': 1,
        'maritalStatusBaseLine': 1,
        'maritalStatusFollowUp': 1,
        'originBaseLine': 1,
        'originFollowUp': 0,
        'empStatusBaseLine': 1,
        'empStatusFollowUp': 0,
        'insuranceStatusBaseLine': 1,
        'insuranceStatusFollowUp': 0,
        'anthropometryBaseLine': 1,
        'anthropometryFollowUp': 0,
        'dietaryBaseLine': 1,
        'dietaryFollowUp': 0,
        'supplementBaseLine': 1,
        'supplementFollowUp': 0,
        'medicineBaseLine': 1,
        'medicineFollowUp': 0,
        'prescriptionBaseLine': 1,
        'prescriptionFollowUp': 1,
        'nonprescriptionBaseLine': 1,
        'nonprescriptionFollowUp': 1,
        'alcoholBaseLine': 1,
        'alcoholFollowUp': 0,
        'cigaretteBaseLine': 1,
        'cigaretteFollowUp': 1,
        'cigarBaseLine': true,
        'cigarFollowUp': true,
        'pipeBaseLine': true,
        'pipeFollowUp': true,
        'tobaccoBaseLine': true,
        'tobaccoFollowUp': true,
        'ecigarBaseLine': true,
        'ecigarFollowUp': true,
        'noncigarOtherBaseLine': true,
        'noncigarOtherFollowUp': true,
        'noncigarBaseLineSpecify': '',
        'noncigarFollowUpSpecify': '',
        'physicalBaseLine': 1,
        'physicalFollowUp': 0,
        'sleepBaseLine': 1,
        'sleepFollowUp': 0,
        'reproduceBaseLine': 1,
        'reproduceFollowUp': 0,
        'reportedHealthBaseLine': 1,
        'reportedHealthFollowUp': 0,
        'lifeBaseLine': 1,
        'lifeFollowUp': 1,
        'socialSupportBaseLine': 1,
        'socialSupportFollowUp': 1,
        'cognitionBaseLine': 1,
        'cognitionFollowUp': 0,
        'depressionBaseLine': 1,
        'depressionFollowUp': 1,
        'psychosocialBaseLine': 1,
        'psychosocialFollowUp': 0,
        'fatigueBaseLine': 1,
        'fatigueFollowUp': 0,
        'cancerHistoryBaseLine': 1,
        'cancerHistoryFollowUp': 0,
        'cancerPedigreeBaseLine': 1,
        'cancerPedigreeFollowUp': 1, 
        'physicalMeasureBaseLine': 1,
        'physicalMeasureFollowUp': 1,
        'exposureBaseLine': 1,
        'exposureFollowUp': 1,
        'residenceBaseLine': 1,
        'residenceFollowUp': 0,
        'diabetesBaseLine': 1,
        'diabetesFollowUp': 1,
        'strokeBaseLine': 1,
        'strokeFollowUp': 1,
        'copdBaseLine': 1,
        'copdFollowUp': 1,
        'cardiovascularBaseLine': 1,
        'cardiovascularFollowUp': 1,
        'osteoporosisBaseLine': 1,
        'osteoporosisFollowUp': 1,
        'mentalBaseLine': 1,
        'mentalFollowUp': 1,
        'cognitiveDeclineBaseLine': 1,
        'cognitiveDeclineFollowUp': 1,
        'cancerToxicity': 1,
        'cancerLateEffects': 1,
        'cancerSymptom': 0,
        'cancerOther': 1,
        'cancerOtherSpecify': '',
        'sectionCStatus': '',

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
    sectionStatus:{
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