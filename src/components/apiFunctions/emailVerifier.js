import { useState } from "react";
import axios from "axios";
import "../styles/styles.css";

function EmailVerifier() {
  const [error, setError] = useState(null);
  const [emailVerifier, setEmailVerifier] = useState("");
  const [userEmail, setUserEmail] = useState("");

  //API KEY
  const KEY = "ebaec51e7fdde3fc15a0ab2dbfe22e0c3ea60d2e";

  //Email Verifier API Call
  const getEmailVerifier = () => {
    axios.get(`https://api.hunter.io/v2/email-verifier?email=${userEmail}&api_key=${KEY}`)
      .then((response) => {
        const emailVerify = response.data.data;
        const status = emailVerify.status;
        const result = emailVerify.result;
        const score = emailVerify.score;
        const email = emailVerify.email;

        setEmailVerifier(`Status: ${status}, result: ${result}, Score: ${score}`
          + " " +
          `Entered email: ${email}`);
      })
      .catch((error) => {
        setError("Please enter an email address to verify.");
      });
  };

  return (
    <section>
      <div className="container">
        <div className="container-title">
          <h1>Email Verifier</h1>
        </div>
        <div className="container-text">
          <p>Have you ever found yourself questioning the authenticity of an email address? With an email verifier at your disposal, you can eliminate any doubts of an unknown emails validity.</p>
        </div>
        <input
          tpye="text"
          placeholder="Email"
          className="container-input"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <button className="container-button" onClick={getEmailVerifier}>Verify Email</button>
        {<p className="error-text">{error}</p>}
        <div className="container-result">{emailVerifier}</div>
      </div>
    </section>
  );
}

export default EmailVerifier;