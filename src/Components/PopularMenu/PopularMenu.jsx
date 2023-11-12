import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <div className="mb-12 mx-6">
            <div>
                <SectionTitle
                    subHeading={'Check it out'}
                    heading={'FROM OUR MENU'}>
                </SectionTitle>

                <div className="grid md:grid-cols-2 gap-10">
                    {
                        menu.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <div className="flex justify-center items-center m-10">
                    <button className="btn btn-outline text-yellow-500 border-b-4 border-0 backdrop-blur-2xl">View Full  Menu</button>
                </div>
            </div>
        </div>
    );
};

export default PopularMenu;