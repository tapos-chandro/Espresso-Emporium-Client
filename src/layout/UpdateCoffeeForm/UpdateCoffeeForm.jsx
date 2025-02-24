import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import InputForm from "../../components/InputForm";
import { useState } from "react";

const UpdateCoffeeForm = () => {

    const [formData, setFormData] = useState({
      name: "",
      chef: "",
      supplier: "",
      taste: "",
      category: "",
      details: "",
      photo: "",
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdateCoffee = (e) => {
      e.preventDefault();
      console.log(formData);
    };

  return (
    <div className="bg-add-coffee-bg bg-cover bg-no-repeat">
      <div className="container mx-auto my-12 px-5">
        <div>
          <button>
            <Link
              to={"/"}
              className="flex items-center my-9 text-[#374151] text-3xl"
            >
              <FaArrowLeft className="mr-3 " />
              Back to home
            </Link>
          </button>
        </div>
        <div className=" bg-[#F4F3F0] rounded p-16">
          <h1 className="text-center text-[#374151] text-4xl">
            Update Existing Coffee Details
          </h1>
          <p className="text-center lg:text-lg font-raleway my-8">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at
            <br /> its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed <br />
            to using Content here.
          </p>
          <form onSubmit={handleUpdateCoffee}>
            <div className="grid lg:grid-cols-2 gap-6 font-raleway">
              {Object.keys(formData).map((inputKey, index) => (
                <InputForm
                  key={index}
                  inputKey={inputKey}
                  handleChange={handleChange}
                  formData={formData}
                ></InputForm>
              ))}
            </div>

            <div className="form-control w-full font-Raleway mt-7">
              <input
                type="submit"
                value="Update Coffee"
                className="btn bg-[#D2B48C] w-full font-rancho text-2xl text-[#331A15]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffeeForm;
