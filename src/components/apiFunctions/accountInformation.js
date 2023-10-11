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

        setAccountInformation(`Searches: ${searchesUsed} of ${searchesAvailable}`
          + ' ' +
          `Verifications: ${verificationsUsed} of ${verificationsAvailable}`);
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
        <div className="container-title">
          <h1>What is the Account Information tool?</h1>
        </div>
        <div className="container-info">
          <p>This tool is beneficial for viewing how many requests are available for both searches and verifications. Clicking the refresh button under the Account Information tab will not count as a request for either searches or verifications.</p>
          
          <h3>Is there a limit on the number of email searches/verifications I can perform a day?</h3>
          <p>There are no restrictions on the number of searches or verifications you can perform in a single day.</p>
          
          <h3>What happens if I exceed the limit of email address searches or verifications?</h3>
          <p>If the limit is exceeded, you won't be able to utilize that particular service until the start of the new month when the request limit resets.</p>

          <h3>Can I request an increase in my daily search/verification limit?</h3>
          <p>We currently do not offer the option to increase the monthly limit. However, please contact us for any special requests or business arrangements.</p>

        </div>
      </div>
    </section>
  );
}

export default AccountInformation;