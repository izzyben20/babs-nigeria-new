import React from 'react';

const EdoStateInfo = () => {
  // Expanded data sets
  const keyFacts = [
    { title: 'Official Name', value: 'Edo State' },
    { title: 'Capital', value: 'Benin City' },
    { title: 'Governor', value: 'Godwin Obaseki (Since 2016)' },
    { title: 'Deputy Governor', value: 'Philip Shaibu' },
    { title: 'Population', value: '~5 million (2023 est.)' },
    { title: 'Area', value: '19,559 km² (7,552 sq mi)' },
    { title: 'GDP', value: '$11.8 billion (2023)' },
    { title: 'GDP Per Capita', value: '~$2,360' },
    { title: 'Slogan', value: 'Heartbeat of Nigeria' },
    { title: 'Created', value: 'August 27, 1991' },
    { title: 'Time Zone', value: 'WAT (UTC+1)' },
    { title: 'Postal Code', value: '300001' },
    { title: 'Area Code', value: '+234 52' },
    { title: 'Vehicle Code', value: 'ED' },
    { title: 'HDI', value: '0.634 (Medium)' },
    { title: 'Literacy Rate', value: '85% (Highest in South-South)' },
  ];

  const touristAttractions = [
    {
      name: 'Benin Moat',
      type: 'Historical',
      description:
        "Ancient defensive earthworks, the world's largest by length",
    },
    {
      name: "Oba's Palace",
      type: 'Cultural',
      description: 'UNESCO-listed royal palace of the Oba of Benin',
    },
    {
      name: 'National Museum Benin',
      type: 'Cultural',
      description: 'Houses artifacts from Benin Empire including bronze works',
    },
    {
      name: 'Okomu National Park',
      type: 'Nature',
      description: 'Last rainforest sanctuary with endangered species',
    },
    {
      name: 'Igun Street',
      type: 'Cultural',
      description: 'Famous bronze casting guild (UNESCO Creative City)',
    },
    {
      name: 'Emotan Statue',
      type: 'Historical',
      description: 'Tribute to famous Benin heroine',
    },
    {
      name: 'Ososo Tourist Center',
      type: 'Nature',
      description: 'Hilltop resort with panoramic views',
    },
    {
      name: 'Somorika Hills',
      type: 'Nature',
      description: 'Spectacular rock formations and cultural sites',
    },
    {
      name: 'Benin City Walls',
      type: 'Historical',
      description:
        "Ancient fortifications described as world's largest earthworks",
    },
    {
      name: 'River Niger Beaches',
      type: 'Nature',
      description: "Scenic beaches along Nigeria's longest river",
    },
  ];

  const economicActivities = [
    {
      sector: 'Agriculture',
      details: 'Major producer of rubber, oil palm, cocoa, and cassava',
    },
    {
      sector: 'Arts & Culture',
      details: 'Global center for bronze casting and traditional arts',
    },
    {
      sector: 'Education',
      details: 'Home to University of Benin and other institutions',
    },
    {
      sector: 'Manufacturing',
      details: 'Oil palm processing, rubber products, and beverages',
    },
    {
      sector: 'Mining',
      details: 'Limestone, granite, marble, and bitumen deposits',
    },
    {
      sector: 'Oil & Gas',
      details: 'Significant oil production in Ologbo and other fields',
    },
    {
      sector: 'Commerce',
      details: 'Strategic trade hub between South and North',
    },
    {
      sector: 'Forestry',
      details: 'Timber production from rainforest reserves',
    },
    {
      sector: 'Healthcare',
      details: 'University of Benin Teaching Hospital serves region',
    },
    {
      sector: 'Technology',
      details: 'Growing tech hub with Edo Innovates program',
    },
  ];

  const educationalInstitutions = [
    'University of Benin (UNIBEN)',
    'Ambrose Alli University (AAU)',
    'Benson Idahosa University',
    'Edo State University',
    'Auchi Polytechnic',
    'College of Education, Ekiadolor',
    'Edo State Polytechnic',
    'Igbinedion University',
    'Wellspring University',
    'Samuel Adegboyega University',
  ];

  const transportation = [
    {
      type: 'Road',
      details:
        'Extensive network including Benin-Lagos and Benin-Abuja highways',
    },
    {
      type: 'Rail',
      details: 'Benin station on Lagos-Kano standard gauge railway',
    },
    { type: 'Air', details: 'Benin Airport (domestic flights)' },
    {
      type: 'Water',
      details: 'Access to River Niger for potential water transport',
    },
  ];

  const festivals = [
    {
      name: 'Igue Festival',
      period: 'December',
      description: "Oba's annual spiritual renewal ceremony",
    },
    {
      name: 'Eho Festival',
      period: 'April',
      description: 'Celebration of ancestral spirits',
    },
    {
      name: 'Ekaba Festival',
      period: 'June',
      description: 'Traditional fishing festival in riverine areas',
    },
    {
      name: 'Oto-Uromi Festival',
      period: 'September',
      description: 'Celebration of Esan heritage',
    },
  ];

  return (
    <div className="min-h-screen bg-red-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 mt-40">
          <h1 className="text-4xl font-bold text-red-800 mb-2">Edo State</h1>
          <p className="text-2xl text-red-600">Heartbeat of Nigeria</p>
          <div className="mt-6">
            <img
              src="/images/edo_logo.png"
              alt="Edo State Coat of Arms"
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
            About Edo State
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Edo State, located in southern Nigeria, is the heartland of the
              historic Benin Kingdom, one of Africa's most advanced pre-colonial
              states. The state is renowned for its rich cultural heritage,
              including the famous Benin Bronzes and ancient earthworks
              recognized by UNESCO.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  Geography
                </h3>
                <p>
                  Edo features tropical rainforests in the south and derived
                  savanna in the north. The state is drained by the River Niger
                  and its tributaries, including the Orashi and Osse rivers. Edo
                  shares borders with Kogi, Anambra, Delta, and Ondo states.
                </p>
                <p className="mt-3">
                  The climate is tropical with distinct wet (April-October) and
                  dry (November-March) seasons.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  Cultural Heritage
                </h3>
                <p>
                  Edo is home to the Edo (Bini), Esan, Owan, and Afemai peoples.
                  The Benin Kingdom, established around 900AD, developed
                  advanced artistic, administrative, and military systems that
                  influenced the entire region.
                </p>
                <p className="mt-3">
                  Traditional crafts like bronze casting, wood carving, and
                  beadwork remain vibrant.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-red-600 mt-6 mb-3">
              Historical Significance
            </h3>
            <p>
              The Benin Empire was a major regional power until the 1897 British
              expedition. Edo people developed one of Africa's earliest writing
              systems (Nsibidi) and created the famous Benin Bronzes -
              masterpieces now in museums worldwide. Benin City's ancient
              earthworks were described as the world's largest man-made
              structure by the Guinness Book of Records.
            </p>
          </div>
        </section>

        {/* Tourism Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-red-700 mb-6 border-b-2 pb-2">
            Tourism & Attractions
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Edo offers world-class cultural and natural attractions:
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
            Edo's economy combines agriculture, industry, and cultural heritage:
          </p>

          <div className="space-y-6">
            {economicActivities.map((activity, index) => (
              <div key={index} className="pl-4 border-l-4 border-yellow-500">
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
              <li>Edo State Oil Palm Programme (ESOPP)</li>
              <li>Benin Industrial Park</li>
              <li>Edo Innovation Hub</li>
              <li>Gelegele Seaport Development</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-red-700 mb-6 border-b-2 pb-2">
            Education & Research
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Edo hosts prestigious educational institutions:
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
                  University of Benin ranked among Nigeria's top universities
                </li>
                <li>
                  Igbinedion University was Nigeria's first private university
                </li>
                <li>AAU known for medical and agricultural programs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Research Focus
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>UNIBEN's Institute for Benin Studies</li>
                <li>Rubber Research Institute of Nigeria</li>
                <li>National Institute for Oil Palm Research</li>
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
                  <h4 className="font-bold">Benin River Port</h4>
                  <p className="text-gray-600">
                    Multi-million dollar port development
                  </p>
                </div>
                <div className="p-4 border rounded-lg border-gray-300">
                  <h4 className="font-bold">Edo State ICT Park</h4>
                  <p className="text-gray-600">Technology innovation center</p>
                </div>
                <div className="p-4 border rounded-lg border-gray-300">
                  <h4 className="font-bold">Central Hospital Benin</h4>
                  <p className="text-gray-600">
                    State-of-the-art medical facility
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
              <p className="mb-4">Edo's world-renowned artistic traditions:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Benin Bronze casting (UNESCO-listed)</li>
                <li>Wood carving and ivory works</li>
                <li>Traditional bead making</li>
                <li>Textile weaving (akwa ocha)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Cuisine
              </h3>
              <p className="mb-4">Distinctive Edo culinary traditions:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Pounded yam with ogbono soup</li>
                <li>Bini pepper soup</li>
                <li>Owo soup</li>
                <li>Plantain porridge</li>
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
                className="border rounded-lg border-gray-300 p-4"
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
            <h3 className="text-xl font-semibold mb-4">Edo State Government</h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div>
                <h4 className="font-medium">Contact</h4>
                <p>+234 52 123 4567</p>
              </div>
              <div>
                <h4 className="font-medium">Website</h4>
                <a
                  href="https://edostate.gov.ng"
                  className="text-red-600 hover:underline"
                >
                  edostate.gov.ng
                </a>
              </div>
              <div>
                <h4 className="font-medium">Social Media</h4>
                <p>@edostategovt</p>
              </div>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Edo State Information Portal
            </p>
            <p className="text-xs mt-2">
              Data sources: Edo State Government, National Bureau of Statistics,
              UNESCO
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EdoStateInfo;
