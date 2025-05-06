import React from 'react';

const LagosStateInfo = () => {
  // Expanded data sets
  const keyFacts = [
    { title: 'Official Name', value: 'Lagos State' },
    { title: 'Capital', value: 'Ikeja' },
    { title: 'Governor', value: 'Babajide Sanwo-Olu (Since 2019)' },
    { title: 'Deputy Governor', value: 'Dr. Obafemi Hamzat' },
    { title: 'Population', value: '~25 million (Metro area, 2024 est.)' },
    { title: 'Area', value: '3,577 km² (1,381 sq mi)' },
    { title: 'GDP', value: '$136 billion (Largest in Africa)' },
    { title: 'GDP Per Capita', value: '~$5,500' },
    { title: 'Slogan', value: 'Centre of Excellence' },
    { title: 'Created', value: 'May 27, 1967' },
    { title: 'Time Zone', value: 'WAT (UTC+1)' },
    { title: 'Postal Code', value: '100001 - 102361' },
    { title: 'Area Code', value: '+234 1' },
    { title: 'Vehicle Code', value: 'LAS' },
    { title: 'HDI', value: '0.680 (Medium)' },
    { title: 'Literacy Rate', value: '92% (Highest in Nigeria)' },
  ];

  const touristAttractions = [
    {
      name: 'Lekki Conservation Centre',
      type: 'Nature Reserve',
      description:
        'A 78-hectare nature reserve with canopy walkways and wildlife',
    },
    {
      name: 'Tarkwa Bay Beach',
      type: 'Beach',
      description: 'Popular sheltered beach accessible only by boat',
    },
    {
      name: 'National Arts Theatre',
      type: 'Cultural',
      description: 'Iconic cultural center shaped like a military hat',
    },
    {
      name: 'Freedom Park',
      type: 'Historical',
      description: 'Former colonial prison turned arts and recreation space',
    },
    {
      name: 'Nike Art Gallery',
      type: 'Art',
      description: 'Four-story art gallery housing thousands of artworks',
    },
    {
      name: 'Badagry Slave Museum',
      type: 'Historical',
      description: 'Museum documenting the transatlantic slave trade',
    },
    {
      name: 'Eko Atlantic City',
      type: 'Modern Development',
      description: 'Ambitious coastal city project on reclaimed land',
    },
    {
      name: 'Coconut Beach',
      type: 'Beach',
      description: 'Scenic beach lined with coconut trees in Badagry',
    },
    {
      name: 'Kalakuta Museum',
      type: 'Historical',
      description: 'Former home of Fela Kuti, now a museum',
    },
    {
      name: 'Eleko Beach',
      type: 'Beach',
      description: 'Less crowded beach popular for picnics and parties',
    },
  ];

  const economicActivities = [
    {
      sector: 'Ports & Shipping',
      details:
        "Handles 80% of Nigeria's imports via Apapa and Tin Can Island ports",
    },
    {
      sector: 'Finance',
      details:
        'Hosts the Nigerian Stock Exchange and headquarters of all major banks',
    },
    {
      sector: 'Technology',
      details:
        "Yaba district known as 'Yabacon Valley' with 200+ tech startups",
    },
    {
      sector: 'Manufacturing',
      details: "Over 50% of Nigeria's industrial capacity located in Lagos",
    },
    {
      sector: 'Entertainment',
      details:
        'Nollywood produces 2,500 films annually, generating $7.2 billion',
    },
    {
      sector: 'Commerce',
      details:
        "Alaba International Market is West Africa's largest electronics market",
    },
    {
      sector: 'Oil & Gas',
      details: 'Major oil company headquarters and refinery operations',
    },
    {
      sector: 'Construction',
      details: 'Over $50 billion in ongoing infrastructure projects',
    },
    {
      sector: 'Telecommunications',
      details: 'Home to major telecom operators like MTN and Airtel',
    },
    {
      sector: 'Aviation',
      details: "Murtala Muhammed Airport is Nigeria's busiest airport",
    },
  ];

  const educationalInstitutions = [
    'University of Lagos (UNILAG)',
    'Lagos State University (LASU)',
    'Pan-Atlantic University',
    'Caleb University',
    'Yaba College of Technology',
    'Lagos State Polytechnic',
    'Federal College of Education (Technical)',
    'Nigerian Institute of Medical Research',
    'Lagos Business School',
    'African Leadership University',
  ];

  const transportation = [
    { type: 'Road', details: '3 major bridges connecting islands to mainland' },
    { type: 'Rail', details: 'Blue Line and Red Line rail projects underway' },
    {
      type: 'Water',
      details: 'Lagos Ferry Services Company operates 20+ routes',
    },
    { type: 'Air', details: 'Murtala Muhammed International Airport (LOS)' },
    { type: 'BRT', details: 'Bus Rapid Transit system carries 200,000 daily' },
  ];

  const festivals = [
    {
      name: 'Eyo Festival',
      period: 'May',
      description: 'Unique cultural procession of white-clad masquerades',
    },
    {
      name: 'Lagos Carnival',
      period: 'December',
      description: 'Colorful street parade celebrating diversity',
    },
    {
      name: 'Lagos International Jazz Festival',
      period: 'April',
      description: "Africa's premier jazz event",
    },
    {
      name: 'Lagos Theatre Festival',
      period: 'February',
      description: 'Largest performing arts festival in West Africa',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 mt-40">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">Lagos State</h1>
          <p className="text-2xl text-gray-600">Africa's Premier Megacity</p>
          <div className="mt-6">
            <img
              src="/images/lagos_logo.png"
              alt="Lagos State Coat of Arms"
              className="h-40 mx-auto"
            />
          </div>
        </header>

        {/* Key Facts */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 border-b-2 pb-2">
            Key Facts at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-blue-50 p-5 rounded-lg border border-blue-100"
              >
                <h3 className="font-bold text-blue-800 text-lg">
                  {fact.title}
                </h3>
                <p className="text-gray-700 mt-1">{fact.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 border-b-2 pb-2">
            About Lagos State
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Lagos State, located in southwestern Nigeria along the Atlantic
              coast, is the smallest in area but most populous state in Nigeria.
              Originally the capital of Nigeria until 1991, it remains the
              country's undisputed commercial, financial, and entertainment
              nerve center.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  Geography
                </h3>
                <p>
                  The state consists of urbanized islands (Lagos Island,
                  Victoria Island, Ikoyi) connected to the mainland by three
                  major bridges. It's divided into 20 Local Government Areas
                  (LGAs) and 37 Local Council Development Areas (LCDAs).
                </p>
                <p className="mt-3">
                  Lagos features a tropical savanna climate with distinct wet
                  (April-October) and dry (November-March) seasons. About 22% of
                  Lagos's territory consists of lagoons and creeks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  Demographics
                </h3>
                <p>
                  With an estimated population exceeding 25 million in its
                  metropolitan area, Lagos is Africa's most populous city and
                  the 7th fastest growing city in the world.
                </p>
                <p className="mt-3">
                  The state is incredibly diverse, with representatives from all
                  Nigerian ethnic groups and a growing international community.
                  Yoruba is the dominant indigenous language, though English
                  remains the official language.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-3">
              Historical Significance
            </h3>
            <p>
              Originally a Yoruba settlement called "Eko", Lagos became a major
              slave trade port in the 18th century before becoming a British
              colony in 1861. It served as Nigeria's capital from 1914 until
              1991 when the capital moved to Abuja.
            </p>
          </div>
        </section>

        {/* Tourism Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 border-b-2 pb-2">
            Tourism & Attractions
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Lagos offers diverse attractions ranging from pristine beaches to
            vibrant cultural sites:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {touristAttractions.map((attraction, index) => (
              <div
                key={index}
                className="border rounded-lg border-gray-300 overflow-hidden shadow-sm"
              >
                <div className="bg-blue-50 text-white p-3">
                  <h3 className="text-xl text-black">{attraction.name}</h3>
                  <p className="text-blue-500">{attraction.type}</p>
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
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 border-b-2 pb-2">
            Economic Powerhouse
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Lagos generates about 30% of Nigeria's GDP and would rank as
            Africa's 7th largest economy if it were a country:
          </p>

          <div className="space-y-6">
            {economicActivities.map((activity, index) => (
              <div key={index} className="pl-4 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-800">
                  {activity.sector}
                </h3>
                <p className="text-gray-700">{activity.details}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-800 mb-3">
              Special Economic Zones
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Lekki Free Trade Zone (6,000 hectares)</li>
              <li>Eko Atlantic City (10 square kilometers reclaimed land)</li>
              <li>Badagry Deep Sea Port (Under construction)</li>
              <li>Lagos International Financial Centre (Proposed)</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 border-b-2 pb-2">
            Education & Research
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Lagos boasts Nigeria's highest literacy rate (92%) and hosts premier
            educational institutions:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {educationalInstitutions.map((institution, index) => (
              <div
                key={index}
                className="flex items-start p-3 bg-gray-50 rounded"
              >
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>{institution}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Notable Achievements
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  University of Lagos ranked among top 5 universities in Nigeria
                </li>
                <li>
                  Lagos Business School is Africa's 2nd best business school (FT
                  ranking)
                </li>
                <li>
                  Yaba College of Technology is Nigeria's first higher
                  institution
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Research Institutions
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Nigerian Institute of Medical Research</li>
                <li>Federal Institute of Industrial Research</li>
                <li>National Orthopaedic Hospital Research Centre</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 border-b-2 pb-2">
            Infrastructure & Transportation
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Transport Network
              </h3>
              <ul className="space-y-4">
                {transportation.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
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
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Major Projects
              </h3>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg border-gray-300">
                  <h4 className="font-bold">Lagos Light Rail</h4>
                  <p className="text-gray-600">
                    7-line system, Blue Line operational since 2023
                  </p>
                </div>
                <div className="p-4 border rounded-lg border-gray-300">
                  <h4 className="font-bold">Fourth Mainland Bridge</h4>
                  <p className="text-gray-600">
                    38km bridge expected to open 2027
                  </p>
                </div>
                <div className="p-4 border rounded-lg border-gray-300">
                  <h4 className="font-bold">Lagos Metro</h4>
                  <p className="text-gray-600">
                    Underground subway system in planning stages
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 border-b-2 pb-2">
            Culture & Lifestyle
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Music & Entertainment
              </h3>
              <p className="mb-4">
                Lagos is the birthplace of Afrobeats and home to Nigeria's
                Nollywood film industry, the world's second-largest film
                producer.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Over 200 music studios in Surulere and Ikeja</li>
                <li>Home to artists like Burna Boy, Wizkid, and Tiwa Savage</li>
                <li>Hosts the Headies Awards (Africa's Grammy equivalent)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                Cuisine
              </h3>
              <p className="mb-4">
                Lagos offers diverse culinary experiences blending traditional
                Yoruba food with international influences:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Jollof rice - The subject of West Africa's great debate</li>
                <li>Suya - Spicy grilled meat skewers</li>
                <li>
                  Amala with ewedu and gbegiri - Traditional Yoruba staple
                </li>
                <li>Buka restaurants - Local eateries serving ethnic dishes</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-blue-600 mt-8 mb-3">
            Major Festivals
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {festivals.map((festival, index) => (
              <div
                key={index}
                className="border rounded-lg border-gray-300 p-4"
              >
                <h4 className="font-bold">{festival.name}</h4>
                <p className="text-sm text-blue-600 mb-2">{festival.period}</p>
                <p className="text-gray-600 text-sm">{festival.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Lagos State Government
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div>
                <h4 className="font-medium">Contact</h4>
                <p>+234 1 123 4567</p>
              </div>
              <div>
                <h4 className="font-medium">Website</h4>
                <a
                  href="https://lagosstate.gov.ng"
                  className="text-blue-600 hover:underline"
                >
                  lagosstate.gov.ng
                </a>
              </div>
              <div>
                <h4 className="font-medium">Social Media</h4>
                <p>@followlasg</p>
              </div>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Lagos State Information Portal
            </p>
            <p className="text-xs mt-2">
              Data sources: Lagos State Government, National Bureau of
              Statistics, World Bank, UNDP
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LagosStateInfo;
