import { useQuery } from "@tanstack/react-query";
import AllBlogCard from "../../components/All Blog Card/AllBlogCard";
import { useEffect, useState } from "react";
const Allblogs = () => {
    const [blogs, setBlogs] = useState([])
    const fetchBlogs = async () => {
        const response = await fetch('http://localhost:5000/blogs');
        const data = await response.json()
        return data;
    }

    const { data, isLoading, } = useQuery({
        queryKey: ['blogs'],
        queryFn: fetchBlogs,

    })
    useEffect(() => {
        if (data) {
            setBlogs(data)
        }
    }, [data])
    if (isLoading) {
        return <h1>Loading..</h1>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.search.value.toLowerCase();
        const searchValue = blogs.filter(blog => blog.title.toLowerCase().includes(value))
        if (value) {
            setBlogs(searchValue)
        } else {
            setBlogs(data)
        }

    }
    const handleOptions = e => {
        e.preventDefault();
        const value = e.target.value
        const category = data.filter(blog => blog.category.toLowerCase().includes(value))
        if (value === 'all') {
            setBlogs(data)
        } else {
            setBlogs(category)
        }
    }
    return (
        <>
            <div className=" sm:px-16 px-8 ">
                <div className="mt-8 flex flex-col sm:flex-row justify-between">
                    <div className="mb-5 sm:mb-0">
                        <form onSubmit={handleSubmit} className="flex">
                            <input type="text" name="search" placeholder="Type here" className="input rounded-none input-bordered input-primary w-full max-w-xs" />
                            <button className="btn rounded-none" >Search</button>
                        </form>
                    </div>
                    <div className="">
                        <label htmlFor="category" className="">Category</label>
                        <select onChange={handleOptions} id="category" name="category" className="h-full rounded-md ml-2 bg-none py-2 pl-4 pr-9 text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                            <option className="font-semibold" value="all">All</option>
                            <option className="font-semibold" value="travel">Travel</option>
                            <option className="font-semibold" value="food">Food</option>
                            <option className="font-semibold" value="gaming">Gaming</option>
                            <option className="font-semibold" value="technology">Technology</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-10">
                    {blogs?.map((blog, idx) => <AllBlogCard blog={blog} key={idx}></AllBlogCard>)}
                </div>
            </div>
        </>
    );
};

export default Allblogs;