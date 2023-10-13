import siteImage from './images/siteImage.png';

function Footer() {
    return (
        <section>
            <div className="container">
                <div className="container-footer">
                    <div className="footer-info">
                        <img src={siteImage} alt="MailGuardian Img" />
                        <p>Contact Us!</p>
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
                        <p>Privacy Popcy</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;