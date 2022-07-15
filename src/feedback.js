import { useState } from "react";



const Contactus = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [email, setEmail] = useState('');
    const [isPend,setPend] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const blg = { name, comment, email};
        setPend(true);
        fetch(('http://localhost:9000/Feedbacks'),{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blg)
        }).then(() => {
            console.log("It Submited Properly")
            alert("Submitted");
            setPend(false);
            window.location.reload(false);
        })

    }


    return (<div className="contact">
        <h2>Feedback</h2>
        <form onSubmit={handleSubmit} >
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <label>Message</label>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} required ></textarea>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            {!isPend && <button>Submit</button>}
            {isPend && <button disabled>Wait...</button>}

        </form>
            {/* <p>{name}</p>
            <p>{comment}</p>
            <p>{email}</p> */}

    </div>);
}

export default Contactus;