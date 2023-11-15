import { useState } from 'react';
import orderCover from '../../assets/shop/banner2.jpg'
import Cover from '../Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
const Order = () => {
    const [tabindex, setTabindex] = useState(0);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Cover img={orderCover} title={'Order Food'}></Cover>
            <div className="tabs tabs-lifted">
                <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
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