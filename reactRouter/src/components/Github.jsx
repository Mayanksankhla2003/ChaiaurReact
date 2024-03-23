import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(props) {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         });
    // }, []);
    return (
        <div className="text-center bg-gray-500 text-4xl text-white p-10">
            Github Followers( Hitest Choudhary ): {data.followers}
            <img src={data.avatar_url} alt="Git Image" width={300} />
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch(
        "https://api.github.com/users/hiteshchoudhary"
    );
    return response.json();
};
