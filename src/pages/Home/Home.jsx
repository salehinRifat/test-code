import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Recent from "../../components/Recent/Recent";
import { useQuery } from "@tanstack/react-query";
import Newsletter from "../../components/Newsletter/Newsletter";
import Author from "../../components/Author/Author";

const Home = () => {
    const [recent, setRecent] = useState([])
    const fetchRecent = async () => {
        const response = await fetch(`http://localhost:5000/recent`);
        const data = await response.json()
        return data;
    }
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['recent'],
        queryFn: fetchRecent,

    })
    useEffect(() => {
        if (data) {
            setRecent(data)
        }
    }, [data])

    if (isLoading) {
        return <h1>Loading..</h1>
    }

    return (
        <div>
            <Banner></Banner>
            <h1 className="text-3xl pt-8 text-indigo-500 text-center">Recent Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 sm:px-16 py-10">
                {recent.map(recent => <Recent key={recent._id} recent={recent}></Recent>)}
            </div>
            <section className="py-10">
                <Author></Author>
            </section>
            <section className="pb-10">
                <Newsletter></Newsletter>
            </section>
            <section>
                <h1 className="text-3xl text-center py-10 text-indigo-600 font-bold">Upcoming Blogs</h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 px-10 sm:px-20 pb-16">
                    <div className="px-5 py-8 shadow-md border-2">
                        <h1 className="font-bolg text-lg my-2 p-1 bg-gray-300 ">Exploring Tech Marvels Around the World</h1>
                        <p className="text-gray-600">Explore how technology is shaping travel experiences, enhancing food industry practices, and revolutionizing the gaming world globally.</p>

                    </div>
                    <div className="px-5 py-8 shadow-md border-2">
                        <h1 className="font-bolg text-lg my-2 p-1 bg-gray-300">Culinary Adventures: Fusion Food Trends to Try</h1>
                        <p className="text-gray-600">Dive into the world of culinary fusion by exploring upcoming food trends that blend diverse cuisines.</p>
                    </div>
                    <div className="px-5 py-8 shadow-md border-2">
                        <h1 className="font-bolg text-lg my-2 p-1 bg-gray-300">Gaming Beyond Borders: Esports and International Tournament</h1>
                        <p className="text-gray-600">Explore the global phenomenon of esports and international gaming tournaments. </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;