import { Link } from 'react-router-dom';

const ParticipationDetails = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 px-4">
      {/* Participation Card */}
      <div className="bg-gradient-to-br from-[#003DB4]/10 to-[#0066FF]/10 rounded-2xl shadow-sm overflow-hidden border border-gray-100 font-sans">
        {/* Header */}
        <div className="bg-white py-6 px-6 text-center border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Participation Details
          </h2>
          <p className="text-gray-600 mt-2">
            Everything you need to know about joining the mission
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 p-6 bg-white/50">
          {/* Fees Section */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-[#003DB4]/10 p-3 rounded-lg mr-4">
                <svg
                  className="w-6 h-6 text-[#003DB4]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Participation Fee
                </h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-700">
                      Individual Delegates
                    </p>
                    <p className="text-2xl font-bold text-[#003DB4]">€750</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-700">
                      Corporate Delegates
                    </p>
                    <p className="text-2xl font-bold text-[#003DB4]">€1300</p>
                    <p className="text-sm text-gray-500 mt-1">
                      (Company delegate of 2 persons)
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    This fee covers registration, visa application support, and
                    on-ground transportation in Nigeria throughout the mission.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Accommodation & Travel */}
          <div className="space-y-6">
            {/* Accommodation */}
            <div className="flex items-start">
              <div className="bg-[#003DB4]/10 p-3 rounded-lg mr-4">
                <svg
                  className="w-6 h-6 text-[#003DB4]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Accommodation
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    While accommodation is not included in the participation
                    fee, we recommend delegates stay in a 4-star hotel, where
                    the average nightly rate is approximately{' '}
                    <span className="font-bold text-[#003DB4]">€100</span>.
                  </p>
                  <p className="text-gray-700 mt-2">
                    We have a blocked rate with the hotel and would share the
                    hotel name upon request.
                  </p>
                </div>
              </div>
            </div>

            {/* Travel */}
            <div className="flex items-start">
              <div className="bg-[#003DB4]/10 p-3 rounded-lg mr-4">
                <svg
                  className="w-6 h-6 text-[#003DB4]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7l4-4m0 0l4 4m-4-4v18m-7-4l3 3m0 0l3-3m-3 3V4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Travel Arrangements
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    We will provide support with visa arrangements from the
                    Nigerian Embassy in Belgium and will coordinate airport
                    pickups for all delegates.
                  </p>
                  <p className="text-gray-700 mt-2 font-medium">
                    Expected arrival date:{' '}
                    <span className="text-[#003DB4]">Sunday, May 25th</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 py-4 px-6 text-center border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            Need more information?{' '}
            <Link
              to="/contact-us"
              className="text-[#003DB4] font-medium hover:underline"
            >
              Contact our team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParticipationDetails;
