import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <div className=" text-white flex justify-center ">
                <div className=" bg-slate-700 w-1/2 text-center space-y-3 py-5">
                    <h3 className="text-2xl">CONTACT US</h3>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className=" bg-slate-900 w-1/2 text-center space-y-3 py-5">
                    <h3 className="text-2xl">Follow US</h3>
                    <p>Join us on social media</p>
                    <div className="flex justify-center space-x-3">
                        <FaFacebookF className="text-xl" />
                        <FaInstagram className="text-xl" />
                        <FaTwitter className="text-xl" />
                    </div>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-black text-white">
                <aside>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;