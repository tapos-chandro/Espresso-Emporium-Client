import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import InputForm from "../../components/InputForm";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateCoffeeForm = () => {
  const { _id } = useParams();

  const [formCoffeeData, setFormCoffeeData] = useState({
    name: "",
    chef: "",
    supplier: "",
    taste: "",
    category: "",
    details: "",
    photo: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "photo") {
      setFormCoffeeData({ ...formCoffeeData, photo: e.target.files[0] }); // Store the File object
    } else {
      setFormCoffeeData({ ...formCoffeeData, [e.target.name]: e.target.value });
    }
  };

  const handleUpdateCoffee = async (e) => {
    e.preventDefault();




    const formData = new FormData()
    formData.append('image', formCoffeeData.photo)

    try {

      const response = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_KEY}`,{
        method:'POST',
        body: formData,
      })

      const data = await response.json()
      
      console.log(data.data.url)

      const updateData = {...formCoffeeData, photo: data?.data?.url}


     fetch(`http://localhost:5000/updateCoffee`, {
        method: "PATCH",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(updateData)
      })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged === true){
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully Update",
              showConfirmButton: false,
              timer: 1500,
            });
        }
      })


      
      
    } catch (error) {
      console.log(error.message)
    }








    

  };





  useEffect(() => {
    fetch(`http://localhost:5000/coffee/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormCoffeeData({
          id: data._id || "",
          name: data.name || "",
          chef: data.chef || "",
          supplier: data.supplier || "",
          taste: data.taste || "",
          category: data.category || "",
          details: data.details || "",
          photo: data.photo || ""
        });
      });
  }, []);

  return (
    <div className="">
      <div className="container mx-auto my-12 px-5 max-w-6xl">
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
        <div className=" bg-[#F4F3F0] rounded md:p-16 p-5">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2  gap-6 font-raleway">
              {Object.keys(formCoffeeData).map((inputKey, index) => (
                <InputForm
                  key={index}
                  inputKey={inputKey}
                  handleChange={handleChange}
                  formData={formCoffeeData}
                ></InputForm>
              ))}
            </div>

            <div className="col-span-2 pt-6">
              <label htmlFor="photo" className="font-raleway text-gray-600">
                Photo
              </label>
              <br />
              <input
                type="file"
                name="photo"
                className="p-2 w-full bg-white border font-raleway text-gray-600 border-[#5351515f]"
                onChange={handleChange}
              />
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
