import { Link, } from "react-router-dom";
import { useContext, } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Auth Provider/AuthProvider";
import auth from "../../utils/firebase.init";
import { updateProfile } from "firebase/auth";
const Register = () => {
    const { createUser } = useContext(AuthContext)
    const passwordRegex = /^(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/;

    let handleSubmit = (e) => {
        e.preventDefault();
        let password = e.target.password.value;
        let name = e.target.name.value;
        let email = e.target.email.value;
        let url = e.target.url.value;

        let checkBox = e.target.checkbox.checked;
        console.log(passwordRegex.test(password));
        if (!passwordRegex.test(password)) {
            return toast('Please Add Capital letter, Special character and add more than 6 Character')
        }
        else if (!checkBox) {
            toast('Please Accept our terms and Conditions')
            return;

        }
        createUser(email, password)
            .then(result => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: url
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                toast('User Created Successfully')
                setTimeout(function () {
                    window.location.reload();
                }, 2000);
            })
            .catch(error => {
                toast(error.message)
            })

    }
    return (

        <div>
            <ToastContainer />
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow shadow-indigo-500 md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Create and account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
                                    <input required type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Your name"></input>
                                </div>
                                <div>
                                    <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900 ">Photo URL</label>
                                    <input required type="text" name="url" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="Photo URL"></input>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input required type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="Your Email"></input>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" required></input>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input name="checkbox" id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required=""></input>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500">I accept the <a className="font-medium text-blue-600 hover:underline " href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create an account</button>
                                <p className="text-sm font-light text-gray-500">
                                    Already have an account? <Link to={"/login"}><button className="font-medium text-blue-600 hover:underline ">Login here</button></Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;