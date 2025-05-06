import React from 'react';

const KwaraStateInfo = () => {
  // Expanded data sets
  const keyFacts = [
    { title: 'Official Name', value: 'Kwara State' },
    { title: 'Capital', value: 'Ilorin' },
    { title: 'Governor', value: 'AbdulRahman AbdulRazaq (Since 2019)' },
    { title: 'Deputy Governor', value: 'Kayode Alabi' },
    { title: 'Population', value: '~3.2 million (2023 est.)' },
    { title: 'Area', value: '36,825 km² (14,218 sq mi)' },
    { title: 'GDP', value: '$8.9 billion (2023)' },
    { title: 'GDP Per Capita', value: '~$2,800' },
    { title: 'Slogan', value: 'State of Harmony' },
    { title: 'Created', value: 'May 27, 1967' },
    { title: 'Time Zone', value: 'WAT (UTC+1)' },
    { title: 'Postal Code', value: '240001' },
    { title: 'Area Code', value: '+234 31' },
    { title: 'Vehicle Code', value: 'KW' },
    { title: 'HDI', value: '0.575 (Medium)' },
    { title: 'Literacy Rate', value: '72% (Above national average)' },
  ];

  const touristAttractions = [
    {
      name: 'Esie Museum',
      type: 'Museum',
      description:
        "Houses over 1,500 soapstone figures - Africa's first museum",
    },
    {
      name: 'Owu Waterfalls',
      type: 'Nature',
      description: '120m high waterfall in Owa Kajola forest reserve',
    },
    {
      name: 'Kainji Lake National Park',
      type: 'Nature',
      description: 'Partially located in Kwara, home to diverse wildlife',
    },
    {
      name: 'Sobi Hill',
      type: 'Nature',
      description: 'Historic hill with panoramic views of Ilorin',
    },
    {
      name: 'Ilorin Central Mosque',
      type: 'Religious',
      description: '19th century mosque with distinctive architecture',
    },
    {
      name: 'Dada Pottery',
      type: 'Cultural',
      description: 'Traditional pottery center in Ilorin',
    },
    {
      name: 'Okuta Ilorin',
      type: 'Historical',
      description: "Ancient stone marking Ilorin's foundation",
    },
    {
      name: 'Patigi Regatta',
      type: 'Cultural',
      description: 'Annual canoe festival on River Niger',
    },
    {
      name: 'Jebba Hydroelectric Dam',
      type: 'Industrial',
      description: 'Major power generation site on River Niger',
    },
    {
      name: 'Lafiagi Sugar Plantation',
      type: 'Industrial',
      description: "One of Nigeria's largest sugar production sites",
    },
  ];

  const economicActivities = [
    {
      sector: 'Agriculture',
      details:
        'Major producer of cash crops (cotton, cocoa, kolanut) and food crops',
    },
    {
      sector: 'Energy',
      details: 'Hosts Jebba and Shiroro hydroelectric power stations',
    },
    {
      sector: 'Education',
      details:
        'Home to University of Ilorin (most subscribed Nigerian university)',
    },
    {
      sector: 'Mineral Resources',
      details: 'Marble, feldspar, lithium, gold, and kaolin deposits',
    },
    {
      sector: 'Commerce',
      details: 'Strategic border trade with Benin Republic',
    },
    {
      sector: 'Livestock',
      details: 'Major cattle rearing and dairy production',
    },
    { sector: 'Textiles', details: 'Traditional aso-oke weaving centers' },
    {
      sector: 'Sugar Production',
      details: 'Lafiagi Sugar Company and Bacita Sugar Estate',
    },
    {
      sector: 'Transportation',
      details: 'Key transit state between North and South Nigeria',
    },
    {
      sector: 'Healthcare',
      details:
        'University of Ilorin Teaching Hospital serves North Central region',
    },
  ];

  const educationalInstitutions = [
    'University of Ilorin (UNILORIN)',
    'Kwara State University (KWASU)',
    'Al-Hikmah University',
    'Landmark University',
    'Kwara State Polytechnic',
    'College of Education, Ilorin',
    'Federal College of Education (Special), Oyo',
    'Nigerian Army School of Education',
    'Kwara State College of Arabic and Islamic Legal Studies',
    'Kwara State College of Nursing',
  ];

  const transportation = [
    {
      type: 'Road',
      details: 'Strategic location on North-South transportation corridor',
    },
    {
      type: 'Rail',
      details: 'Ilorin station on Lagos-Kano standard gauge railway',
    },
    {
      type: 'Air',
      details: 'Ilorin International Airport (domestic and regional flights)',
    },
    {
      type: 'Water',
      details: 'River Niger provides access to water transport',
    },
  ];

  const festivals = [
    {
      name: 'Patigi Regatta Festival',
      period: 'April',
      description: 'Colorful canoe racing festival on River Niger',
    },
    {
      name: 'Ilorin Durbar',
      period: 'Eid-ul-Kabir',
      description: 'Traditional horse riding display by Emirate chiefs',
    },
    {
      name: 'Esie Stone Images Festival',
      period: 'March',
      description: 'Celebration of the mysterious soapstone figures',
    },
    {
      name: 'Ogun Festival',
      period: 'August',
      description: "Traditional blacksmiths' festival in Ilorin",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 mt-40">
          <h1 className="text-4xl font-bold text-red-800 mb-2">Kwara State</h1>
          <p className="text-2xl text-blue-700">The State of Harmony</p>
          <div className="mt-6">
            <img
              src="/images/kwara_logo.png"
              alt="Kwara State Coat of Arms"
              className="h-40 mx-auto"
            />
          </div>
        </header>

        {/* Key Facts */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-red-700 mb-6 border-b-2 pb-2">
            Key Facts at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-red-50 p-5 rounded-lg border border-red-100"
              >
                <h3 className="font-bold text-red-800 text-lg">{fact.title}</h3>
                <p className="text-gray-700 mt-1">{fact.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-red-700 mb-6 border-b-2 pb-2">
            About Kwara State
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Kwara State, located in North Central Nigeria, is known as the
              "State of Harmony" due to its peaceful coexistence of diverse
              ethnic groups. Created in 1967, it serves as a transitional zone
              between Nigeria's North and South regions.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  Geography
                </h3>
                <p>
                  Kwara features diverse landscapes including savanna
                  grasslands, river valleys, and forest reserves. The River
                  Niger forms its northern border, while important tributaries
                  like the Asa and Oyun rivers flow through it.
                </p>
                <p className="mt-3">
                  The state shares borders with Niger, Kogi, Ekiti, Osun, and
                  Oyo states, as well as Benin Republic.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  Cultural Diversity
                </h3>
                <p>
                  Kwara is home to Yoruba, Nupe, Bariba, and Fulani ethnic
                  groups. Ilorin, the capital, uniquely blends Yoruba and
                  Northern cultures, evident in its architecture, cuisine, and
                  traditions.
                </p>
                <p className="mt-3">
                  The state is renowned for its traditional crafts including
                  aso-oke weaving, pottery, and wood carving.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-red-600 mt-6 mb-3">
              Historical Significance
            </h3>
            <p>
              Ilorin served as a major outpost of the Old Oyo Empire before
              becoming an emirate under the Sokoto Caliphate. Kwara played
              strategic roles in Nigeria's colonial history and
              post-independence development.
            </p>
          </div>
        </section>

        {/* Tourism Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-red-700 mb-6 border-b-2 pb-2">
            Tourism & Attractions
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Kwara offers unique historical, cultural, and natural attractions:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {touristAttractions.map((attraction, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden border-gray-300 shadow-sm"
              >
                <div className="bg-red-50 text-white p-3">
                  <h3 className="text-xl text-black">{attraction.name}</h3>
                  <p className="text-red-600">{attraction.type}</p>
                </div>
                <div className="p-4">
                  <p>{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Economy Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-red-700 mb-6 border-b-2 pb-2">
            Economic Profile
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Kwara's economy blends agriculture, energy production, and
            education:
          </p>

          <div className="space-y-6">
            {economicActivities.map((activity, index) => (
              <div key={index} className="pl-4 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-800">
                  {activity.sector}
                </h3>
                <p className="text-gray-700">{activity.details}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-red-50 rounded-lg">
            <h3 className="text-2xl font-bold text-red-800 mb-3">
              Special Development Projects
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Kwara Agro-Cluster (Shonga Farms Initiative)</li>
              <li>Ilorin Smart City Project</li>
              <li>Industrial Park at Eiyenkorin</li>
              <li>Kwara State Innovation Hub</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-red-700 mb-6 border-b-2 pb-2">
            Education & Research
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Kwara hosts some of Nigeria's most prestigious educational
            institutions:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {educationalInstitutions.map((institution, index) => (
              <div
                key={index}
                className="flex items-start p-3 bg-gray-50 rounded"
              >
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>{institution}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Academic Excellence
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  University of Ilorin consistently ranked among Nigeria's top 3
                  universities
                </li>
                <li>
                  KWASU pioneered Africa's first Aviation and Aeronautics degree
                  program
                </li>
                <li>
                  Landmark University focuses on agricultural technology and
                  innovation
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Research Focus
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>UNILORIN's Centre for Peace and Strategic Studies</li>
                <li>KWASU's Centre for Entrepreneurship</li>
                <li>
                  Landmark University's Food Processing and Preservation
                  Research Unit
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-red-700 mb-6 border-b-2 pb-2">
            Infrastructure & Transportation
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Transport Network
              </h3>
              <ul className="space-y-4">
                {transportation.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-red-100 text-red-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-medium">{item.type}</h4>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Major Projects
              </h3>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg border-gray-300">
                  <h4 className="font-bold">
                    Ilorin International Airport Upgrade
                  </h4>
                  <p className="text-gray-600">
                    Expansion to handle international flights
                  </p>
                </div>
                <div className="p-4 border rounded-lg border-gray-300">
                  <h4 className="font-bold">Ilorin Master Plan</h4>
                  <p className="text-gray-600">
                    Comprehensive urban development initiative
                  </p>
                </div>
                <div className="p-4 border rounded-lg border-gray-300">
                  <h4 className="font-bold">Kwara State Road Network</h4>
                  <p className="text-gray-600">
                    Ongoing construction of 500km rural roads
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-red-700 mb-6 border-b-2 pb-2">
            Culture & Heritage
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Arts & Crafts
              </h3>
              <p className="mb-4">Kwara's rich artistic traditions:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Aso-oke weaving (especially in Ilorin and Offa)</li>
                <li>Pottery and ceramics (Dada Pottery Center)</li>
                <li>Wood carving and calabash decoration</li>
                <li>Traditional embroidery and leatherwork</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Cuisine
              </h3>
              <p className="mb-4">Distinctive Kwara culinary traditions:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Iyan (pounded yam) with egusi soup</li>
                <li>Tuwo shinkafa (rice meal) with miyan kuka</li>
                <li>Alkaki (wheat-based snack)</li>
                <li>Dambu nama (spiced shredded meat)</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-red-600 mt-8 mb-3">
            Major Festivals
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {festivals.map((festival, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 border-gray-300"
              >
                <h4 className="font-bold">{festival.name}</h4>
                <p className="text-sm text-red-600 mb-2">{festival.period}</p>
                <p className="text-gray-600 text-sm">{festival.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Kwara State Government
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div>
                <h4 className="font-medium">Contact</h4>
                <p>+234 31 123 4567</p>
              </div>
              <div>
                <h4 className="font-medium">Website</h4>
                <a
                  href="https://kwarastate.gov.ng"
                  className="text-red-600 hover:underline"
                >
                  kwarastate.gov.ng
                </a>
              </div>
              <div>
                <h4 className="font-medium">Social Media</h4>
                <p>@kwara_gov</p>
              </div>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Kwara State Information Portal
            </p>
            <p className="text-xs mt-2">
              Data sources: Kwara State Government, National Bureau of
              Statistics, UNESCO
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default KwaraStateInfo;
