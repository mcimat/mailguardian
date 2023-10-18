import { useState } from "react";
import axios from "axios";
import "../styles/styles.css";

function EmailVerifier() {
  const [emailVerifier, setEmailVerifier] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // API KEY
  const KEY = "ebaec51e7fdde3fc15a0ab2dbfe22e0c3ea60d2e";

  // Email Verifier API Call
  const getEmailVerifier = (e) => {
    e.preventDefault();

    if (!userEmail) {
      alert("Email is empty. Please enter an email address.");
      return;
    }

    axios.get(`https://api.hunter.io/v2/email-verifier?email=${userEmail}&api_key=${KEY}`)
      .then((response) => {
        const emailVerify = response.data.data;
        setEmailVerifier(emailVerify);
        setFormSubmitted(true);
      });
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
        {formSubmitted && (
          <div className="container-result">
            <div className="result-box">
              <div className="result-name">
                <p className="result-bold">{emailVerifier.email}</p>
                <p className="result">Score: {emailVerifier.score}%</p>
              </div>
              <div className="result-data">
                <div className="rows">
                  <p className="result">Format: {emailVerifier.gibberish ? "Gibberish" : "Valid"}</p>
                  {emailVerifier.gibberish && <p>This email address is gibberish.</p>}
                  {!emailVerifier.gibberish && <p>This email address has the correct format and is not gibberish.</p>}
                </div>
                <div className="rows">
                  <p className="result">Type: {emailVerifier.webmail ? "Webmail" : "Professional"}</p>
                  {emailVerifier.webmail && <p>This is a webmail email address. This domain name is used to create personal email addresses.</p>}
                  {!emailVerifier.webmail && <p>The domain name isn't used for webmails or for creating temporary email addresses.</p>}
                </div>
                <div className="rows">
                  <p className="result">Server status: {emailVerifier.mx_records ? "Valid" : "Invalid"}</p>
                  {emailVerifier.mx_records && <p>MX records are present for the domain and we can connect to the SMTP server these MX records point to.</p>}
                  {!emailVerifier.mx_records && <p>MX records are not present for the domain, or we cannot connect to the SMTP server.</p>}
                </div>
                <div className="rows">
                  <p className="result">Email status: {emailVerifier.status}</p>
                  {emailVerifier.status ? (
                    emailVerifier.status === "accept_all" ? (
                      <p>This email address is linked to an accept-all domain. There is no definitive way to determine whether the email is valid or invalid.</p>
                    ) : (
                      <p>This email address exists and can receive emails.</p>
                    )
                  ) : (
                    <p>This email address can't receive emails.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default EmailVerifier;