import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const ViewCoffee = () => {
  const params = useParams()
  console.log(params._id)

  const [coffee, setCoffee] = useState([])

  // const coffee = {
  //   id: 6,
  //   name: "Decaf Coffee",
  //   chef: "Mr. Matrid",
  //   price: "890 Taka",
  //   image: "https://i.ibb.co.com/RTsCKRBg/4.png",
  // };

  useEffect(() => {
    fetch(`https://espresso-emporium-server-beryl.vercel.app/coffee/${params._id}`)
    .then(res => res.json())
    .then(data => {
      setCoffee(data)
    })
  },[])




  return (
    <div className="max-w-6xl mx-auto p-5">
      <Link to={"/"} className="flex items-center my-9 text-[#374151] text-3xl">
        <FaArrowLeft className="mr-3 " />
        Back to home
      </Link>

      <div className="flex items-center justify-between bg-[#F4F3F0] rounded lg:p-16 lg:gap-6  max-w-2xl mx-auto">
        <figure>
          <img src={coffee.photo} alt={coffee.name} className="" />
        </figure>
        <div className="w-2/3">
            <h1><span className="text-[#331a15]  font-bold text-3xl"> {coffee.name}</span></h1>
          <h2 className=" text-base font-semibold text-[#1B1A1A] font-raleway">
            Name:
            <span className="text-[#5C5B5B] font-raleway"> {coffee.name}</span>
          </h2>
          <h2 className="text-base font-semibold text-[#1B1A1A] font-raleway">
            chef:
             <span className="text-[#5C5B5B] font-normal"> {coffee.chef}</span>
          </h2>
          <h2 className="text-base font-semibold text-[#1B1A1A] font-raleway">
            Price:
             <span className="text-[#5C5B5B] font-normal"> {coffee.price}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ViewCoffee;
