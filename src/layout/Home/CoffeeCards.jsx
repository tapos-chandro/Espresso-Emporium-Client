
import SectionTitle from "../../components/SectionTitle";
import CoffeeCard from "./CoffeeCard";

const CoffeeCards = () => {
  







  const coffeeData = [
    {
      id: 1,
      name: "Americano Coffee",
      chef: "Mr. Milan Paul",
      price: "890 Taka",
      image: "https://i.ibb.co.com/TD2vTW9s/5.png",
    },
    {
      id: 2,
      name: "Black Coffee",
      chef: "Mr. Martin Soderan",
      price: "890 Taka",
      image: "https://i.ibb.co.com/YT16RJWH/6.png",
    },
    {
      id: 3,
      name: "Espresso Coffee",
      chef: "Mrs. Malisha",
      price: "890 Taka",
      image: "https://i.ibb.co.com/KzswPfKn/1.png",
    },
    {
      id: 4,
      name: "Cappuccino Coffee",
      chef: "Mr. Arnold",
      price: "890 Taka",
      image: "https://i.ibb.co.com/0yV5kq4K/2.png",
    },
    {
      id: 5,
      name: "Macchiato",
      chef: "Mr. Matrid",
      price: "890 Taka",
      image: "https://i.ibb.co.com/QFKNH3QM/3.png",
    },
    {
      id: 6,
      name: "Decaf Coffee",
      chef: "Mr. Matrid",
      price: "890 Taka",
      image: "https://i.ibb.co.com/RTsCKRBg/4.png",
    },
  ];


  return (
    <div
      className={`bg-[url('https://i.ibb.co.com/qMGx1CLH/1.png')] bg-cover bg-no-repeat pb-12 h-screen`}
    >
      <SectionTitle
        title="Our Popular Products"
        subTitle="--- Sip & Savor ---"
        linkText="/addCoffee"
      />
          <div className=" py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {coffeeData.map( coffee => <CoffeeCard key={coffee.id} coffee={coffee} />)}
      </div>
    </div>
    </div>
  );
};

export default CoffeeCards;
