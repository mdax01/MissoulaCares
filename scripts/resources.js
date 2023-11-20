//Resources added 11/17/2023 by Michael David
//Case sensitivity MATTERS in the keywords don't fuck with it
var entries = [
    {
        id: 1,
        name:'Poverello Center',
        website:'https://thepoverellocenter.org/',
        address:'1110 West Broadway Street Missoula MT 59802',
        phone:'406-728-1809',
        description:'Providing Beds, Showers and Lockers, see the front desk for details.',
        longDescription:'The Poverello Center provides bunks, showers and meals to those in need.',
        keywords: ['shelter','food']
    },
    {   
        id: 2,
        name:'Homeless Outreach Team',
        website:'',
        address:'',
        phone:'406-493-7955',
        description:'The HOT program works to identify barriers to housing services for Missoulas chronically homeless individuals, while simultaneously supporting and educating downtown businesses and community members.',
        longDescription:'The HOT program works to identify barriers to housing services for Missoulas chronically homeless individuals, while simultaneously supporting and educating downtown businesses and community members.',
        keywords: ['food','clothing']
    },
    {   
        id: 3,
        name:'Missoula Food Bank',
        website:'https://missoulafoodbank.org/',
        address:'1720 Wyoming Street, Missoula MT 59801',
        phone:'406-549-0543',
        description:'Missoula Food Bank provides food to all in need without qualification. They can also assist in signing up for SNAP or Medicaid by appointment.',
        longDescription:'Missoula Food Bank provides food to all in need without qualification. They can also assist in signing up for SNAP or Medicaid by appointment.',
        keywords: ['food']
    },
    {   
        id: 4,
        name:'Love Missoula Pantry',
        website:'https://heartchurch406.org/connect-grow/outreach',
        address:'8383 Barber Dollar St.',
        phone:'406-721-6884',
        description:'The Love Missoula Pantry provides free basic clothing and food items to families and individuals in need. It supplies donations to residents who lack the means or resources to purchase them on their own.',
        longDescription:'The Love Missoula Pantry provides free basic clothing and food items to families and individuals in need. It supplies donations to residents who lack the means or resources to purchase them on their own.',
        keywords: ['food']
    },
    {   
        id: 5,
        name:'Open Aid Alliance',
        website:'https://www.openaidalliance.org',
        address:'715 Ronan St, Missoula, MT 59803',
        phone:'406-543-4770',
        description:'HIV, HepC and STI Testing. Syringe Services, Housing Assistance and Healthcare referral',
        longDescription:'HIV, HepC and STI Testing. Syringe Services, Housing Assistance and Healthcare referral',
        keywords: ['housing','healthcare']
    },
    {   
        id: 6,
        name:'Mobile Support Team',
        website:'https://www.ci.missoula.mt.us/2842/Mobile-Support-Team',
        address:' ',
        phone:'406-552-6210',
        description:'The MST currently responds with law enforcement to behavioral health-related 911 calls. The response units consist of a licensed mental health clinician and an emergency medical technician (EMT). The MST also has a Case Facilitator who follows up with clients to provide resource navigation.',
        longDescription:'The MST currently responds with law enforcement to behavioral health-related 911 calls. The response units consist of a licensed mental health clinician and an emergency medical technician (EMT). The MST also has a Case Facilitator who follows up with clients to provide resource navigation.',
        keywords: ['healthcare']
    },
    {   
        id: 7,
        name:'Hope Rescue Mission',
        website:'http://hopemontana.org',
        address:' 2811 Latimer Suite 223, Missoula MT 59808',
        phone:'406-542-5240',
        description:'Help getting IDs, Rental and work application assistance, life skills and addiction services',
        longDescription:'Help getting IDs, Rental and work application assistance, life skills and addiction services',
        keywords: ['housing','life skills','recovery']
    },
    {   
        id: 8,
        name:'Housing Advocate Network',
        website:'https://micmt.org/housing-advocate-network/',
        address:'2205 34th St, Missoula, MT 59801. ',
        phone:'406-207-8228',
        description:'Missoula Works and the Housing Advocate Network host open office hours for those seeking employment and/or housing assistance Mondays - Thursdays from 10 am-12 pm at the MIC office.MIC is located downstairs at Atonement Lutheran Church',
        longDescription:'Missoula Works and the Housing Advocate Network host open office hours for those seeking employment and/or housing assistance Mondays - Thursdays from 10 am-12 pm at the MIC office.MIC is located downstairs at Atonement Lutheran Church',
        keywords: ['housing','employment']
    },
    {   
        id: 9,
        name:'Partnership Health Center',
        website:'https://www.partnershiphealthcenter.com',
        address:'401 Railroad St W, Missoula, MT 59802',
        phone:'406-258-4789',
        description:'Offers free of cost or low-cost care based on individual circumstances',
        longDescription:'Offers free of cost or low-cost care based on individual circumstances',
        keywords: ['healthcare']
    },
    {   
        id: 10,
        name:'Family Promise',
        website:' ',
        address:'202 Brooks St., Missoula, MT',
        phone:'406-207-8228',
        description:'Family Shelter',
        longDescription:'Family Shelter',
        keywords: ['shelter']
    },
    {   
        id: 11,
        name:'Union Gospel Mission',
        website:' ',
        address:'506 B Toole Ave, Missoula, MT',
        phone:'406-926-6477',
        description:'Women and Children Shelter, Warming center during winter',
        longDescription:'Women and Children Shelter, Warming center during winter',
        keywords: ['shelter']
    },
    {   
        id: 12,
        name:'YMCA Pathways Program',
        website:' ',
        address:'1130 W Broadway, Missoula, MT',
        phone:'406-543-6691',
        description:'Shelter for those fleeing domestic violence',
        longDescription:'Shelter for those fleeing domestic violence',
        keywords: ['shelter']
    },
    {   
        id: 13,
        name:'Missoula Recovery Center',
        website:' ',
        address:'1201 Wyoming St, Missoula, MT',
        phone:'406-532-9900',
        description:'Inpatient and outpatient addiction recovery services',
        longDescription:'Inpatient and outpatient addiction recovery services',
        keywords: ['recovery']
    },
    {   
        id: 14,
        name:'Western MT Addiction Services',
        website:' ',
        address:'1325 Wyoming St, Missoula, MT',
        phone:'406-532-9800',
        description:'Outpatient Services, transitional  housing program',
        longDescription:'Outpatient Services, transitional housing program',
        keywords: ['recovery']
    },
    {   
        id: 15,
        name:'Human Resource Council',
        website:' ',
        address:'1801 S Higgins Ave, Missoula, MT',
        phone:'406-728-3710',
        description:'Housing assistance, energy assistance',
        longDescription:'Housing assistance, energy assistance',
        keywords: ['housing']
    },
    {   
        id: 16,
        name:'Missoula Housing Authority',
        website:' ',
        address:'1235 34th St, Missoula, MT',
        phone:'406-549-4113',
        description:'Low-income housing, section 8, housing vouchers',
        longDescription:'Low-income housing, section 8, housing vouchers',
        keywords: ['housing']
    },
    {   
        id: 17,
        name:'Homeword',
        website:' ',
        address:'1535 Liberty Ln number 5, Missoula, MT',
        phone:'406-258-4789',
        description:'Low-income properties, classes, counseling',
        longDescription:'Low-income properties, classes, counseling',
        keywords: ['housing','education']
    },
    {   
        id: 18,
        name:'Volunteers of America',
        website:' ',
        address:'1001 SW Higgins Ave Ste 206, Missoula, MT',
        phone:'',
        description:'Assist in housing veterans and families of veterans',
        longDescription:'Assist in housing veterans and families of veterans',
        keywords: ['housing']
    },
    {   
        id: 19,
        name:'Mountain Home',
        website:' ',
        address:'2606 South Ave, Missoula, MT',
        phone:'406-541-4663',
        description:'Housing for young mothers and children',
        longDescription:'Housing for young mothers and children',
        keywords: ['housing']
    },
    {   
        id: 20,
        name:'YMCA',
        website:' ',
        address:'1130 W Broadway St., Missoula, MT',
        phone:'406-543-6691',
        description:'Assist in housing families and those fleeing abuse',
        longDescription:'Assist in housing families and those fleeing abuse',
        keywords: ['housing']
    },
    {   
        id: 21,
        name:'Missoula Job Service',
        website:' ',
        address:'539 53rd St W, Missoula, MT',
        phone:'406-728-7060',
        description:'Employement assistance and training',
        longDescription:'Employment assistance and training',
        keywords: ['employment']
    },
    {   
        id: 22,
        name:'Missoula Works',
        website:' ',
        address:'525 Brooks St., Missoula, MT',
        phone:'406-526-3400',
        description:'Employment assistance',
        longDescription:'Employment assistance',
        keywords: ['employment']
    },
    {   
        id: 23,
        name:'Vocational Rehabilitatoin',
        website:' ',
        address:'2675 Palmer St. Suite A., Missoula, MT',
        phone:'406-329-5400',
        description:'Assist those with disabilities in finding employment',
        longDescription:'Assist those with disabilities in finding employment',
        keywords: ['employment']
    },
    {   
        id: 24,
        name:'Human Resource Council',
        website:' ',
        address:'1801 S Higgins, Missoula, MT',
        phone:'406-728-3710',
        description:'Workforce innovation and opportunity act youth program',
        longDescription:'Workforce innovation and opportunity act youth program',
        keywords: ['employment']
    },
    {   
        id: 25,
        name:'Office of Public Assistance',
        website:' ',
        address:'2677 Palmer St., Missoula, MT',
        phone:'406-329-1200',
        description:'Medicaid',
        longDescription:'Meddicaid',
        keywords: ['healthcare']
    }
];