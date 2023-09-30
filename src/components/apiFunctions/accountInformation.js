import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/styles.css";

function AccountInformation() {
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
        // console.log(response.data.data);
        const { searches, verifications } = response.data.data.requests;
        const searchesUsed = searches.used;
        const searchesAvailable = searches.available;
        const verificationsUsed = verifications.used;
        const verificationsAvailable = verifications.available;

        setAccountInformation(`Searches-- Used: ${searchesUsed}, Available: ${searchesAvailable}`
          + " " +
          `Verifications-- Used: ${verificationsUsed}, Available: ${verificationsAvailable}`);
      }
    );
  };

  return (
    <section>
      <div className="container">
        <div className="container-title">
          <h1>Account Information</h1>
        </div>
        <div className="container-text">
          <p>Check the current allocation of monthly Searches and Verifications available for this account. Please note that this allocation resets every month.</p>
        </div>
        <div className="container-result">{AccountInformation}</div>
        <button className="container-button" onClick={getAccountInformation}>Refresh</button>
      </div>
    </section>
  );
}

export default AccountInformation;