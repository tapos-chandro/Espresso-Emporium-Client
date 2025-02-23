import PropTypes from "prop-types"
import { BsCup } from "react-icons/bs";
import { Link } from "react-router-dom";

const SectionTitle = ({title, subTitle, linkText = null}) => {
  return (
    <div className="text-center mt-28">
      <span className="text-xl text-[#1B1A1A] font-Raleway">
        {subTitle}
      </span>
      <h1 className="text-5xl text-[#331A15]">{title}</h1>
{     linkText && <Link to={linkText}>
        <button className="bg-[#E3B577] px-6 py-1 border-2 border-[#331A15] rounded mt-4  btn text-white text-2xl">
          Add Coffee
          <BsCup className="text-[#331A15]" />
        </button>
      </Link>}
    </div>
  );
};

SectionTitle.propTypes = {
  linkText: PropTypes.any,
  subTitle: PropTypes.any,
  title: PropTypes.any
}

export default SectionTitle;
