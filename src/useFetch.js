import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [error,setError] = useState(null);
    const [data, setData] = useState(null);
    const [vdata, setVdata] = useState(data);
    const [isPend, setPend] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();
        // setTimeout(() => {
            fetch(url,{signal: abortCont.signal })
                .then(res => {
                    if(!res.ok){
                        throw Error("Failed to fetch data from the source");
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setVdata(data);
                    setPend(false);
                    setError(null);
                })
                .catch(err =>{
                    if(err.name === 'AbortError'){ 
                        console.log('fetch aborted')
                    }else{
                        setError(err.message);
                        setPend(false);
                    }
                    
                })
        // }, 200);


        return () => abortCont.abort();
    }, [url]);

    return { data, vdata, error, isPend};
}
 
export default useFetch;