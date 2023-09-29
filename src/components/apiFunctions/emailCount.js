import { useState } from "react";
import axios from "axios";

function EmailCount() {
  const [emailCount, setEmailCount] = useState("");
  const [userDomain, setUserDomain] = useState("");

  //Email Count API Call
  const getEmailCount = () => {
    axios.get(`https://api.hunter.io/v2/email-count?domain=${userDomain}`)
      .then((response) => {
        //console.log(response.data);
        const emailCount = response.data.data;
        const total = emailCount.total;

        const domain = response.data.meta.params.domain;

        setEmailCount(`Total emails: ${total}`
          + " " +
          `Searched Site: ${domain}`);
      }
    );
  };

  return (
    <section>
      <div className="container">
        <div className="container-title">
          <h1>Email Count</h1>
        </div>
        <div className="container-text">
          <p>random text here random text here random text here random text here random text here random text here random text here random text here random text here random text here random text here random text here random text here random text here random text here</p>
        </div>
        <input
          type="text"
          placeholder="Domain"
          className="container-input"
          value={userDomain}
          onChange={(e) => setUserDomain(e.target.value)}
        />
        <button className="container-button" onClick={getEmailCount}>Email Count</button>
        <div className="container-result">{emailCount}</div>
      </div>
    </section>
  );
}

export default EmailCount;