//Resources added 11/17/2023 by Michael David
//Case sensitivity matters in the keywords 
//Each resources MUST have a unique id
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
        address:'625 E. Pine St., Missoula MT 59808',
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
        website:'https://www.familypromisemissoula.org/',
        address:'202 Brooks St., Missoula, MT',
        phone:'406-207-8228',
        description:'Our mission is to help families experiencing homelessness and low-income families achieve sustainable independence through a community-based response.',
        longDescription:'Family Promise helps local communities coordinate their compassion to address the root causes of family homelessness. We address the issue holistically, providing prevention services before families reach crisis, shelter and case management when they become homeless, and stabilization programs once they have secured housing to ensure they remain independent. We tap existing local resources to empower families towards economic stability. Families come to us in crisis; we help them rebuild their lives with new skills and ongoing support.',
        keywords: ['shelter']
    },
    {   
        id: 11,
        name:'Union Gospel Mission',
        website:'https://mfbn.org/resource/union-gospel-mission-of-missoula/',
        address:'506 B Toole Ave, Missoula, MT',
        phone:'406-542-5240',
        description:'Women and Children Shelter, Warming center during winter',
        longDescription:'Women and Children Shelter, Warming center during winter Monday, Wednesday, and Friday 8 AM-11 AM. Friday night dinner 4:30 PM-6 PM. Warming Shelter Open 11 PM-6 AM any day of the week below 11 degrees.',
        keywords: ['shelter','children']
    },
    {   
        id: 12,
        name:'YWCA Pathways Program',
        website:'https://www.ywcamissoula.org/services/domestic-sexual-violence/',
        address:'1130 W Broadway, Missoula, MT',
        phone:'406-543-6691',
        description:'Shelter for those fleeing domestic violence',
        longDescription:'Shelter for those fleeing domestic violence',
        keywords: ['shelter']
    },
    {   
        id: 13,
        name:'Missoula Recovery Center',
        website:'https://www.wmmhc.org/recoverycenter',
        address:'1201 Wyoming St, Missoula, MT',
        phone:'406-532-9900',
        description:'Inpatient and outpatient addiction recovery services',
        longDescription:'Inpatient and outpatient addiction recovery services',
        keywords: ['recovery']
    },
    {   
        id: 14,
        name:'Western MT Addiction Services',
        website:'https://www.healthcaremontana.org/Western_Montana_Addiction_Services-Missoula-MT/',
        address:'1325 Wyoming St, Missoula, MT',
        phone:'406-532-9800',
        description:'Outpatient Services, transitional  housing program',
        longDescription:'Outpatient Services, transitional housing program',
        keywords: ['recovery']
    },
    {   
        id: 15,
        name:'Parenting Place',
        website:'https://www.parentingplace.net/',
        address:'1644 S. 8th St W, Missoula, MT',
        phone:'406-728-5437',
        description:'Parenting, Trauma 101 and Incarceration Support Classes',
        longDescription:'The Parenting Place is a community-based, non-profit organization whose mission is the prevention of child abuse and neglect through strengthening families. Our goals are to help families develop healthy parent-child relationships, to improve the futures of our children and ensure healthy families',
        keywords: ['education','children']
    },
    {   
        id: 16,
        name:'Missoula Housing Authority',
        website:'https://www.missoulahousing.org/',
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
        website:'',
        address:'1001 SW Higgins Ave Ste 206, Missoula, MT',
        phone:'',
        description:'Assist in housing veterans and families of veterans',
        longDescription:'Assist in housing veterans and families of veterans',
        keywords: ['housing']
    },
    {   
        id: 19,
        name:'Mountain Home',
        website:'https://mountainhomemt.org/',
        address:'2606 South Ave, Missoula, MT',
        phone:'406-541-4663',
        description:'Housing for young mothers and children',
        longDescription:'Mountain Home is a 501c3 nonprofit organization that provides shelter for young mothers who need a place to live, and a network of support as they create safe, stable, and nurturing homes of their own.',
        keywords: ['housing','children']
    },
    {   
        id: 20,
        name:'YWCA',
        website:'https://www.ywcamissoula.org/services/',
        address:'1130 W Broadway St., Missoula, MT',
        phone:'800-483-7858',
        description:'Assist in housing families and those fleeing abuse',
        longDescription:'Assist in housing families and those fleeing abuse',
        keywords: ['housing']
    },
    {   
        id: 21,
        name:'Missoula Job Service',
        website:'https://web.missoulachamber.com/Employment-Agencies/Missoula-Job-Service-228',
        address:'539 53rd St W, Missoula, MT',
        phone:'406-728-7060',
        description:'Employement assistance and training',
        longDescription:'Employment assistance and training',
        keywords: ['employment']
    },
    {   
        id: 22,
        name:'Missoula Works',
        website:'https://missoulaworks.com/',
        address:'525 Brooks St., Missoula, MT',
        phone:'406-526-3400',
        description:'Employment assistance',
        longDescription:'Employment assistance',
        keywords: ['employment']
    },
    {   
        id: 23,
        name:'Vocational Rehabilitatoin',
        website:'https://dphhs.mt.gov/detd/vocrehab/',
        address:'2675 Palmer St. Suite A., Missoula, MT',
        phone:'406-329-5400',
        description:'Assist those with disabilities in finding employment',
        longDescription:'Assist those with disabilities in finding employment',
        keywords: ['employment']
    },
    {   
        id: 24,
        name:'Human Resource Council',
        website:'https://www.humanresourcecouncil.org/',
        address:'1801 S Higgins, Missoula, MT',
        phone:'406-728-3710',
        description:'Workforce innovation and opportunity act youth program',
        longDescription:'Workforce innovation and opportunity act youth program',
        keywords: ['employment']
    },
    {   
        id: 25,
        name:'Office of Public Assistance',
        website:'https://mfbn.org/resource/office-of-public-assistance-missoula/',
        address:'2677 Palmer St., Missoula, MT',
        phone:'406-329-1200',
        description:'Medicaid',
        longDescription:'Meddicaid',
        keywords: ['healthcare']
    },
    {   
        id: 26,
        name:'Poverello Center Pantry',
        website:'https://thepoverellocenter.org/programs/',
        address:'1110 W Broadway St., Missoula, MT',
        phone:'406-728-1809',
        description:'Food pantry open Mon, Wed and Fri',
        longDescription:' Our Food Pantry provides shelf-stable and fresh foods on Monday, Wednesday, and Friday from 5:30pm - 7pm',
        keywords: ['food']
    },
    {   
        id: 27,
        name:'The Salvation Army',
        website:'https://missoula.salvationarmy.org/missoula_corps/',
        address:'355 South Russel St W, Missoula, MT',
        phone:'406-549-0710',
        description:'Food pantry open weekdays',
        longDescription:'Food pantry open weekdays',
        keywords: ['food']
    },
    {   
        id: 28,
        name:'Planned Parenthood',
        website:'https://www.plannedparenthood.org/health-center/montana/missoula/59802/planned-parenthood-missoula-2440-90790',
        address:'219 E. Main St., Missoula, MT',
        phone:'406-728-5490',
        description:'Family planning, general health',
        longDescription:'Family planning, general health',
        keywords: ['healthcare']
    },
    {   
        id: 29,
        name:'Self Help Law Center',
        website:'https://www.missoulacounty.us/government/civil-criminal-justice/district-court/divorce-parenting/missoula-self-help-law-center',
        address:'200 West Broadway,Room 271, Missoula, MT',
        phone:'406-258-3428',
        description:'Assist with legal information and resources',
        longDescription:'Assist with legal information and resources',
        keywords: ['legal services']
    },
    {   
        id: 30,
        name:'MT Legal Services Assocation',
        website:'https://www.mtlsa.org/',
        address:'1525 Liberty Lane, Suite 110, Missoula, MT',
        phone:'406-543-8343',
        description:'Legal information, advice and other services',
        longDescription:'Legal information, advice and other services',
        keywords: ['legal services']
    },
    {   
        id: 31,
        name:'WIC Program',
        website:'https://www.missoulacounty.us/government/health/health-department/healthy-people-healthy-families/wic',
        address:'301 West Alder, Missoula, MT',
        phone:'406-258-4740',
        description:'Supplemental food and nutritional assistance',
        longDescription:'Supplemental food and nutritional assistance',
        keywords: ['healthcare']
    },
    {   
        id: 32,
        name:'SNAP Program',
        website:'https://www.dphhs.mt.gov/hcsd/snap',
        address:'2677 Palmer St., Missoula, MT',
        phone:'406-329-1200',
        description:'Supplemental food and nutrtional assistance',
        longDescription:'Supplemental food and nutritional assistance',
        keywords: ['healthcare']
    },
    {   
        id: 33,
        name:'Child Care Resources',
        website:'https://www.childcareresources.org/',
        address:'2409 Dearborne Ave, Suite L, Missoula, MT',
        phone:'406-728-6446',
        description:'Assist in finding quality child care',
        longDescription:'Child Care Resources Helps people find child care Helps people pay for child care Trains the early child care workforce ',
        keywords: ['children']
    }
    ,
    {   
        id: 34,
        name:'Alberton Clothing Company',
        website:'https://www.facebook.com/albertonclothingcompany',
        address:'PO Box , Missoula, MT',
        phone:'406-880-5013',
        description:'Free clothing give aways typically at River Edge Resort Check facebook page for dates',
        longDescription:'Warm food and clothing at community events. Typically held at River Edge Resort at 168 I-90 Frontage Road, Missoula MT. Free winter clothign for all ages and sizes provided by Alberton Clothing company',
        keywords: ['clothing']
    }
    ,
    {   
        id: 35,
        name:'Heart Clothes Closet',
        website:'https://www.facebook.com/lovemissoulapantry/',
        address:'1001 Cleveland St., Missoula, MT',
        phone:'406-721-6884',
        description:'Heart church offers clothing giveaways, see their facebook for details',
        longDescription:'Heart church offers clothing giveaways, see their facebook for details',
        keywords: ['clothing']
    }
    ,
    {   
        id: 36,
        name:'Missoula Parents - Swap/Trade Group',
        website:'https://www.facebook.com/groups/1547020778807159/',
        address:'2677 Palmer St., Missoula, MT',
        phone:'406-329-1200',
        description:'Facebook group connecting parents for free clothing toys and more',
        longDescription:'Hey parents! A space for parents to offer up clothes, toys, and so much more. Everything is trade or free only. Please answer the group rules to be approved.',
        keywords: ['clothing']
    },
    {   
        id: 37,
        name:'River of Life Clothing Closet',
        website:'https://www.rolmt.com/clothing-closet',
        address:'4007 Mt-HYW 200, Missoula, MT',
        phone:'844-447-6568',
        description:'River of Life gives out free clothing the 1st and 3rd Saturday of the month',
        longDescription:'Free clothes available in our storefront that is open Starting November 1st 2023 we will be moving to the 1st and 3rd Saturday of the month 12:30 - 2:30 pm',
        keywords: ['clothing']
    },
    {   
        id: 38,
        name:'River of Hope Food Bank',
        website:'http://riverofhopemt.com',
        address:'3862 Alc Way, Stevensville, MT',
        phone:'844-447-6568',
        description:'Food bank is open every Saturday from 12-3',
        longDescription:'Our Food Bank is open every Saturday from 12:00 - 3:00pm.  We ask everyone to stay in their vehicles and follow the directions of the parking lot attendants',
        keywords: ['food']
    },
    {   
        id: 39,
        name:'Missoula Works Employment Support',
        website:'https://missoulaworks.com/',
        address:'2205 34th St, Missoula, MT 59801, Missoula, MT',
        phone:'406-926-3400',
        description:'Employment assistance at Atonement Lutheran Church',
        longDescription:'Missoula Works and the Housing Advocate Network host open office hours for those seeking employment and/or housing assistance Mondays–Thursdays from 10 am-12 pm at the MIC office. MIC is located downstairs at Atonement Lutheran Church., ',
        keywords: ['employment']
    },
    {   
        id: 40,
        name:'TANF',
        website:'https://www.dphhs.mt.gov/hcsd/tanf',
        address:'1801 S Higgins Ave., Missoula, MT',
        phone:'888-706-1535',
        description:'Temporary assistance for needy families',
        longDescription:'TANF cash assistance is a program providing temporary financial assistance to needy families. The receipt of TANF cash assistance is limited to 60 months in an adults lifetime. temporary financial assistance may be provided to the following families and individuals with  Minor Children, Specified relatives with whom the children are living, The minor childrens blood-related/adoptive siblings with whom the children are living, Pregnant women in their last trimester who have no other eligible children and Refugees with minor dependent children.',
        keywords: ['financial assistance','children']
    },
    {   
        id: 41,
        name:'Suicide Hep Line',
        website:'https://988lifeline.org/',
        address:' ',
        phone:'800-273-8255',
        description:'Suicide Help Line',
        longDescription:'We can all help prevent suicide. The 988 Lifeline provides 24/7, free and confidential support for people in distress, prevention and crisis resources for you or your loved ones, and best practices for professionals in the United States.',
        keywords: ['healthcare']
    },
    {   
        id: 42,
        name:'Montana Poison Control',
        website:'https://www.mtpoisoncenter.org/',
        address:' ',
        phone:'800-222-1222',
        description:'For advice after contact with poison call 1-800-222-1222',
        longDescription:'Montana poison control for assistance with information and guidance after coming in contact with poison',
        keywords: ['healthcare']
    },
    {   
        id: 43,
        name:'Substance Abuse and Mental Health Hotline',
        website:'https://www.samhsa.gov/',
        address:' ',
        phone:'800-662-4357',
        description:'Hotline for assistance with substance abuse and mental health',
        longDescription:'The Substance Abuse and Mental Health Services Administration (SAMHSA) is the agency within the U.S. Department of Health and Human Services (HHS) that leads public health efforts to advance the behavioral health of the nation and to improve the lives of individuals living with mental and substance use disorders, and their families. Mission: SAMHSA’s mission is to lead public health and service delivery efforts that promote mental health, prevent substance misuse, and provide treatments and supports to foster recovery while ensuring equitable access and better outcomes.',
        keywords: ['healthcare']
    },
    {   
        id: 44,
        name:'Child Start, Head Start',
        website:'https://thechildstartinc.com/',
        address:'2625 Briggs St., Missoula, MT',
        phone:'406-762-5460',
        description:'Hotline for assistance with substance abuse and mental health',
        longDescription:'Child Start Inc., Head Start seeks to provide opportunities for education and growth for staff, children, families, and the community in a caring and nurturing environment. Based in the Western region of Montana, CSI provides comprehensive childcare and educational services, including those that address mental, social, and emotional development of children from 3 to 5 years of age.',
        keywords: ['children','education']
    },
    {   
        id: 45,
        name:'Crime Victim Advocate Program',
        website:'https://www.missoulacounty.us/government/civil-criminal-justice/crime-victim-advocate-program',
        address:'317 Woody St., Missoula, MT',
        phone:'406-258-3830',
        description:'Free and confidential assistance to victims of relationship violence, sexual assault and stalking.',
        longDescription:'The CVA program provides free and confidential assistance to victims of relationship violence, sexual assault, and stalking by offering advocacy and resource information in civil and criminal matters.',
        keywords: ['legal services','life skills']
    },
    {   
        id: 46,
        name:'Community Dispute Resolution Center',
        website:'https://www.cdrcmissoula.org/',
        address:'1535 Liberty Lane, Missoula, MT',
        phone:'406-543-1157',
        description:'Access to alternative dispute resolution services.',
        longDescription:'The CDRC of Missoula County provides access and availability to alternative dispute resolution services to all Montanans, regardless of income. We facilitate the process of citizens helping citizens resolve conflict through mediation trainings and by providing high-quality services to relieve the court system and bridge the justice gap.',
        keywords: ['legal services']
    },
    {   
        id: 47,
        name:'Blind and Low Vision Services',
        website:'https://dphhs.mt.gov/detd/blvs/blvs-vr/index',
        address:'2675 Palmer, Suite A., Missoula, MT',
        phone:'888-279-7528',
        description:'The vocational rehabilitation program provides services to assist individuals with visual disabilities or blindness find or maintain employment.The types of services we provide are based on what you need to get and keep a job.',
        longDescription:'The vocational rehabilitation program provides services to assist individuals with visual disabilities or blindness find or maintain employment.The types of services we provide are based on what you need to get and keep a job.',
        keywords: ['employment','healthcare']
    },
    {   
        id: 48,
        name:'Accessible Spaces',
        website:'http://www.accessiblespace.org/montana-accessible-housing',
        address:'2675 Palmer, Suite A., Missoula, MT',
        phone:'800-466-7722',
        description:'To provide housing with care for persons with physical disabilities and brain injuries, as well as seniors and veterans. This mission is accomplished through the development, management and ownership of accessible, afProfordable housing, supportive care, customized living and rehabilitation services.',
        longDescription:'To provide housing with care for persons with physical disabilities and brain injuries, as well as seniors and veterans. This mission is accomplished through the development, management and ownership of accessible, afProfordable housing, supportive care, customized living and rehabilitation services.',
        keywords: ['housing']
    },
    {   
        id: 49,
        name:'Alcoholics Anonymous (Area 40) AA',
        website:'https://www.aa-montana.org/district-sites/dist81/index.php',
        address:'See website for specific location information',
        phone:'833-800-8553',
        description:'Fellowship of people working to solve their problem with alcohol and help others recover',
        longDescription:'ALCOHOLICS ANONYMOUS is a fellowship of people who share their experience, strength and hope with each other that they may solve their common problem and help others to recover from alcoholism. The only requirement for membership is a desire to stop drinking. There are no dues or fees for A.A. membership; we are self-supporting through our own contributions. A.A. is not allied with any sect, denomination, politics, organization or institution; does not wish to engage in any controversy; neither endorses nor opposes any causes. Our primary purpose is to stay sober and help other alcoholics to achieve sobriety.',
        keywords: ['recovery']
    },
    {   
        id: 50,
        name:'CASA of Missoula',
        website:'https://www.casamissoula.org/',
        address:'PO Box 7433, Missoula, MT',
        phone:'406-542-1208',
        description:'The vocational rehabilitation program provides services to assist individuals with visual disabilities or blindness find or maintain employment.The types of services we provide are based on what you need to get and keep a job.',
        longDescription:'CASA of Missoula provides independent, trained advocates for the best interests of children within the judicial system who are at substantial risk or have experienced abuse or neglect. We provide consistent, long-term advocacy until every child resides in a safe, permanent home.',
        keywords: ['legal services','children']
    },
    {   
        id: 51,
        name:'WORD',
        website:'https://www.guidestar.org/profile/81-0362732',
        address:'2405 Mcintosh Loop, Missoula, MT',
        phone:'406-543-3550',
        description:'WORD creates opportunities, programs and policies that inspire and support womens development leadership and choice for the benefit of the entire community.',
        longDescription:'WORD operates 5 main programs. Family BASICS provides housing counseling, family advocacy, school-liaison services, family strengthening, support and parent training to the families of homeless students. Futures is a family support and prevention program offering career readiness and parent education to pregnant and parenting teens & young adults. Family Resource Centers work to strengthen learning environments by helping parents, community members and educators create partnerships that support learning, literacy and leadershiPLEIDES, and other support across the state for families and schools. Mentors in Violence Prevention is a training offered to high schools and community groups. It teaches a unique way to help students of both genders to learn how to appropriatley intervene in any situation where they feel that sexual harrassment or discrimination is occuring against themselves or anyone else.',
        keywords: ['education']
    },
    {   
        id: 52,
        name:'Meals on Wheels',
        website:'https://missoulaagingservices.org/get-help/food/meals-on-wheels.html',
        address:'337 Stephens Ave, Missoula, MT',
        phone:'406-728-7682',
        description:'The Missoula Aging Services Meals on Wheels program offers in-home delivery of hot meals five days a week in most areas',
        longDescription:'Meals on Wheels provides homebound older adults who are unable to shop or cook for themselves a healthy meal, which empowers them to live safely and independently in their own homes. Meals are delivered by friendly volunteer drivers who also provide a smile and a daily safety check',
        keywords: ['food','elderly']
    },
    {   
        id: 53,
        name:'Missoula Health Department',
        website:'https://www.missoulacounty.us/government/health/health-department',
        address:'301 West Alder, Missoula, MT',
        phone:'406-258-4770',
        description:'The Missoula City-County Health Department\'s mission is to build conditions that support the health of people, environments, and communities. Open Mon, Tues, Thur, Friday from 9-11:30 and 1-4:30 and Wendesday from 10-11:30 and 1-4:30',
        longDescription:'Offers maternal and child care services, including prenatal classes, home visits and breastfeeding support. Services offered at the out patient clinic for adults and children include immunications and pregnancy testing. Nutrition services including WIC, EatSmart and CATCH are also available. Open Mon, Tues, Thur, Friday from 9-11:30 and 1-4:30 and Wendesday from 10-11:30 and 1-4:30',
        keywords: ['healthcare','children']
    },
    {   
        id: 54,
        name:'Missoula Urban Indian Health Center',
        website:'https://www.allnations.health/',
        address:'830 West Central, Missoula, MT',
        phone:'406-542-1208',
        description:'All Nations draws from a diverse skill set using an interdisciplinary team led approach to implement a comprehensive suite of healthcare services. We are working towards instituting trauma-informed practices and policies in order to achieve holistic wellness for the Missoula Native community.',
        longDescription:'All Nations draws from a diverse skill set using an interdisciplinary team led approach to implement a comprehensive suite of healthcare services. We are working towards instituting trauma-informed practices and policies in order to achieve holistic wellness for the Missoula Native community.',
        keywords: ['healthcare','recovery']
    },
    {   
        id: 55,
        name:'Missoula Public Library',
        website:'https://www.missoulapubliclibrary.org/',
        address:'455 E. Main St., Missoula, MT',
        phone:'406-721-2665',
        description:'Missoula County is vibrant, creative, and healthy. MPL gives compassionate, inclusive service to all and is the first place everyone goes to learn, engage, innovate, and have fun.',
        longDescription:'Missoula County is vibrant, creative, and healthy. MPL gives compassionate, inclusive service to all and is the first place everyone goes to learn, engage, innovate, and have fun.',
        keywords: ['education','life skills']
    }
];