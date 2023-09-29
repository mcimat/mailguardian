import { useState } from "react";
import axios from "axios";
import "../styles/styles.css";

function DomainSearch() {
  const [domainSearch, setDomainSearch] = useState("");
  const [userDomain, setUserDomain] = useState("");

  //API KEY
  const KEY = "ebaec51e7fdde3fc15a0ab2dbfe22e0c3ea60d2e";

  //Domain Search API Call
  const getDomainSearch = () => {
    axios.get(`https://api.hunter.io/v2/domain-search?domain=${userDomain}&api_key=${KEY}`)
      .then((response) => {
        //console.log(response.data);
        // const { data, meta }  = response.data;
        const domainSearch = response.data.data;
        const domain = domainSearch.domain;
        const organization = domainSearch.organization;
        const industry = domainSearch.industry;

        //let email = 

        setDomainSearch(`Domain: ${domain}, Organization: ${organization}, Industry: ${industry}`);
      }
    );
  };

  return (
    <section>
      <div className="container">
        <div className="container-title">
          <h1>Domain Search</h1>
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
        <button className="container-button" onClick={getDomainSearch}>Email Count</button>
        <div className="container-result">{domainSearch}</div>
      </div>
    </section>
  );
}

export default DomainSearch;