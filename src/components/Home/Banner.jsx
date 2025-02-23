
const Banner = () => {
    return (
        <div className=' bg-[url(https://i.ibb.co.com/WYkfxLT/banner.png)] bg-no-repeat bg-bottom bg-cover '>
        <div className='container py-4 md:flex mx-auto'>
          <div className='md:w-1/2'></div>
          <div>
            <div className='  py-48 px-7'>
              <h1 className=' text-6xl text-white'>
                Would you like a Cup of Delicious Coffee?
              </h1>
              <p className='font-Raleway text-base text-white my-4 font-raleway'>
                It s coffee time - Sip & Savor - Relaxation in every sip! Get
                the nostalgia back!! Your companion of every moment!!! Enjoy the
                beautiful moments and make them memorable.
              </p>
              <button className='text-[#242222] bg-[#E3B577] py-2 px-5 text-2xl'>
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;