// import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";


const Home = () => {
   

    const {data: blogs,vdata: vlog, isPend, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {isPend && <p>Loading...</p>}
            {error && <p>{ error }</p>}
            {vlog && <Bloglist blogs={vlog} car="All Blogs" />}
            {/* {blogs && <Bloglist blogs={blogs.filter((blog) => (blog.author === 'Nitin'))} car="Nitin's Blogs" />} */}
        </div>
    );
}

export default Home;