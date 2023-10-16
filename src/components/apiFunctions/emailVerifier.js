import { useState } from "react";
import axios from "axios";
import "../styles/styles.css";

function EmailVerifier() {
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

        setEmailVerifier(`Status: ${status}, Result: ${result}, Score: ${score}`
          + " " +
          `Entered Email: ${email}`);
      })
  };

  return (
    <section>
      <div className="container">
        <div className="container-title">
          <h1>Email Verifier</h1>
        </div>
        <div className="container-text">
          <p>Verify any email.</p>
        </div>
        <form className="form" onSubmit={getEmailVerifier}>
          <p class="form-title">Uncover the validity of that email.</p>
          <input
            placeholder="Email"
            className="form-input"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <button className="form-submit">Verify Email</button>
        </form>
        <div className="container-result">{emailVerifier}</div>
      </div>
    </section>
  );
}

export default EmailVerifier;