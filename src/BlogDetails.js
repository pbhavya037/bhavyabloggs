import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const Blogdetails = () => {
    const { id } = useParams();
    const { vdata: vlog, isPend, error } = useFetch('http://localhost:8000/blogs/' + id);
    const hist = useHistory();
    const actPre = () => {
        hist.go(-1);
    }
    
    return (
        <div className="blog-details">
            {isPend && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {vlog && (
                <div>
                    <article>
                        <h2>{vlog.title}</h2>
                        <p> <em> Written by {vlog.author}</em></p>
                        <br />
                        {/* <div className="blg_part">  */}
                        {/* <img src={img1} alt="photo"  /> */}
                        {/* </div> */}
                        {/* <br /> */}
                        <div>{vlog.body}</div>
                        <button onClick={() => actPre()}>Back</button>
                    </article>
                </div>
            )}

        </div>

    );
}

export default Blogdetails;