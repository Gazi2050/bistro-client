import Banner from "../Banner/Banner";
import Category from "../Category/Category";


const Home = () => {
    return (
        <div>
            {/* <h1 className='text-center text-4xl font-bold'>This is Home</h1> */}
            <Banner></Banner>
            <Category></Category>
        </div>
    );
};

export default Home;