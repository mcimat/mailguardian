import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Content() {
    const [info, setInfo] = useState("");

    const getInfo = () => {
        axios.get("https://api.hunter.io/v2/account?api_key=ebaec51e7fdde3fc15a0ab2dbfe22e0c3ea60d2e").then(
            (response) => { 
                console.log(response.data);
                setInfo(response.data.data.first_name + " " +response.data.data.last_name);
            }
        );
    };
  
    return (
        <div>
            <h1>Hello</h1>
            <button onClick={getInfo}> click me for info </button>
            {info}
        </div>
    );
  }

export default Content;