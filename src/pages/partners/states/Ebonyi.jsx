import React from 'react';

const EbonyiStateInfo = () => {
  const keyFacts = [
    { title: 'Official Name', value: 'Ebonyi State' },
    { title: 'Capital', value: 'Abakaliki' },
    { title: 'Governor', value: 'Francis Nwifuru (Since 2023)' },
    { title: 'Deputy Governor', value: 'Patricia Obila' },
    { title: 'Population', value: '~3.1 million (2023 est.)' },
    { title: 'Area', value: '5,935 km² (2,292 sq mi)' },
    { title: 'GDP', value: '$6.5 billion (2023)' },
    { title: 'GDP Per Capita', value: '~$2,100' },
    { title: 'Slogan', value: 'Salt of the Nation' },
    { title: 'Created', value: 'October 1, 1996' },
    { title: 'Time Zone', value: 'WAT (UTC+1)' },
    { title: 'Postal Code', value: '480001' },
    { title: 'Area Code', value: '+234 43' },
    { title: 'Vehicle Code', value: 'EB' },
    { title: 'HDI', value: '0.548 (Medium)' },
    { title: 'Literacy Rate', value: '68% (Growing rapidly)' },
  ];

  const touristAttractions = [
    {
      name: 'Abakaliki Green Lake',
      type: 'Nature',
      description: 'Stunning emerald-green lake with unique coloration',
    },
    {
      name: 'Amanchor Cave',
      type: 'Nature',
      description: 'Ancient cave system with historical significance',
    },
    {
      name: 'Salt Lakes',
      type: 'Nature',
      description: 'Natural salt deposits at Okposi and Uburu',
    },
    {
      name: 'Ndibe Sand Beach',
      type: 'Nature',
      description: 'Picturesque beach along Cross River',
    },
    {
      name: 'Ezza War Museum',
      type: 'Cultural',
      description: 'Documents Ezza clan history and artifacts',
    },
    {
      name: 'Amasiri Hills',
      type: 'Nature',
      description: 'Scenic hills with hiking trails',
    },
    {
      name: 'Ishiagu Pottery Village',
      type: 'Cultural',
      description: 'Traditional pottery making center',
    },
    {
      name: 'Oriental Cement Quarry',
      type: 'Industrial',
      description: 'Massive limestone mining site',
    },
    {
      name: 'Ebonyi State University Botanical Garden',
      type: 'Nature',
      description: 'Diverse plant species collection',
    },
    {
      name: 'Oferekpe Waterfront',
      type: 'Nature',
      description: 'Scenic river views and picnic spots',
    },
  ];

  const economicActivities = [
    {
      sector: 'Agriculture',
      details: 'Leading producer of rice, yam, cassava, and palm oil',
    },
    {
      sector: 'Mineral Resources',
      details: 'Salt, limestone, lead, zinc, and crude oil deposits',
    },
    {
      sector: 'Education',
      details: 'Fast-growing sector with Ebonyi State University',
    },
    {
      sector: 'Manufacturing',
      details: 'Cement production, rice milling, and salt processing',
    },
    { sector: 'Commerce', details: 'Vibrant markets including Abakpa Market' },
    {
      sector: 'Healthcare',
      details: 'Ebonyi State University Teaching Hospital',
    },
    {
      sector: 'Fisheries',
      details: 'Extensive fish farming in riverine areas',
    },
    {
      sector: 'Salt Production',
      details: 'Traditional and industrial salt mining',
    },
    {
      sector: 'Construction',
      details: 'Major infrastructure development ongoing',
    },
    {
      sector: 'Emerging Tech',
      details: 'New ICT initiatives and innovation hubs',
    },
  ];

  const educationalInstitutions = [
    'Ebonyi State University (EBSU)',
    'Federal University Ndufu-Alike (FUNAI)',
    'Alex Ekwueme Federal University Teaching Hospital',
    'Federal College of Agriculture, Ishiagu',
    'College of Health Sciences, Ezzamgbo',
    'Akanu Ibiam Federal Polytechnic',
    'Ebonyi State College of Education',
    'Presco Campus of the National Open University',
    'School of Nursing and Midwifery, Uburu',
    'David Umahi Federal University of Health Sciences',
  ];

  const transportation = [
    {
      type: 'Road',
      details: 'Extensive network including Enugu-Abakaliki highway',
    },
    { type: 'Rail', details: 'Planned connection to Eastern Rail Line' },
    {
      type: 'Air',
      details: 'Ebonyi State International Airport (under construction)',
    },
    { type: 'Water', details: 'Potential river transport on Cross River' },
  ];

  const festivals = [
    {
      name: 'Ikeji Festival',
      period: 'April',
      description: 'Cultural festival of the Izzi people',
    },
    {
      name: 'Okumkpo Festival',
      period: 'November',
      description: 'Masquerade festival in Afikpo',
    },
    {
      name: 'Salt Festival',
      period: 'December',
      description: 'Celebration of Uburu salt production',
    },
    {
      name: 'New Yam Festival',
      period: 'August',
      description: 'Harvest celebration across communities',
    },
  ];

  return (
    <div className="min-h-screen bg-green-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 mt-40">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            Ebonyi State
          </h1>
          <p className="text-2xl text-green-600">Salt of the Nation</p>
          <div className="mt-6">
            <img
              src="/images/ebonyi_logo.png"
              alt="Ebonyi State Coat of Arms"
              className="h-40 mx-auto"
            />
          </div>
        </header>

        {/* Key Facts */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-green-700 mb-6 border-b-2 pb-2">
            Key Facts at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-green-50 p-5 rounded-lg border border-green-100"
              >
                <h3 className="font-bold text-green-800 text-lg">
                  {fact.title}
                </h3>
                <p className="text-gray-700 mt-1">{fact.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-green-700 mb-6 border-b-2 pb-2">
            About Ebonyi State
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Ebonyi State, created in 1996 from parts of Enugu and Abia states,
              is Nigeria's youngest southeastern state. Dubbed the "Salt of the
              Nation," it's known for its rich mineral resources, agricultural
              productivity, and rapid infrastructure development under recent
              administrations.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-3">
                  Geography
                </h3>
                <p>
                  Ebonyi features rolling hills, plains, and numerous rivers
                  including the Cross River. The state shares borders with
                  Benue, Cross River, Enugu, and Abia states.
                </p>
                <p className="mt-3">
                  The landscape includes the Uburu salt lakes, limestone
                  deposits, and fertile plains that make it an agricultural
                  powerhouse.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-3">
                  Cultural Diversity
                </h3>
                <p>
                  Major ethnic groups include the Igbo subgroups: Izzi, Ezza,
                  Ikwo, Mgbo, and Afikpo. The state maintains rich cultural
                  traditions in music, dance, and crafts.
                </p>
                <p className="mt-3">
                  Ebonyi is known for its traditional wrestling, pottery, and
                  unique salt production methods dating back centuries.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-green-600 mt-6 mb-3">
              Economic Transformation
            </h3>
            <p>
              Since creation, Ebonyi has transformed from Nigeria's poorest
              state to a rapidly developing one. The agricultural revolution,
              mineral exploitation, and infrastructure projects have
              significantly improved living standards and economic indicators.
            </p>
          </div>
        </section>

        {/* Tourism Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-green-700 mb-6 border-b-2 pb-2">
            Tourism & Attractions
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Ebonyi offers unique natural and cultural attractions:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {touristAttractions.map((attraction, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-sm border-gray-300"
              >
                <div className="bg-green-50 text-white p-3">
                  <h3 className="text-black text-xl">{attraction.name}</h3>
                  <p className="text-green-600">{attraction.type}</p>
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
          <h2 className="text-3xl font-semibold text-green-700 mb-6 border-b-2 pb-2">
            Economic Profile
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Ebonyi's economy is anchored on agriculture and mineral resources:
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

          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-3">
              Special Development Projects
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ebonyi State International Airport</li>
              <li>Ebonyi Industrial Cluster</li>
              <li>Rice City Project</li>
              <li>Salt City Project</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-green-700 mb-6 border-b-2 pb-2">
            Education & Research
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Ebonyi has rapidly expanded its educational infrastructure:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {educationalInstitutions.map((institution, index) => (
              <div
                key={index}
                className="flex items-start p-3 bg-gray-50 rounded"
              >
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span>{institution}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                Academic Excellence
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>EBSU known for medical and agricultural programs</li>
                <li>FUNAI emerging as research-intensive institution</li>
                <li>David Umahi University focusing on health sciences</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                Research Focus
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Rice research and improved seed development</li>
                <li>Salt processing technologies</li>
                <li>Limestone utilization studies</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-green-700 mb-6 border-b-2 pb-2">
            Infrastructure & Transportation
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                Transport Network
              </h3>
              <ul className="space-y-4">
                {transportation.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
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
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                Major Projects
              </h3>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg border-gray-300">
                  <h4 className="font-bold">Ebonyi Ring Road</h4>
                  <p className="text-gray-600">
                    137km road connecting all local governments
                  </p>
                </div>
                <div className="p-4 border rounded-lg border-gray-300">
                  <h4 className="font-bold">International Shopping Mall</h4>
                  <p className="text-gray-600">
                    Modern commercial complex in Abakaliki
                  </p>
                </div>
                <div className="p-4 border rounded-lg border-gray-300">
                  <h4 className="font-bold">
                    St. Margaret Umahi International Market
                  </h4>
                  <p className="text-gray-600">
                    One of Nigeria's largest markets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-green-700 mb-6 border-b-2 pb-2">
            Culture & Heritage
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                Arts & Crafts
              </h3>
              <p className="mb-4">Ebonyi's traditional arts:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ishiagu pottery and ceramics</li>
                <li>Traditional weaving and textiles</li>
                <li>Wood carving and bamboo crafts</li>
                <li>Salt processing artifacts</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                Cuisine
              </h3>
              <p className="mb-4">Distinctive Ebonyi dishes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Abakaliki rice with ofe akwu</li>
                <li>Ji mmiri oku (spicy pounded yam)</li>
                <li>Okpa (bambara nut pudding)</li>
                <li>Ugba and akpuruakpu</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-green-600 mt-8 mb-3">
            Major Festivals
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {festivals.map((festival, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 border-gray-300"
              >
                <h4 className="font-bold">{festival.name}</h4>
                <p className="text-sm text-green-600 mb-2">{festival.period}</p>
                <p className="text-gray-600 text-sm">{festival.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Ebonyi State Government
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div>
                <h4 className="font-medium">Contact</h4>
                <p>+234 43 123 4567</p>
              </div>
              <div>
                <h4 className="font-medium">Website</h4>
                <a
                  href="https://ebonyistate.gov.ng"
                  className="text-green-600 hover:underline"
                >
                  ebonyistate.gov.ng
                </a>
              </div>
              <div>
                <h4 className="font-medium">Social Media</h4>
                <p>@ebonyistategov</p>
              </div>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Ebonyi State Information Portal
            </p>
            <p className="text-xs mt-2">
              Data sources: Ebonyi State Government, National Bureau of
              Statistics
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EbonyiStateInfo;
