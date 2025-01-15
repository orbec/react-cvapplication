import "../../styles/Main.css";
import PersonalInfo from "./PersonalInfo";
import Bullets from "./Bullets";
import Certifications from "./Certifications";
import Objective from "./Objective";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
export default function Main() {
  return (
    <div className="content">
      <aside>
        <PersonalInfo />
        <hr className="solid"></hr>
        <Bullets header="Skills" />
        <hr className="solid"></hr>
        <Bullets header="Interests" />
      </aside>
      <main>
        <Objective />
        <Education />
        <WorkExperience />
        <Certifications />
      </main>
    </div>
  );
}
