import leadImage from "./images/lead.png";
import qualityImage from "./images/quality.png";
import recruitmentImage from "./images/recruitment.png";
import startupImage from "./images/startup.png";
import securityImage from "./images/security.png";
import "./styles/styles.css";

function Use() {
    return (
        <section>
            <div className="container">
                <div className="use-title">
                    <span>Who uses </span>
                    <span className="span-color">MailGuardian</span>
                    <span>?</span>
                </div>
            </div>
            <div className="container-use">
                <div className="use-card">
                    <div className="card-img">
                        <img src={qualityImage} alt="Quality Assurance" />
                    </div>
                    <div className="card-title">
                        <h2>Quality Assurance</h2>
                    </div>
                    <div className="card-desc">
                        <p>Enterprises that manage customer or contact databases can improve data quality and precision.</p>
                    </div>
                </div>
                <div className="use-card">
                    <div className="card-img">
                        <img src={recruitmentImage} alt="Recruitment" />
                    </div>
                    <div className="card-title">
                        <h2>Recruitment</h2>
                    </div>
                    <div className="card-desc">
                        <p>Find people integral to your success: from investors and influencers to first clients and team members.</p>
                    </div>
                </div>
                <div className="use-card">
                    <div className="card-img">
                        <img src={securityImage} alt="Security" />
                    </div>
                    <div className="card-title">
                        <h2>Security</h2>
                    </div>
                    <div className="card-desc">
                        <p>Security professionals can leverage features to proactively mitigate phishing risks during procedures.</p>
                    </div>
                </div>
                <div className="use-card">
                    <div className="card-img">
                        <img src={startupImage} alt="Startups" />
                    </div>
                    <div className="card-title">
                        <h2>Startups</h2>
                    </div>
                    <div className="card-desc">
                        <p>Resource-constrained startups can build contact lists for outreach and networking.</p>
                    </div>
                </div>
                <div className="use-card">
                    <div className="card-img">
                        <img src={leadImage} alt="Lead Generation" />
                    </div>
                    <div className="card-title">
                        <h2>Lead Generation</h2>
                    </div>
                    <div className="card-desc">
                        <p>Connect with clients effortlessly. Our powerful search simplifies finding the right person.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Use;