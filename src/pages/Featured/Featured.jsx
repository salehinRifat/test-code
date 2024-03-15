import { useEffect, useState } from 'react';
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import DataTable from 'react-data-table-component';
const Featured = () => {
    const [blogs, setBlogs] = useState([])
    const fetchBlogs = async () => {
        const response = await fetch('http://localhost:5000/blogs');
        const data = await response.json()
        return data;
    }

    const { data, isLoading, } = useQuery({
        queryKey: ['featured'],
        queryFn: fetchBlogs,

    })
    useEffect(() => {
        if (data) {
            const sortedData = data.sort((a, b) => b.long_description.length - a.long_description.length);
            setBlogs(sortedData.slice(0, 10))
        }
    }, [data])
    if (isLoading) {
        return <h1>Loading..</h1>
    }
    const columns = [
        {
            name: 'Index',
            width: '100px',
            selector: (row, index) => <h1>{index + 1}</h1>,
        },
        {
            name: 'Title',
            width: '500px',
            selector: row => <h1 className='text-lg'>{row.title}</h1>,

        },
        {
            name: 'Owner',
            selector: row => <h1 className='font-bold'>{row.userName}</h1>,
        },
        {
            name: 'Image',
            selector: row => <img src={row.userPhoto} alt="" className='w-12 h-12 rounded-full' />,
        }
    ]


    return (

        <div className='px-20 py-10'>
            <h1 className='text-2xl text-indigo-600 text-center py-10'>Our Featured Blog</h1>
            <DataTable
                columns={columns}
                data={blogs}
            />
        </div>
    );
};

export default Featured;