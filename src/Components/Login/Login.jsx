import { NavLink } from "react-router-dom";
import { FaGithub, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-around items-center lg:px-28">
            <div>
                <div className="m-5 lg:m-0">

                    <p className="text-sm md:text-lg lg:text-xl font-semibold">
                        <sup>____________________</sup> Continue with <sup>____________________</sup>
                    </p>
                    <NavLink to="#" className="w-sm flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border border-gray-300 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <FcGoogle className="text-2xl" />
                        <span className="mx-2">Login with Google</span>
                    </NavLink>
                    <NavLink to="#" className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border border-gray-300 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <FaGithub className="text-2xl text-black" />
                        <span className="mx-2">Login with GitHub</span>
                    </NavLink>
                    <NavLink to="#" className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border border-gray-300 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <FaFacebook className="text-2xl text-blue-500" />
                        <span className="mx-2">Login with Facebook</span>
                    </NavLink>
                </div>
            </div>
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-slate-50 rounded-lg shadow-md dark:bg-gray-800 pt-10 lg:mt-7 md:mt-5">
                <div className="px-6 py-4">
                    <div className="flex justify-center mx-auto">
                        <h1 className='text-3xl font-semibold text-amber-500'>Explore</h1>
                    </div>

                    <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

                    <div>
                        <div className="w-full mt-4">
                            <input className="block w-full px-3 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="email" placeholder="Email Address" aria-label="Email Address" />
                        </div>

                        <div className="w-full mt-4">
                            <input className="block w-full px-3 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="password" placeholder="Password" aria-label="Password" />
                            <div className="mt-1">
                                <input className="m-1 form-checkbox h-4 w-4 text-blue-500" type="checkbox" name="" id="" />
                                <span className="text-blue-500 dark:text-blue-400">Remember me</span>
                            </div>

                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <NavLink to={'#'} className="text-sm text-gray-600 dark:text-gray-200 hover:text-blue-500 hover:underline">Forget Password?</NavLink>

                            <button className="btn px-6 py-2 text-sm font-medium  text-white  bg-blue-500 rounded-lg hover:bg-blue-700">
                                LogIn
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-200 dark:bg-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

                    <NavLink to='/signUp' className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;