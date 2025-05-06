import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const itinerary = [
  {
    day: 'Sun, 25 May',
    date: '2025-05-25',
    activities: [
      {
        time: '',
        title: 'Arrival & Welcome Reception',
        location: 'Abuja Continental Hotel',
      },
    ],
    special_guests: [],
    participating_ministries: [],
    participating_missions: [],
  },
  {
    day: 'Mon, 26 May',
    date: '2025-05-26',
    activities: [
      {
        time: '',
        title:
          'World Trade Center Abuja & Ministry of Industry, Trade and Investment Meeting',
        location: 'Abuja',
      },
    ],
    special_guests: [
      'Dr. Jumoke Oduwole (Hon. Minister of Industry, Trade, and Investment of Nigeria',
      'Nigerian Government Officials)',
      'Mr Karim Ahmed Adelaja (Vice President, World Trade Center Abuja)',
      'Dr David Opeyemi Oke (Director, Trade Services World Trade Center Abuja)',
    ],
  },
  {
    day: 'Tue, 27 May',
    date: '2025-05-27',
    activities: [
      {
        time: '',
        title:
          'EU-Nigeria Business Forum, Presentations by States and Business Exhibitions',
        location: 'Nigerian Parliament, National Assembly',
      },
    ],
    special_guests: [
      'Mr Babajide Sanwoolu (Executive Governor of Lagos State)',
      'Mr Ademola Adeleke (Executive governor of Osun State)',
      'Dr. Abdulrahman Abdulrazaq (Executive Governor of Kwara State)',
      'Mr. Caleb Manasseh Mutfwang (Executive Governor of Plateau State)',
      'Mr. Monday Okpebholo (Executive Governor of Edo State)',
      'Rt Hon Francis Nwifuru (Executive Governor of Ebonyi State)',
    ],
    participating_ministries: [
      'Minister of Budget and Planning - Sen. Abubakar Atiku Bagudu',
      'Minister of Women Affairs - Hajia Imaan Sulaiman -Ibrahim',
      'Minister of State for Agriculture - Dr. Aliyu Sabi Abdullahi, CON',
      'Minister of Livestock Development - Idi Mukhtar Maiha',
      'Minister of Marine & Blue Economy- Adegboyega Oyetola, CON',
    ],
    participating_missions: [
      'Belgium Ambassador to Nigeria - Amb Pieter leeknegt',
      'EU Ambassador to Nigeria - Amb Gautier Mignoto',
      'High Commissioner of Tanzania to Nigeria - Selestine Gervas Kakele',
    ],
  },
  {
    day: 'Wed, 28 May',
    date: '2025-05-28',
    activities: [
      {
        time: '',
        title: 'Nigerian Parliament, Site Visits & B2B Matchmaking',
        location: 'National Assembly, Abuja',
      },
    ],
    special_guests: [
      'Hon. Abbas Tajudden - Hon. Speaker of the House of Representatives of Nigeria',
      'Hon. Saba Ahmed Adamu - Chairman, Nigeria-Belgium Parliamentary Friendship Committee',
      'Hon. Kalejaiye Adeboye Paul - Chairman, Nigeria-France Parliamentary Friendship Committee',
    ],
  },
  {
    day: 'Thu, 29 May',
    date: '2025-05-29',
    activities: [
      {
        time: '',
        title:
          'Bilateral Engagements with Chambers of Commerce & EU Delegation',
        location: 'Abuja',
      },
    ],
    special_guests: [
      'The Nigerian Association of Chambers of Commerce, Industry, Mines and Agriculture (NACCIMA)',
      'Abuja Chamber of Commerce Business Network',
      'Lagos Chamber of Commerce Business Network',
    ],
  },
  {
    day: 'Fri, 30 May',
    date: '2025-05-30',
    activities: [
      {
        time: '',
        title: 'Regional Delegations & State-Level Business Engagements',
        location: 'Abuja',
      },
    ],
  },
  {
    day: 'Sat, 31 May',
    date: '2025-05-31',
    activities: [
      {
        time: '',
        title: 'Departures to Europe',
        location: '',
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.98,
  },
};

// PDF Icon SVG
const PdfIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M8 1v2h3v1H8v1h3v1H8v1h3v1H8v1h3v1H8v1h7v-1h-3v-1h3v-1h-3v-1h3v-1h-3v-1h3v-1h-3V3h3V1H8zm10 1v5h4V2h-4zm1 1h2v3h-2V3zM4 4v16h16v-9h-5V4H4zm7 2h3v1h-3V6zm0 2h3v1h-3V8zm0 2h3v1h-3v-1zm-7 1v9h9v-9H4z" />
  </svg>
);

export default function ProposedItinerary() {
  // Function to handle PDF download
  const handleDownload = () => {
    // In a real app, this would point to your actual PDF file
    const pdfUrl = '/path/to/itinerary.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'EU-Nigeria-Business-Itinerary.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-4xl mx-auto px-4 py-10"
      id='itinerary'
    >
      {/* Itinerary Section */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center font-poppins">
          Itinerary
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 font-poppins">
          This mission will be an excellent opportunity for European and
          Nigerian stakeholders to engage in collaborative dialogue, form
          business alliances, and build bridges across continents.
        </p>
      </motion.div>

      <div className="space-y-10">
        {itinerary.map((day, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-2xl shadow p-6"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3M16 7V3M3 11h18M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xl font-semibold font-poppins">{day.day}</p>
                <p className="text-sm text-gray-500 font-poppins">{day.date}</p>
              </div>
            </div>

            <div className="space-y-6 pl-6 border-l-4 border-blue-100">
              {day.activities.map((act, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <div className="absolute -left-[1.1rem] top-1 w-4 h-4 bg-blue-500 rounded-full shadow"></div>
                  <motion.div
                    className="bg-blue-50 p-4 rounded-xl"
                    whileHover={{ scale: 1.01 }}
                  >
                    {act.time && (
                      <div className="flex items-center gap-2 mb-1 text-sm text-gray-600">
                        <span className="text-blue-500 font-medium font-poppins">
                          {act.time}
                        </span>
                      </div>
                    )}
                    <h3 className="text-lg font-medium text-gray-800 font-poppins">
                      {act.title}
                    </h3>
                    {act.location && (
                      <div className="text-sm text-gray-500 mt-1 font-poppins">
                        Location: {act.location}
                      </div>
                    )}
                  </motion.div>

                  {/* special guests list */}
                  {day.special_guests && day.special_guests.length > 0 && (
                    <motion.div
                      className="mt-2 text-sm text-gray-500 font-poppins"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <strong>Special Guests:</strong>{' '}
                      {day.special_guests.join(', ')}
                    </motion.div>
                  )}

                  {/* participating ministries list */}
                  {day.participating_ministries &&
                    day.participating_ministries.length > 0 && (
                      <motion.div
                        className="mt-2 text-sm text-gray-500 font-poppins"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <strong>Participating Ministers:</strong>{' '}
                        {day.participating_ministries.join(', ')}
                      </motion.div>
                    )}

                  {/* participating missions list */}
                  {day.participating_missions &&
                    day.participating_missions.length > 0 && (
                      <motion.div
                        className="mt-2 text-sm text-gray-500 font-poppins"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <strong>Participating Missions:</strong>{' '}
                        {day.participating_missions.join(', ')}
                      </motion.div>
                    )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 flex justify-center gap-4"
        variants={itemVariants}
      >
        <motion.button
          onClick={handleDownload}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center gap-2 cursor-pointer bg-blue-600 font-poppins text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-blue-700 transition"
        >
          <PdfIcon />
          Download Itinerary
        </motion.button>

        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Link
            to={'/registration'}
            className="bg-[#003DB4] font-poppins cursor-pointer text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-blue-700 transition block"
          >
            Register Now
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
