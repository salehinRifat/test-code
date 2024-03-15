import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Auth Provider/AuthProvider";

const Login = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext)
    let handleSubmit = (e) => {
        e.preventDefault();
        let password = e.target.password.value;
        let email = e.target.email.value;
        signInUser(email, password)
            .then((userCredential) => {
                toast('Logged In Successfully')
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast(errorMessage)
            });
        e.target.reset();
    }
    let handleGoogleSignIn = () => {
        googleSignIn()
            .then((userCredential) => {
                toast('Logged In Successfully')
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast(errorMessage)
            });
    }
    return (
        <section className="bg-gray-50 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow shadow-indigo-500 md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Login
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="name@company.com"></input>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" required></input>

                            </div>
                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Log in</button>
                            <p className="text-sm font-light ">
                                New here? <Link to={"/register"}><button className="font-medium text-blue-600 hover:underline ">Register</button></Link>

                            </p>
                            <ToastContainer />
                        </form>
                        <button onClick={handleGoogleSignIn} className="text-white flex gap-1 items-center text-lg btn btn-sm btn-ghost border border-white hover:border-white"><FcGoogle className="text-2xl"></FcGoogle>Login</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;