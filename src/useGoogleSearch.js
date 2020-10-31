import React, {useState, useEffect} from 'react'

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    const apiKey = "AIzaSyB99ZNIlkskRkm6Wm-jaeA56T4pLg5MHVQ";
    const searchEngineId = "f08a4a6ad4e9e939a";

    useEffect(() => {
        const getData = async() => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${term}`)
            .then(res => res.json())
            .then(result => {
                setData(result);
            })
        }
        getData();
    }, [term])

    return {data};
}

export default useGoogleSearch
