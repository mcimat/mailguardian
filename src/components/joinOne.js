import "./styles/styles.css";

function JoinOne() {
  return (
    <section>
      <div className="container">
        <div className="container-sentence">
          <span>We have validated and found over </span>
          <span className="span-color">100,000 emails </span>
          <span>for over </span>
          <span className="span-color">25,000 users </span>
          <span>in the past year.</span>
        </div>
        <div className="sentence-button">
          <button className="sentence-button">Join</button>
        </div>
      </div>
    </section>
  );
}

export default JoinOne;