import React from "react";
import { useParams } from "react-router-dom";

function User(props) {
    const { userId } = useParams();
    return (
        <div className="h-[500px] text-center text-5xl bg-gray-500 text-white p-10">
            User: {userId}
        </div>
    );
}

export default User;
