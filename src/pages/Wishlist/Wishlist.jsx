import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import WishListCard from "../../components/WishlistCard/WishListCard";
import { AuthContext } from "../../Auth Provider/AuthProvider";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([])
    const { user } = useContext(AuthContext)
    const fetchBlogs = async () => {
        const response = await fetch(`http://localhost:5000/wishlist?email=${user?.email}`, { credentials: 'include' });
        const data = await response.json()
        return data;
    }
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: fetchBlogs,

    })
    useEffect(() => {
        if (data) {
            setWishlist(data)
        }
    }, [data])

    // if (isLoading) {
    //     return <h1>Loading..</h1>
    // }
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 py-10 px-8 md:px-16">
            {wishlist.length == 0 ? <h1 className="py-30 text-xl text-indigo-500 text-center">You haven't added Wisthlist Yet</h1> : wishlist?.map(blog => <WishListCard key={blog._id} blog={blog} refetch={refetch}></WishListCard>)}
        </div>
    );
};

export default Wishlist;