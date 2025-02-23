import logo from "../assets/images/more/logo1.png";
const NavBar = () => {
  return (
    <div
      className={`bg-[url(https://i.ibb.co.com/jv27HZ8B/15.jpg)] bg-no-repeat bg-cover bg-center py-4`}
    >
     <div className='flex container mx-auto justify-center items-center'>
        <img
          src={logo}
          alt=''
          className='w-16 mr-3 '
        />
        <h1 className=' text-4xl text-white font-rancho'>Espresso Emporium</h1>
      </div>
    </div>
  );
};

export default NavBar;
