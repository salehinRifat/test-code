import { useContext } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const AddBlogs = () => {
    const { user } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const image = e.target.imgurl.value;
        const shortdes = e.target.shortdes.value;
        const category = e.target.category.value;
        const longdes = e.target.longdes.value;
        const email = user.email;
        const date = new Date();
        const userName = user.displayName;
        const userPhoto = user.photoURL;
        const newBlog = { title, image, short_description: shortdes, category, long_description: longdes, email, date, userName, userPhoto }
        axios.post('http://localhost:5000/blogs', newBlog, { withCredentials: true })
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Blog Added Successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
    }
    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="isolate bg-white px-6 py-10 sm:py-16 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">Add Blogs</h2>
                </div>
                <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">Title</label>
                            <div className="mt-2.5">
                                <input type="text" name="title" id="title" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="imgurl" className="block text-sm font-semibold leading-6 text-gray-900">Image Url</label>
                            <div className="mt-2.5">
                                <input type="url" name="imgurl" id="imgurl" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="shortdes" className="block text-sm font-semibold leading-6 text-gray-900">Short Description</label>
                            <div className="mt-2.5">
                                <input type="text" name="shortdes" id="shortdes" autoComplete="organization" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <div className="mt-2.5">
                                <div className=" flex items-center">
                                    <label htmlFor="category" className="font-bold">Category</label>
                                    <select id="category" name="category" className="h-full rounded-md border-1 ml-2 bg-none py-2 pl-4 pr-9 text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                        <option className="font-semibold">Travel</option>
                                        <option className="font-semibold">Food</option>
                                        <option className="font-semibold">Gaming</option>
                                        <option className="font-semibold">Technology</option>
                                    </select>
                                    <svg className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="longdes" className="block text-sm font-semibold leading-6 text-gray-900">Long Description</label>
                            <div className="mt-2.5">
                                <textarea name="longdes" id="longdes" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                        </div>

                    </div>
                    <div className="mt-10">
                        <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlogs;