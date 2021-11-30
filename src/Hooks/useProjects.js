import { useEffect, useState } from "react";

export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    const [loaded, setLoaded] = useState(false);

    const url = process.env.PUBLIC_URL + './projects.json';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoaded(true);
            })
    }, [url]);

    return [projects, setProjects , loaded];

}