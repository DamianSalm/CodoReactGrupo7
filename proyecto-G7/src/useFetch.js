import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const jsonData = await res.json();
                setData(jsonData);
            } catch (err) {
                console.error('Error al obtener datos: ', err);
            }
        };

        fetchData();
    }, []);

    return { data };
}

export default useFetch