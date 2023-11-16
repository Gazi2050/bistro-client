import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && <Cover img={img} title={title} ></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center items-center m-1">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline text-yellow-400 border-b-4 border-0 bg-black hover:bg-yellow-400 hover:text-black">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;