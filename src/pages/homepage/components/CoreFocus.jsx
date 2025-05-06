import {
  Trade,
  Technology,
  Energy,
  Agriculture,
} from '../../components/svg/CoreFocusIcons';

const CoreFocus = () => {
  const focusAreas = [
    {
      title: 'Trade & Investment Promotion',
      description:
        'Fostering global trade links, attracting investment, and boosting economic development.',
      icon: <Trade />,
    },
    {
      title: 'Technology & Digital Transformation',
      description:
        'Enabling innovation and accelerating digital solutions for future-ready ecosystems.',
      icon: <Technology />,
    },
    {
      title: 'Agriculture, Agribusiness & Rural Development',
      description:
        'Advancing sustainable farming, agritech, and empowering rural economies.',
      icon: <Agriculture />,
    },
    {
      title: 'Energy & Infrastructure Development',
      description:
        'Building resilient infrastructure and driving clean, reliable energy solutions.',
      icon: <Energy />,
    },
    {
      title: 'Knowledge Transfer & Capacity Building',
      description:
        'Empowering individuals and institutions through training, education, and knowledge exchange.',
      icon: <Energy />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto sm:px-6 lg:px-24 py-12 md:py-20">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-4xl font-bold text-[#128807] mb-4 font-poppins">
          Our Core Focus Areas
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
          Driving impactful growth across sectors that matter most.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {focusAreas.map((area, index) => (
          <div
            key={index}
            className="bg-white py-10 px-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 h-full"
          >
            <div className="flex items-center space-x-2 justify-center mb-4">
              <div>{area.icon}</div>
              <h3 className="text-xl font-semibold text-center text-[#128807] mb-3 font-poppins">
                {area.title}
              </h3>
            </div>
            <p className="text-gray-600 text-center leading-relaxed font-poppins">
              {area.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreFocus;
