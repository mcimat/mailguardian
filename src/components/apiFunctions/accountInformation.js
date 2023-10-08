import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/styles.css";

function AccountInformation() {
  const [error, setError] = useState(null);
  const [AccountInformation, setAccountInformation] = useState("");

  //API KEY
  const KEY = "ebaec51e7fdde3fc15a0ab2dbfe22e0c3ea60d2e";

  useEffect(() => {
    getAccountInformation();
  }, []);

  //Account Information API Call
  const getAccountInformation = () => {
    axios.get(`https://api.hunter.io/v2/account?api_key=${KEY}`)
      .then((response) => {
        const { searches, verifications } = response.data.data.requests;
        const searchesUsed = searches.used;
        const searchesAvailable = searches.available;
        const verificationsUsed = verifications.used;
        const verificationsAvailable = verifications.available;

        setAccountInformation(`Searches-- Used: ${searchesUsed}, Available: ${searchesAvailable}`
          + " " +
          `Verifications-- Used: ${verificationsUsed}, Available: ${verificationsAvailable}`);
      })
      .catch((error) => {
        setError("We are currently running into technical issues. Please try again later.")
      });
  };

  return (
    <section>
      <div className="container">
        <div className="container-title">
          <h1 className="h1-color">Account Information</h1>
        </div>
        <div className="container-text">
          <p>Take a moment to examine the present allocation of monthly Searches and Verifications accessible for your account. It's important to be aware that this allocation is renewed each month, ensuring that you consistently have a refreshed quota of Searches and Verifications at your disposal to meet your needs and objectives.</p>
        </div>
        <div className="container-result">{AccountInformation}</div>
        <button className="container-button" onClick={getAccountInformation}>Refresh</button>
        {<p className="error-text">{error}</p>}
      </div>
    </section>
  );
}

export default AccountInformation;