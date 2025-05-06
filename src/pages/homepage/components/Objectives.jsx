import {
  Trade,
  Technology,
  Sustainable,
  B2B,
} from '../../components/svg/ObjectivesIcons.js';

const Objectives = () => {
  return (
    <div className="bg-[#F9FAFB] py-16 px-4 sm:px-8 md:px-16 lg:px-24 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-[#E87C00] mb-4 font-poppins">
            Key Objectives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
            Strategic actions to drive growth, collaboration,
            <br className="hidden sm:block" />
            and sustainable development.
          </p>
        </div>

        {/* Objectives Cards */}
        <div className="grid gap-6 mt-12 sm:grid-cols-2">
          <div className="bg-gray-50 px-6 py-16 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <B2B />
              <div>
                <h3 className="text-lg font-bold text-gray-800 font-poppins">
                  B2B & B2G Matchmaking
                </h3>
                <p className="mt-1 text-gray-600 text-sm font-poppins">
                  Facilitate B2B and B2G matchmaking to unlock mutual trade and
                  investment opportunities.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-6 py-16 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <Technology />
              <div>
                <h3 className="text-lg font-bold text-gray-800 font-poppins">
                  Technology & Digital Transformation
                </h3>
                <p className="mt-1 text-gray-600 text-sm font-poppins">
                  Support technology transfer and digital transformation,
                  especially in AI, agritech, and renewable energy.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-6 py-16 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <Trade />
              <div>
                <h3 className="text-lg font-bold text-gray-800 font-poppins">
                  Trade Compliance & Partnerships
                </h3>
                <p className="mt-1 text-gray-600 text-sm font-poppins">
                  Advance trade compliance, knowledge exchange, and
                  institutional partnerships.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-6 py-16 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <Sustainable />
              <div>
                <h3 className="text-lg font-bold text-gray-800 font-poppins">
                  Sustainable Sectoral Growth
                </h3>
                <p className="mt-1 text-gray-600 text-sm font-poppins">
                  Promote sustainable growth across sectors including
                  agriculture, energy, infrastructure, and education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
