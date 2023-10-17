import mailImage from './images/mail.png';
import "./styles/styles.css";

function Footer() {
    return (
        <section>
            <div className="container">
                <div className="container-footer">
                    <div className="footer-info">
                        <img src={mailImage} alt="MailGuardian Img" />
                    </div>
                    <div className="footer-content">
                        <h4>MailGuardian</h4>
                        <p>Support</p>
                        <p>Blog</p>
                        <p>Become a Partner</p>
                    </div>
                    <div className="footer-content">
                        <h4>Tools</h4>
                        <p>Email Verifier</p>
                        <p>Email Finder</p>
                        <p>Domain Search</p>
                    </div>
                    <div className="footer-content">
                        <h4>Legal</h4>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;