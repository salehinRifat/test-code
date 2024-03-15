import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const WishListCard = ({ blog, refetch }) => {
    const { blogId, title, image, short_description, long_description, category, email, _id, date } = blog
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
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/wishlist/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your wishlist has been deleted.",
                                icon: "success"
                            });
                            refetch(true);
                        }
                    })
            }
        });

    }
    return (
        <div>
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
                    <Link to={`/blogdetails/${blogId}`}><p className="text-indigo-500 underline">Read More...</p></Link>
                    <button className="btn btn-sm btn-outline text-red-600" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default WishListCard;