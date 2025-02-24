

const CoffeeFeatures = () => {





  const features = [
    {
      id: 1,

      icon: 'https://i.ibb.co.com/bMKvMNhf/1.png',
      title: "Awesome Aroma",
      description:
        "You will definitely be a fan of the design & aroma of your coffee",
    },
    {
      id: 2,
      icon: 'https://i.ibb.co.com/MyScMJLw/2.png',
      title: "High Quality",
      description: "We serve the coffee to you maintaining the best quality",
    },
    {
      id: 3,

      icon: 'https://i.ibb.co.com/S4903yLQ/3.png',
      title: "Pure Grades",
      description:
        "The coffee is made of the green coffee beans which you will love",
    },
    {
      id: 4,
      icon: 'https://i.ibb.co.com/Wv3j0wXX/4.png',
      title: "Proper Roasting",
      description:
        "Your coffee is brewed by first roasting the green coffee beans",
    },
  ];

  return (
    <div className="bg-[#f5f2eb] py-12 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {features.map(feature => (
          <div key={feature.id} className="flex flex-col items-center space-y-3">
            <div className="mb-3 ">
                <img src={feature.icon} alt={feature.title} />
                </div>
            <h3 className="text-4xl font-semibold text-brown-900">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600  font-raleway">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeFeatures;
