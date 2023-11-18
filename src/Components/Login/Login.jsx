import { NavLink } from "react-router-dom";
import { FaGithub, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useContext, useEffect, useRef, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
    const { signIn } = useContext(AuthContext);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password };
        console.log(user)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                alert('user login successfully')
            })
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;

        if (validateCaptcha(user_captcha_value) == true) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro | LogIn</title>
            </Helmet>

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
                    <div className="w-full mt-4">
                        <LoadCanvasTemplate />
                        <input
                            className="block w-full px-3 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            type="text"
                            ref={captchaRef}
                            placeholder="type the text above"
                            name="captcha" />
                        <button
                            onClick={handleValidateCaptcha}
                            className="btn btn-xs btn-outline m-2">Validate</button>
                    </div>
                </div>
                <div className="w-full max-w-sm mx-auto overflow-hidden bg-slate-50 rounded-lg shadow-md dark:bg-gray-800 pt-10 lg:mt-7 md:mt-5">
                    <div className="px-6 py-4">
                        <div className="flex justify-center mx-auto">
                            <h1 className='text-3xl font-semibold text-amber-500'>Bistro</h1>
                        </div>

                        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

                        <p className="mt-1 text-center text-gray-400 dark:text-gray-400">Login or create account</p>

                        <form onSubmit={handleLogIn}>
                            <div className="w-full mt-4">
                                <input
                                    required
                                    className="block w-full px-3 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="email"
                                    placeholder="Email Address"
                                    name="email" />
                            </div>

                            <div className="w-full mt-4">
                                <input
                                    required
                                    className="block w-full px-3 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    name="password" />
                                <div className="m-0.5" onClick={() => setShowPassword(!showPassword)}>
                                    <span className="text-blue-500 dark:text-blue-400 hover:underline cursor-pointer text-sm font-medium">{showPassword ? 'Hide Password' : 'Show Password'}</span>
                                </div>

                            </div>

                            <div className="flex items-center justify-center mt-4">
                                <button
                                    disabled={disable}
                                    type="submit"
                                    className="btn px-6 py-2 text-sm font-medium  text-white  bg-blue-500 rounded-lg hover:bg-blue-700">
                                    LogIn
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="flex items-center justify-center py-4 text-center bg-gray-200 dark:bg-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

                        <NavLink to='/signUp' className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</NavLink>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;