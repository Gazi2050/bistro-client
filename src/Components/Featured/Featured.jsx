import SectionTitle from "../SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div style={{ backgroundImage: `url(${featuredImg})` }} className="bg-fixed">

            <div className="text-white hero-overlay bg-opacity-60 p-10">
                <SectionTitle
                    subHeading={'Check it out'}
                    heading={'Featured Item'}>
                </SectionTitle>
                <div className="md:flex justify-center items-center py-8 px-16 space-x-10">
                    <div>
                        <img className="rounded-lg" src={featuredImg} alt="" />
                    </div>
                    <div className="space-y-2">
                        <p>March 20, 2023</p>
                        <p className="uppercase">WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline text-yellow-300 border-b-4 border-0 backdrop-blur-2xl">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;