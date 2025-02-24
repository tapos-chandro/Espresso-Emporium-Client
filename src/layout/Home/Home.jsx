import Banner from "./Banner";
import CoffeeFeatures from "./CoffeeFeatures";
import Products from "./CoffeeCards";
import CoffeeGallery from "./CoffeeGallery";


const Home = () => {
    return (
        <div>
            <Banner/>
            <CoffeeFeatures/>
            <Products/>
            <CoffeeGallery/>
        </div>
    );
};

export default Home;