import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import InputForm from "../../components/InputForm";
import Swal from "sweetalert2";

const AddCoffeeForm = () => {
  const [addData, setAddData] = useState({
    name: "",
    chef: "",
    supplier: "",
    taste: "",
    category: "",
    details: "",
    photo: "",
    price: ""
  });

  const handleChange = (e) => {
    if (e.target.name === "photo") {
      setAddData({ ...addData, photo: e.target.files[0] }); // Store the File object
      console.log(e.target.files[0])
    } else {
      setAddData({ ...addData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const formData = new FormData();
    formData.append("image", addData?.photo);


    try {
      // 🔹 Upload Image to ImgBB
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_KEY}`, {
        method: "POST",
        body: formData,
      });

      const imgData = await response.json();

      // 🔹 Send Data to Backend with ImgBB URL
      const updatedData = { ...addData, photo: imgData.data.url };

      fetch("http://localhost:5000/addCoffee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
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
            setAddData({    name: "",
              chef: "",
              supplier: "",
              taste: "",
              category: "",
              details: "",
              photo: "",
              price:""
            })
          }
        });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <div className="container mx-auto my-5 px-5 max-w-6xl">
          <div>
            <button>
              <Link to={"/"} className="flex items-center my-9 text-[#374151] text-3xl">
                <FaArrowLeft className="mr-3" />
                Back to home
              </Link>
            </button>
          </div>
          <div className="bg-[#F4F3F0] rounded md:p-16 lg:p-16 p-5">
            <h1 className="text-center text-[#374151] text-4xl">Add New Coffee</h1>
            <p className="text-center lg:text-lg font-raleway my-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at
              <br /> its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed <br />
              to using Content here.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="grid lg:grid-cols-2 gap-6 font-raleway">
                {Object.keys(addData).map((inputKey, index) => (
                  <InputForm key={index} inputKey={inputKey} handleChange={handleChange} formData={addData} />
                ))}
              </div>
              {/* File Input */}
              <div className="col-span-2 pt-6">
                <label htmlFor="photo" className="font-raleway text-gray-600">Photo</label>
                <br />
                <input
                  type="file"
                  name="photo"
                  className="p-2 w-full bg-white border font-raleway text-gray-600 border-[#5351515f]"
                  onChange={handleChange}
                />
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
