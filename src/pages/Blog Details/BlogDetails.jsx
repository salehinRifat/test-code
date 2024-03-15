import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import Comments from "../../components/comment/Comments";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { motion, useScroll } from "framer-motion";
const BlogDetails = () => {
    const { scrollYProgress } = useScroll();
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const fetchBlogs = async () => {
        const response = await fetch(`http://localhost:5000/blogs/${id}`);
        const data = await response.json()
        return data;
    }
    const { data: blog, isLoading, } = useQuery({
        queryKey: ['blog'],
        queryFn: fetchBlogs,

    })

    const fetchCmt = async () => {
        const response = await fetch(`http://localhost:5000/comments/${id}`);
        const data = await response.json()
        return data;
    }

    const { data: comments, refetch } = useQuery({
        queryKey: ['comment'],
        queryFn: fetchCmt,

    })
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    const { _id, title, image, short_description, long_description, category, email, userName, userPhoto } = blog
    const handleComment = e => {
        e.preventDefault();
        const comment = e.target.comment.value;
        const blogId = _id;
        const userPhoto = user?.photoURL;
        const userName = user?.displayName;
        const newComment = { comment, blogId, userPhoto, userName }
        axios.post('http://localhost:5000/comments', newComment)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Comment Added Successfully', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",

                    });
                    refetch(true)
                }
            })

    }
    return (
        <>
            <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-[6px] bg-indigo-600 origin-[0%] z-10" />
            <div className="px-10 pb-16">
                <div className="py-5 flex flex-col gap-5 justify-center items-center">
                    <h1 className="text-3xl  py-5 ">{title}</h1>
                    <img src={image} alt="" className="w-[500px]" />
                    <p>{userName}</p>
                </div>
                <div className="px-5 sm:px-10">
                    <h1 className="text-gray-600 py-2 text-sm">{short_description}</h1>
                    <h1>{long_description}</h1>
                </div>
                <div className="px-10 mt-10">
                    {
                        user?.email == email && <Link to={`/updateblog/${id}`}><button className="btn btn-sm bg-indigo-500 text-white hover:bg-indigo-600">Update</button></Link>
                    }
                </div>
                <div className="mx-4 sm:mx-20">
                    <ToastContainer
                        position="top-center"
                        autoClose={1000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />

                    {
                        user?.email == email ? <h1 className="text-red-400 py-5 font-bold">Can not comment on own blog</h1> : <div>
                            <form onSubmit={handleComment}>
                                <h1>Write Your Comment</h1>
                                <textarea name="comment" id="comment" rows="4" className="block w-[300px] sm:w-[600px] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                {user ? <input type="submit" value="Comment" className="btn btn-primary btn-sm" /> : <h1 className="text-lg text-red-600">Please Login to comment</h1>}
                            </form>
                        </div>
                    }
                    <h1 className="pt-5">Comments</h1>
                    <Comments comments={comments}></Comments>
                </div>
            </div></>
    );
};

export default BlogDetails;