import siteImage from './images/siteImage.png';

function Footer() {
    return (
        <section>
            <div className="container">
                <div className="container-footer">
                    <div className="footer-info">
                        <img src={siteImage} alt="MailGuardian Img" />
                        <li>Contact Us!</li>
                    </div>
                    <div className="footer-content">
                        <h4>MailGuardian</h4>
                        <li>Support</li>
                        <li>Blog</li>
                        <li>Become a Partner</li>
                    </div>
                    <div className="footer-content">
                        <h4>Tools</h4>
                        <li>Account Infomration</li>
                        <li>Email Count</li>
                        <li>Email Verifier</li>
                        <li>Email Finder</li>
                        <li>Domain Search</li>
                    </div>
                    <div className="footer-content">
                        <h4>Legal</h4>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;