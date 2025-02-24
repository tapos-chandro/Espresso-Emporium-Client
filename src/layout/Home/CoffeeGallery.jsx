import { Link } from 'react-router-dom';
import SectionTitle from './../../components/SectionTitle';
const CoffeeGallery = () => {
  const coffeeList = [
    "https://i.ibb.co.com/4g9C82fz/Rectangle-13.png",
    "https://i.ibb.co.com/0VRxDb3s/Rectangle-14.png",
    "https://i.ibb.co.com/FkLBR4zx/Rectangle-15.png",
    "https://i.ibb.co.com/cS3v2HGZ/Rectangle-16.png",
    "https://i.ibb.co.com/dYRfp8h/Rectangle-9.png",
    "https://i.ibb.co.com/5hnsqMzR/Rectangle-10.png",
    "https://i.ibb.co.com/wFvKypfz/Rectangle-11.png",
    "zhttps://i.ibb.co.com/ptPkx6c/Rectangle-12.png",
  ];

  return (
    <div className="container mx-auto">
     <SectionTitle title='Follow on Instagram' subTitle='Follow Us Now' />
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto lg:grid-cols-4 gap-6 mt-12 px-5">
        {coffeeList.map((coffee, index) => (
          <div key={index}>
            <Link to="">
            <img src={coffee} alt='' className="w-full h-full" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeGallery;
