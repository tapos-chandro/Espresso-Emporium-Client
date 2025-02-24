import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
// import Swal from "sweetalert2";
import { useState } from "react";
import InputForm from "../../components/InputForm";

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
  };


  //     https://i.ibb.co/sW0xLZm/3.png
  // https://i.ibb.co/mbz4q97/4.png
  // https://i.ibb.co/T4DyqWX/5.png
  // https://i.ibb.co/kGQyx8d/6.png
  // https://i.ibb.co/12W3v9p/1.png
  // https://i.ibb.co/P50j8ng/2.png
//   const handleAddCoffee = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const chef = form.chef.value;
//     const supplier = form.supplier.value;
//     const taste = form.taste.value;
//     const category = form.category.value;
//     const details = form.details.value;
//     const photo = form.photo.value;
//     const coffee = { name, chef, supplier, taste, category, details, photo };
//     console.log(coffee);

//     fetch("http://localhost:5000/coffees", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(coffee),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.insertedId) {
//           Swal.fire({
//             position: "center",
//             icon: "success",
//             title: "Successfully added",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         }
//       });
//   };

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
          <div className=" bg-[#F4F3F0] rounded p-16">
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
                  <InputForm key={index} inputKey={inputKey} handleChange={handleChange} formData={formData}></InputForm>
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
