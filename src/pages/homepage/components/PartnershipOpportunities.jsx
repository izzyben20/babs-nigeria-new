const PartnershipCard = () => {
  return (
    <section className="flex flex-col lg:flex-row bg-gradient-to-br from-white to-gray-100 overflow-hidden max-w-7xl mx-auto lg:px-24 gap-6">
      <div className="lg:w-1/2 py-32 flex flex-col justify-center bg-white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 leading-tight font-poppins">
          Partnership Opportunities
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          {[
            'Agribusiness & Agro-processing',
            'Renewable Energy & Power',
            'Infrastructure & Construction',
            'Digital Economy & ICT',
            'Manufacturing & Industrialization',
            'Healthcare & Pharmaceuticals',
            'Education, Research & Skills Development',
            'Financial Services & Investment',
            'Creative Industries & Tourism',
            'Climate Action & Sustainability',
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start space-x-3 text-base md:text-lg bg-gradient-to-r from-green-50 via-white to-green-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100"
            >
              <span className="mt-1 text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.172 7.707 8.879a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-base leading-tight font-poppins">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:w-1/2 bg-white flex items-center h-64 lg:h-auto">
        <img
          src="/images/partnership_opportunities.png"
          alt="Partnership"
          className=""
        />
      </div>
    </section>
  );
};

export default PartnershipCard;
