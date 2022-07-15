import { Link } from "react-router-dom";
const Notfound = () => {
    return ( 
        <div className="not-found">
            <h1>404</h1>
            <p>NOT FOUND</p>
            <Link to="/">To home page</Link>
        </div>
     );
}
 
export default Notfound;