import { useState } from 'react';
import orderCover from '../../assets/shop/banner2.jpg'
import Cover from '../Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    console.log(category)
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    return (
        <div>
            <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>
            <Cover img={orderCover} title={'Order Food'}></Cover>
            <div className="tabs tabs-lifted m-5">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soup</Tab>
                        <Tab>dessert</Tab>
                    </TabList>
                    <TabPanel> <OrderTab items={salad}></OrderTab></TabPanel>
                    <TabPanel><OrderTab items={pizza}></OrderTab></TabPanel>
                    <TabPanel><OrderTab items={soup}></OrderTab></TabPanel>
                    <TabPanel><OrderTab items={dessert}></OrderTab></TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;