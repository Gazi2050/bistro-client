import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import { Helmet } from 'react-helmet-async';
import Cover from '../Cover/Cover';
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
// import PopularMenu from "../PopularMenu/PopularMenu";
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'our menu'} ></Cover>
            <div className='m-6 space-y-7'>
                <SectionTitle subHeading={"Don't miss"}
                    heading={"Today's Offer"}></SectionTitle>
                <MenuCategory items={offered}></MenuCategory>
                <MenuCategory items={dessert} title={'Dessert'} img={dessertImg}></MenuCategory>
                <MenuCategory items={pizza} title={'Pizza'} img={pizzaImg}></MenuCategory>
                <MenuCategory items={soup} title={'Soup'} img={soupImg}></MenuCategory>
                <MenuCategory items={salad} title={'Salad'} img={saladImg}></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;