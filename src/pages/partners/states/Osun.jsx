import React from 'react';

const OsunStateInfo = () => {
  // Expanded data sets
  const keyFacts = [
    { title: 'Official Name', value: 'Osun State' },
    { title: 'Capital', value: 'Osogbo' },
    { title: 'Governor', value: 'Ademola Adeleke (Since 2022)' },
    { title: 'Deputy Governor', value: 'Kola Adewusi' },
    { title: 'Population', value: '~4.7 million (2023 est.)' },
    { title: 'Area', value: '9,251 km² (3,572 sq mi)' },
    { title: 'GDP', value: '$10.4 billion (2023)' },
    { title: 'GDP Per Capita', value: '~$2,200' },
    { title: 'Slogan', value: 'State of the Living Spring' },
    { title: 'Created', value: 'August 27, 1991' },
    { title: 'Time Zone', value: 'WAT (UTC+1)' },
    { title: 'Postal Code', value: '230001' },
    { title: 'Area Code', value: '+234 36' },
    { title: 'Vehicle Code', value: 'OSN' },
    { title: 'HDI', value: '0.599 (Medium)' },
    { title: 'Literacy Rate', value: '78% (Above national average)' },
  ];

  const touristAttractions = [
    {
      name: 'Osun-Osogbo Sacred Grove',
      type: 'UNESCO Site',
      description:
        'A sacred forest along the Osun River with shrines and sculptures',
    },
    {
      name: 'Oranmiyan Staff',
      type: 'Historical Monument',
      description: '23-foot monolith linked to the legendary Yoruba king',
    },
    {
      name: 'Olumirin Waterfall',
      type: 'Nature',
      description: 'Seven-step waterfall in Erin-Ijesha',
    },
    {
      name: 'Ife Museum',
      type: 'Cultural',
      description: 'Houses artifacts from ancient Ife civilization',
    },
    {
      name: "Oba's Palace, Osogbo",
      type: 'Cultural',
      description: 'Traditional seat of the Ataoja of Osogbo',
    },
    {
      name: 'Nike Art Gallery, Osogbo',
      type: 'Art',
      description: 'Showcases contemporary Nigerian art',
    },
    {
      name: 'Mbari Arts Centre',
      type: 'Cultural',
      description: 'Open-air museum of Yoruba art',
    },
    {
      name: 'Ayikunugba Waterfall',
      type: 'Nature',
      description: 'Picturesque waterfall in Oke-Ila',
    },
    {
      name: 'Oduduwa Statue',
      type: 'Historical',
      description: 'Monument to the progenitor of Yoruba race',
    },
    {
      name: 'Ikirun Hills',
      type: 'Nature',
      description: 'Scenic hills with hiking trails',
    },
  ];

  const economicActivities = [
    {
      sector: 'Agriculture',
      details: 'Leading producer of cocoa, kolanut, cassava, and palm oil',
    },
    {
      sector: 'Mining',
      details: 'Gold, granite, talc, and tourmaline deposits',
    },
    {
      sector: 'Commerce',
      details: 'Vibrant markets including Owena and Oja Oba',
    },
    {
      sector: 'Education',
      details:
        "Hosts Obafemi Awolowo University (OAU), one of Nigeria's premier universities",
    },
    {
      sector: 'Tourism',
      details: 'UNESCO-recognized sites generate cultural tourism',
    },
    {
      sector: 'Art & Craft',
      details:
        'Renowned for traditional indigo dyeing (adire) and bronze casting',
    },
    {
      sector: 'Food Processing',
      details: 'Several cassava and palm oil processing plants',
    },
    { sector: 'Textiles', details: 'Traditional aso-oke weaving centers' },
    {
      sector: 'Religion',
      details: 'Pilgrimage destination for Osun worshippers worldwide',
    },
    {
      sector: 'Healthcare',
      details: 'Ladoke Akintola University Teaching Hospital',
    },
  ];

  const educationalInstitutions = [
    'Obafemi Awolowo University (OAU)',
    'Osun State University (UNIOSUN)',
    'Ladoke Akintola University of Technology (LAUTECH)',
    'Federal Polytechnic, Ede',
    'Osun State College of Education, Ilesa',
    'Osun State College of Technology, Esa-Oke',
    'Bowen University, Iwo',
    "Redeemer's University, Ede",
    'Adeleke University, Ede',
    'Federal College of Education, Osiele',
  ];

  const transportation = [
    { type: 'Road', details: 'Extensive network connecting all major towns' },
    { type: 'Rail', details: 'Oshogbo railway station on Lagos-Kano line' },
    { type: 'Air', details: 'Akoda Airstrip (Under development)' },
    {
      type: 'Public Transit',
      details: 'Commercial buses and motorcycles (okada)',
    },
  ];

  const festivals = [
    {
      name: 'Osun-Osogbo Festival',
      period: 'August',
      description:
        'Annual spiritual cleansing ceremony attracting 500,000 visitors',
    },
    {
      name: 'Olojo Festival',
      period: 'October',
      description: 'Celebration of creation in Ile-Ife',
    },
    {
      name: 'Obafest',
      period: 'November',
      description: 'Cultural festival celebrating Ife heritage',
    },
    {
      name: 'Iwude Festival',
      period: 'September',
      description: 'Historical festival in Ilesa',
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 mt-40">
          <h1 className="text-4xl font-bold text-green-800 mb-2">Osun State</h1>
          <p className="text-2xl text-amber-700">
            The State of the Living Spring
          </p>
          <div className="mt-6">
            <img
              src="/images/osun_logo.webp"
              alt="Osun State Coat of Arms"
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
            About Osun State
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Osun State, located in southwestern Nigeria, was created in 1991
              from part of Oyo State. Named after the River Osun, the state is
              celebrated as the cradle of Yoruba civilization and home to
              Ile-Ife, the mythical birthplace of mankind according to Yoruba
              tradition.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-3">
                  Geography
                </h3>
                <p>
                  The state features tropical rainforest in the south and
                  derived savanna in the north. The Osun River flows through the
                  state, with the sacred Osun-Osogbo Grove as its spiritual
                  center.
                </p>
                <p className="mt-3">
                  Osun shares borders with Kwara, Oyo, Ogun, Ondo, and Ekiti
                  states. The landscape includes the Erin-Ijesha waterfalls and
                  numerous hills ideal for eco-tourism.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-3">
                  Cultural Significance
                </h3>
                <p>
                  Osun is the spiritual home of Yoruba culture, with Ile-Ife
                  regarded as the ancestral home of all Yoruba people. The state
                  hosts numerous sacred sites and preserves ancient traditions
                  of bronze casting, bead making, and indigo dyeing.
                </p>
                <p className="mt-3">
                  The annual Osun-Osogbo festival is recognized by UNESCO as a
                  World Heritage event, attracting devotees and tourists from
                  across the globe.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-green-600 mt-6 mb-3">
              Historical Legacy
            </h3>
            <p>
              The Ife Kingdom dates back to 500 BC, making it one of Africa's
              oldest civilizations. Osun was part of the Oyo Empire before
              becoming part of Western Region in colonial Nigeria. The state
              played significant roles in Nigeria's independence movement and
              development of Yoruba cultural nationalism.
            </p>
          </div>
        </section>

        {/* Tourism Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-green-700 mb-6 border-b-2 pb-2">
            Tourism & Attractions
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Osun offers unique cultural and natural attractions that showcase
            Yoruba heritage:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {touristAttractions.map((attraction, index) => (
              <div
                key={index}
                className="border rounded-lg border-gray-300 overflow-hidden shadow-sm"
              >
                <div className="bg-green-50 text-white p-3">
                  <h3 className="text-xl text-black">{attraction.name}</h3>
                  <p className="text-green-500">{attraction.type}</p>
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
            Osun's economy blends agriculture, mining, education, and cultural
            tourism:
          </p>

          <div className="space-y-6">
            {economicActivities.map((activity, index) => (
              <div key={index} className="pl-4 border-l-4 border-amber-500">
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
              <li>Osun Economic Free Trade Zone</li>
              <li>Gold Mining Initiative in Ilesa</li>
              <li>Osun Rural Enterprise and Agriculture Program</li>
              <li>Osogbo Tech Innovation Hub</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-green-700 mb-6 border-b-2 pb-2">
            Education & Research
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Osun boasts one of Nigeria's highest concentrations of tertiary
            institutions:
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
                <li>
                  Obafemi Awolowo University ranked among Nigeria's top 5
                  universities
                </li>
                <li>
                  OAU's Faculty of Pharmacy consistently ranks #1 in Nigeria
                </li>
                <li>
                  Osun State University pioneered multi-campus system in Nigeria
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                Research Focus
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  OAU's African Institute for Science Policy and Innovation
                </li>
                <li>LAUTECH's Center for Engineering Research</li>
                <li>UNIOSUN's African Heritage Research Center</li>
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
                  <h4 className="font-bold">Osun Airport Project</h4>
                  <p className="text-gray-600">
                    International cargo/passenger airport in development
                  </p>
                </div>
                <div className="p-4 border rounded-lg border-gray-300">
                  <h4 className="font-bold">Ring Road Project</h4>
                  <p className="text-gray-600">
                    32km road connecting Osogbo-Ikirun-Ila Odo
                  </p>
                </div>
                <div className="p-4 border rounded-lg border-gray-300">
                  <h4 className="font-bold">Water Supply Scheme</h4>
                  <p className="text-gray-600">
                    Multi-billion naira potable water initiative
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
              <p className="mb-4">
                Osun is the heartland of traditional Yoruba arts:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ife bronze heads (12th-15th century masterpieces)</li>
                <li>Adire eleko (indigo resist-dyeing)</li>
                <li>Aso-oke handwoven textiles</li>
                <li>Oriki (Yoruba praise poetry)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                Cuisine
              </h3>
              <p className="mb-4">Distinctive Osun culinary traditions:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Iyan (pounded yam) with egusi soup</li>
                <li>Amala with gbegiri and ewedu</li>
                <li>Obe alata (peppered stew)</li>
                <li>Ofada rice with ayamase sauce</li>
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
              Osun State Government
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div>
                <h4 className="font-medium">Contact</h4>
                <p>+234 36 123 4567</p>
              </div>
              <div>
                <h4 className="font-medium">Website</h4>
                <a
                  href="https://osunstate.gov.ng"
                  className="text-green-600 hover:underline"
                >
                  osunstate.gov.ng
                </a>
              </div>
              <div>
                <h4 className="font-medium">Social Media</h4>
                <p>@stateofosun</p>
              </div>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Osun State Information Portal
            </p>
            <p className="text-xs mt-2">
              Data sources: Osun State Government, National Bureau of
              Statistics, UNESCO
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default OsunStateInfo;
