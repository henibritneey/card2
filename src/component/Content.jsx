import './Content.css'
function Content({
  alumniname,
  role,
  company,
  completed,
  before,
  after,
  struggle,
  projects,
  salary,
  software,
  juniors
}) {

  return (
    <div className="card">
      <h2>
        From Site Engineer to Planning Engineer
      </h2>

      <h3>ALUMNI NAME:</h3>
      <p>{alumniname}</p>

      <h3>CURRENT ROLE:</h3>
      <p>{role}</p>

      <h3>COMPANY:</h3>
      <p>{company}</p>

      <h3>COMPLETED COURSE:</h3>
      <p>{completed}</p>

      <h3>BEFORE JOURNEY:</h3>
      <p>{before}</p>

      <h3>AFTER JOURNEY:</h3>
      <p>{after}</p>

      <h3>STRUGGLES FACED:</h3>
      <p>{struggle}</p>

      <h3>PROJECTS HANDLED:</h3>
      <p>{projects}</p>

      <h3>SALARY GROWTH:</h3>
      <p>{salary}</p>

      <h3>SOFTWARE SKILLS LEARNED:</h3>
      <p>{software}</p>

      <h3>ADVICE FOR JUNIORS:</h3>
      <p>{juniors}</p>

      <div className="btn-box">
        <button>Read Full Journey</button>
        <button className="connect-btn">
          Connect with Alumni
        </button>
      </div>

    </div>
  );
}

export default Content;