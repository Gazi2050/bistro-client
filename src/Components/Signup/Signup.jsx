import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { HiOutlineLockClosed } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";




const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { createUser } = useContext(AuthContext);
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                alert('user signUp successfully')
            })
    };


    return (
        <>
            <Helmet>
                <title>Bistro | SignUp</title>
            </Helmet>
            <div className="flex flex-col-reverse lg:flex-row justify-around items-center lg:px-28">

                <div className="md:my-5 lg:my-3 w-full max-w-sm mx-auto overflow-hidden bg-slate-50 rounded-lg shadow-md dark:bg-gray-800 pt-10">
                    <div className="px-6 py-2">
                        <div className="flex justify-center mx-auto">
                            <h1 className='text-3xl font-semibold text-amber-500'>Bistro</h1>
                        </div>

                        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Create account</h3>

                        <p className="mt-1 text-center text-gray-400 dark:text-gray-400">It's quick and easy.</p>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="relative flex items-center mt-5">
                                <span className="absolute m-5 text-gray-400 text-xl">
                                    <FaRegUser />
                                </span>

                                <input
                                    {...register("name")}
                                    name="name"
                                    type="text"
                                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
                            </div>
                            <div className="relative flex items-center mt-4">
                                <span className="absolute m-5 text-gray-400 text-xl">
                                    <LuMail />
                                </span>

                                <input
                                    {...register("email", { required: true })}
                                    name="email"
                                    type="email"
                                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                            </div>
                            {errors.email && <span className="text-red-600 text-xs">This field is required</span>}
                            <div className="relative flex items-center mt-4">
                                <span className="absolute m-5 text-gray-400 text-xl">
                                    <HiOutlineLockClosed />
                                </span>

                                <input
                                    {...register("password", { required: true })}
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />

                            </div>
                            <div className="m-0.5" onClick={() => setShowPassword(!showPassword)}>
                                <span className="text-blue-500 dark:text-blue-400 hover:underline cursor-pointer text-sm font-medium">{showPassword ? 'Hide Password' : 'Show Password'}</span>
                            </div>
                            {errors.password && <span className="text-red-600 text-xs">This field is required</span>}
                            <div className="flex items-center justify-center my-2">
                                <button
                                    type="submit"
                                    className="btn px-6 py-2 text-sm font-medium  text-white  bg-blue-500 rounded-lg hover:bg-blue-700">
                                    SignUp
                                </button>
                            </div>
                        </form>

                    </div>
                    <div className="flex items-center justify-center py-4 text-center bg-gray-200 dark:bg-gray-700 w-full">
                        <span className="text-sm text-gray-600 dark:text-gray-200">
                            Already have an account?
                        </span>
                        <NavLink to='/login' className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">LogIn</NavLink>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Signup;