import React from 'react';

const PlateauStateInfo = () => {
  const keyFacts = [
    { title: 'Official Name', value: 'Plateau State' },
    { title: 'Capital', value: 'Jos' },
    { title: 'Governor', value: 'Caleb Mutfwang (Since 2023)' },
    { title: 'Deputy Governor', value: 'Josephine Piyo' },
    { title: 'Population', value: '~4.7 million (2023 est.)' },
    { title: 'Area', value: '30,913 km² (11,936 sq mi)' },
    { title: 'GDP', value: '$9.2 billion (2023)' },
    { title: 'GDP Per Capita', value: '~$1,950' },
    { title: 'Slogan', value: 'Home of Peace and Tourism' },
    { title: 'Created', value: 'February 3, 1976' },
    { title: 'Time Zone', value: 'WAT (UTC+1)' },
    { title: 'Postal Code', value: '930001' },
    { title: 'Area Code', value: '+234 73' },
    { title: 'Vehicle Code', value: 'PL' },
    { title: 'HDI', value: '0.587 (Medium)' },
    { title: 'Literacy Rate', value: '75% (Above national average)' },
  ];

  const touristAttractions = [
    {
      name: 'Shere Hills',
      type: 'Nature',
      description:
        'Spectacular mountain range with hiking trails and rock formations',
    },
    {
      name: 'Jos Wildlife Park',
      type: 'Nature',
      description:
        '17.5km² park with diverse wildlife including lions and elephants',
    },
    {
      name: 'Kura Falls',
      type: 'Nature',
      description: 'Picturesque waterfall near Barkin Ladi',
    },
    {
      name: 'National Museum Jos',
      type: 'Cultural',
      description: 'Premier museum of Nigerian antiquities and Nok terracottas',
    },
    {
      name: 'Assop Falls',
      type: 'Nature',
      description: 'Scenic waterfall along the Jos-Kagoro road',
    },
    {
      name: 'Wase Rock',
      type: 'Nature',
      description: '500m inselberg and bird sanctuary',
    },
    {
      name: 'Jos Plateau Vineyard',
      type: 'Agriculture',
      description: "Nigeria's only commercial vineyard",
    },
    {
      name: 'Kerang Volcanic Mountain',
      type: 'Nature',
      description: 'Extinct volcano with crater lakes',
    },
    {
      name: 'Solomon Lar Amusement Park',
      type: 'Recreation',
      description: 'Family entertainment center in Jos',
    },
    {
      name: 'Naraguta Leather Works',
      type: 'Cultural',
      description: 'Traditional leather crafting center',
    },
  ];

  const economicActivities = [
    {
      sector: 'Mining',
      details: 'Tin, columbite, kaolin, zircon, and gemstones deposits',
    },
    {
      sector: 'Agriculture',
      details: 'Major producer of potatoes, maize, millet, and vegetables',
    },
    {
      sector: 'Tourism',
      details: 'Cool climate and scenic landscapes attract visitors',
    },
    {
      sector: 'Education',
      details: 'Hosts University of Jos and other tertiary institutions',
    },
    {
      sector: 'Manufacturing',
      details: 'Food processing, bottling, and steel rolling mills',
    },
    { sector: 'Livestock', details: 'Cattle ranching and dairy production' },
    {
      sector: 'Forestry',
      details: 'Timber production from pine and eucalyptus plantations',
    },
    {
      sector: 'Handicrafts',
      details: 'Traditional pottery, weaving, and metalwork',
    },
    {
      sector: 'Healthcare',
      details: 'Jos University Teaching Hospital serves North Central region',
    },
    {
      sector: 'Hydroelectric Power',
      details: 'Kura Dam and other small hydro projects',
    },
  ];

  const educationalInstitutions = [
    'University of Jos (UNIJOS)',
    'Plateau State University (PLASU)',
    'Federal College of Education, Pankshin',
    'College of Agriculture, Garkawa',
    'Plateau State Polytechnic',
    'Nigerian Film Institute, Jos',
    'Staff Development Institute, Jos',
    'Bible College of Nigeria, Jos',
    'ECWA Theological Seminary, Jos',
    "St. Luke's College of Health Technology",
  ];

  const transportation = [
    {
      type: 'Road',
      details: 'Extensive network connecting to all geopolitical zones',
    },
    {
      type: 'Rail',
      details: 'Jos railway station on Port Harcourt-Maiduguri line',
    },
    { type: 'Air', details: 'Yakubu Gowon Airport (domestic flights)' },
    { type: 'Public Transit', details: 'Commercial buses and taxis' },
  ];

  const festivals = [
    {
      name: 'Nzem Berom',
      period: 'April',
      description: 'Cultural festival of the Berom people',
    },
    {
      name: 'Pushit Cultural Festival',
      period: 'December',
      description: 'Celebration of Pushit heritage',
    },
    {
      name: 'Wash Cultural Festival',
      period: 'October',
      description: 'Annual festival of the Wash people',
    },
    {
      name: 'Lalin Festival',
      period: 'August',
      description: "Tarok people's cultural celebration",
    },
  ];

  return (
    <div className="min-h-screen bg-green-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 mt-40">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            Plateau State
          </h1>
          <p className="text-2xl text-green-600">Home of Peace and Tourism</p>
          <div className="mt-6">
            <img
              src="/images/plateau_logo.svg"
              alt="Plateau State Coat of Arms"
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
            About Plateau State
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Plateau State, located in Nigeria's North Central region, is known
              as the "Home of Peace and Tourism" due to its relatively cool
              climate, scenic landscapes, and diverse ethnic groups living in
              harmony. Created in 1976, it derives its name from the Jos
              Plateau, a mountainous area covering about 8,600km².
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-3">
                  Geography
                </h3>
                <p>
                  The state features high plains, rolling hills, and spectacular
                  rock formations with an average elevation of 1,280 meters
                  above sea level. This gives it a cooler climate than
                  surrounding states, with temperatures ranging from 18°C to
                  25°C.
                </p>
                <p className="mt-3">
                  Plateau shares borders with Bauchi, Kaduna, Nasarawa, and
                  Taraba states.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-3">
                  Cultural Diversity
                </h3>
                <p>
                  Plateau is home to over 50 ethnic groups including Berom,
                  Afizere, Amo, Anaguta, Aten, Bogghom, Challa, Chip, Fier,
                  Gashish, and Ron. This diversity is reflected in the state's
                  rich cultural heritage and traditional crafts.
                </p>
                <p className="mt-3">
                  Jos, the capital, is known for its cosmopolitan nature and
                  historical tin mining industry.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-green-600 mt-6 mb-3">
              Historical Significance
            </h3>
            <p>
              Plateau was a major center of tin mining during colonial times.
              The famous Nok culture, which produced remarkable terracotta
              sculptures around 500 BC, flourished in this region. Jos became an
              important administrative and commercial center during the colonial
              era.
            </p>
          </div>
        </section>

        {/* Tourism Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-green-700 mb-6 border-b-2 pb-2">
            Tourism & Attractions
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Plateau's cool climate and scenic landscapes make it a prime tourist
            destination:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {touristAttractions.map((attraction, index) => (
              <div
                key={index}
                className="border rounded-lg border-gray-300 overflow-hidden shadow-sm"
              >
                <div className="bg-green-50 text-white p-3">
                  <h3 className="text-xl text-black">{attraction.name}</h3>
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
            Plateau's economy is driven by mining, agriculture, and tourism:
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
              <li>Jos Inland Container Terminal</li>
              <li>Plateau State Mining Development Corporation</li>
              <li>Agricultural Services and Training Center</li>
              <li>Jos Metro Project</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-semibold text-green-700 mb-6 border-b-2 pb-2">
            Education & Research
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Plateau hosts several prestigious educational institutions:
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
                  University of Jos ranked among Nigeria's top universities
                </li>
                <li>
                  National Film Institute is Nigeria's premier film school
                </li>
                <li>
                  Plateau State University specializes in science and technology
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                Research Focus
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>UNIJOS's Nok Culture Research Center</li>
                <li>National Veterinary Research Institute, Vom</li>
                <li>
                  Nigerian Institute of Policy and Strategic Studies, Kuru
                </li>
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
                  <h4 className="font-bold">Jos Master Plan</h4>
                  <p className="text-gray-600">
                    Comprehensive urban renewal initiative
                  </p>
                </div>
                <div className="p-4 border rounded-lg border-gray-300">
                  <h4 className="font-bold">Lalong Legacy Projects</h4>
                  <p className="text-gray-600">
                    Road networks and infrastructure development
                  </p>
                </div>
                <div className="p-4 border rounded-lg border-gray-300">
                  <h4 className="font-bold">Jos International Brewery</h4>
                  <p className="text-gray-600">
                    Multi-billion naira beverage production facility
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
              <p className="mb-4">Plateau's rich artistic traditions:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Pottery and ceramics (Naraguta)</li>
                <li>Traditional weaving and textiles</li>
                <li>Wood carving and bamboo crafts</li>
                <li>Beadwork and jewelry making</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                Cuisine
              </h3>
              <p className="mb-4">Distinctive Plateau culinary traditions:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Pounded yam with bitterleaf soup</li>
                <li>Tuwo shinkafa with miyan taushe</li>
                <li>Acha (hungry rice) dishes</li>
                <li>Local delicacies like masa and gwote</li>
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
              Plateau State Government
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div>
                <h4 className="font-medium">Contact</h4>
                <p>+234 73 123 4567</p>
              </div>
              <div>
                <h4 className="font-medium">Website</h4>
                <a
                  href="https://plateaustate.gov.ng"
                  className="text-green-600 hover:underline"
                >
                  plateaustate.gov.ng
                </a>
              </div>
              <div>
                <h4 className="font-medium">Social Media</h4>
                <p>@plateaustategovt</p>
              </div>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Plateau State Information Portal
            </p>
            <p className="text-xs mt-2">
              Data sources: Plateau State Government, National Bureau of
              Statistics, UNESCO
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PlateauStateInfo;
