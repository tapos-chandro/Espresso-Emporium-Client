import PropTypes from "prop-types"
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
  return (
    <div className="card card-side bg-[#F5F4F1] pr-7 shadow-xl items-center flex justify-between lg:p-6  ">
      <div className="flex items-center p-6 justify-between  w-full">
        <figure>
          <img src={coffee.image} alt={coffee.name} className="w-28 h-28" />
        </figure>
        <div className="w-2/3">
          <h2 className=" text-base font-semibold text-[#1B1A1A] font-raleway">
            Name:
            <span className="text-[#5C5B5B] font-raleway"> {coffee.name}</span>
          </h2>
          <h2 className="text-base font-semibold text-[#1B1A1A] font-raleway">
            chef:
            <span className="text-[#5C5B5B] font-normal">{coffee.chef}</span>
          </h2>
          <h2 className="text-base font-semibold text-[#1B1A1A] font-raleway">
            Price:
            <span className="text-[#5C5B5B] font-normal">{coffee.price}</span>
          </h2>
        </div>
      </div>
      <div className="grid lg:grid-cols-1">
        <button className="bg-[#D2B48C] p-2 rounded my-1">
          <Link to={""}>
            <AiFillEye className="text-sm text-white " />
          </Link>
        </button>

        <button className="bg-[#3C393B] p-2 rounded my-1">
          <Link to={`/update`}>
            <AiFillEdit className="text-sm text-white " />
          </Link>
        </button>

        <button
          // onClick={() => handleDelate(_id)}
          className="bg-[#EA4744] p-2 rounded my-1"
        >
          <AiFillDelete className="text-sm text-white " />
        </button>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.shape({
    chef: PropTypes.any,
    image: PropTypes.any,
    name: PropTypes.any,
    price: PropTypes.any
  })
}

export default CoffeeCard;
