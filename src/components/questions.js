function Questions() {
  return (
    <section>
      <div className="container">
        <div className="container-title">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="container-questions">
          <div className="questions-content">
            <h2>Do we retain information about emails searched for?</h2>
            <p>Rest assured, we have implemented stringent measures to protect your privacy. As a result, we do not retain any records of the emails you've searched for. Your search activities are treated with the utmost confidentiality and are not stored in any form, ensuring that your experience on our platform remains completely private and secure.</p>
          </div>
          <div className="questions-content">
            <h2>How reliable is the MailGuardians email verification system?</h2>
            <p>Our email verification system boasts exceptional accuracy, delivering a confidence score that reflects the system's level of certainty regarding the authenticity of the provided email address.</p>
          </div>
          <div className="questions-content">
            <h2>Does MailGuardian require specific browsers to access your service?</h2>
            <p>We've worked diligently to ensure that your experience remains smooth and consistent, regardless of the device or browser you choose. Our responsive design and cross-browser compatibility mean that you can access our service using popular browsers like Chrome, Firefox, Safari, Edge, and many others. We strive to provide a seamless and hassle-free experience for all our users, regardless of their device or browser preferences.</p>
          </div>
          <div className="questions-content">
            <h2>Is there a limit on the number of email searches/verifications I can perform a day?</h2>
            <p>There are no restrictions on the number of searches or verifications you can perform in a single day. However, please note that under the 'Account Information' tab, if the 'Used' count matches the 'Available' count, you won't be able to utilize that particular service until the start of the new month when the request limit resets.</p>
          </div>
          <div className="questions-content">
            <h2>How does MailGuardian work?</h2>
            <p>MailGuardian leverages the power of the Hunter API, a robust tool renowned for its accuracy in email verification and search functionalities. This integration allows us to tap into a vast database of email addresses, domains, and associated data.</p>
          </div>
          <div className="questions-content">
            <h2>Does MailGuardian work on mobile devices?</h2>
            <p>Absolutely, MailGuardian is designed to seamlessly function on mobile devices. It operates as a web-based tool, eliminating the need for any installations. All that's required is an internet connection, allowing you to effortlessly access MailGuardian from any web browser on your mobile device.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;