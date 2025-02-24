import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import InputForm from "../../components/InputForm";
import Swal from "sweetalert2";

const AddCoffeeForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch("http://localhost:5000/addCoffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className=" mb-8">
        <div className="container mx-auto my-5 px-5 max-w-6xl ">
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
          <div className=" bg-[#F4F3F0] rounded md:p-16 lg:p-16 p-5">
            <h1 className="text-center text-[#374151] text-4xl">
              Add New Coffee
            </h1>
            <p className="text-center lg:text-lg font-raleway  my-5">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at
              <br /> its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed <br />
              to using Content here.
            </p>
            <form onSubmit={handleSubmit}>
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
              <div className="form-control w-full font-raleway mt-7">
                <input
                  type="submit"
                  value="Add Coffee"
                  className="btn bg-[#D2B48C] font-rancho text-2xl w-full text-[#331A15]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoffeeForm;
