import { useState } from "react";
import axios from "axios";
import "../styles/styles.css";

function EmailVerifier() {
  const [emailVerifier, setEmailVerifier] = useState("");
  const [userEmail, setUserEmail] = useState("");

  //API KEY
  const KEY = "ebaec51e7fdde3fc15a0ab2dbfe22e0c3ea60d2e";

  //Email Verifier API Call
  const getEmailVerifier = (e) => {
    e.preventDefault()

    if (!userEmail) {
      alert("Email is empty. Please enter an email address.");
      return;
    }

    axios.get(`https://api.hunter.io/v2/email-verifier?email=${userEmail}&api_key=${KEY}`)
      .then((response) => {
        const emailVerify = response.data.data;

        setEmailVerifier(emailVerify);
      }
    );
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
          <p className="form-title">Uncover the validity of that email.</p>
          <input
            placeholder="Email"
            className="form-input"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <button className="form-submit">Verify Email</button>
        </form>
        <div className="container-result">
          <div className="result-box">
            <div className="continer-name">
              <span></span>
              <span className="result-bold">{emailVerifier.email}</span>
              <span className="result">{emailVerifier.score}</span>
            </div>
          </div>
          {/* <div className="result-data">
            <div className="rows">
              <p className="result">Server status: {emailVerifier.status}</p>
            </div>
            <div className="rows">
              <p className="result">Email status: {emailVerifier.result}</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default EmailVerifier;