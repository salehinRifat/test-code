import { Link } from "react-router-dom";
import { BsFillCalendarHeartFill } from "react-icons/bs"
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";
const AllBlogCard = ({ blog }) => {
    const { user } = useContext(AuthContext)
    const { _id, title, image, short_description, long_description, category, email, date } = blog
    const date2 = new Date(date);

    const options = {
        month: "numeric",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date2);
    let handleWishList = () => {

        if (user) {
            const wishlist = { blogId: _id, title, image, short_description, long_description, category, email: user.email, date }
            axios.post('http://localhost:5000/wishlist', wishlist)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success('Added to Wishlist', {
                            position: "top-center",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                })
        } else {
            toast.error('Please Login')
        }
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
            <div>
                <div className="relative">
                    <img src={image} alt="" className="w-full h-[250px]" />
                    <div className="absolute bottom-0 bg-indigo-600 bg-opacity-50 w-full">
                        <h1 className="font-semibold text-lg text-white p-2">{title}</h1>
                    </div>
                </div>
                <div>
                    <h3 className="text-sm border border-indigo-600 inline-block my-2 px-1">{category}</h3>
                    <p>{short_description}</p>
                </div>
                <div className="flex justify-end text-sm">
                    <p>{formattedDate}</p>
                </div>
                <div className="flex justify-between pr-2 py-4">
                    <Link to={`/blogdetails/${_id}`}><p className="text-indigo-500 underline">Read More...</p></Link>
                    <p title="Add to Wishlitst" className="text-lg text-indigo-500 cursor-pointer"><BsFillCalendarHeartFill onClick={handleWishList}></BsFillCalendarHeartFill></p>
                </div>
            </div>
        </div>
    );
};

export default AllBlogCard;