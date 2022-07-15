import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const Hist = useHistory();
    const [title,setTitle] = useState(''); 
    const [body,setBody] = useState(''); 
    const [author,setAuthor] = useState('Bhavya');
    const [isPend,setPend] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const blg = { title, body, author};
        setPend(true);
        fetch(('http://localhost:8000/blogs'),{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blg)
        }).then(() => {
            console.log("It Submited Properly")
            // Hist.go(-1);
            Hist.push('/');
            setPend(false);
        });

    }
    return ( 
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <label>Body</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Author</label>
                <select value = {author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Bhavya">Bhavya</option>
                    <option value="Nitin">Nitin</option>
                </select>
                {!isPend && <button>Add Blog</button>}
                {isPend && <button disabled>Adding...</button>}
              
            </form>
        </div>
     );
}
 
export default Create;