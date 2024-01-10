/** @format */

import React from "react";
import { useState, useEffect } from "react";

function Codes() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/api/codes"
                );
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures that useEffect runs once when the component mounts

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="formContainer">
            <h3>Code Validation</h3>
            <div className="formWrapper">
                <h4 id="showCode"></h4>

                <input type="password" placeholder="Password"></input>
                <button>Validate!</button>

                <p id="showMessage"></p>
            </div>
        </div>
    );
}

export default Codes;
