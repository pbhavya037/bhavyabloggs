import { Link } from "react-router-dom";

const Bloglist = ({ blogs, car }) => {

    return (
        <div className="blog-list">
            <h1><b>{car}</b></h1>
            {blogs.map((b) => (
                <div className="blog-preview" key={b.id}>
                    <Link to={`/blog/${b.id}`}>
                    <img src={b.url_1} alt="thumbnail"/>
                    <div className="Alpha">    
                        <h2>{b.title}</h2>
                        <p> <b> Written by {b.author} </b></p>
                    </div>
                    </Link>

                </div>
            ))}
        </div>
    );
}

export default Bloglist;