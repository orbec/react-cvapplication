import "../../styles/Main.css";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Interests from "./Interests";
import Objective from "./Objective";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
export default function Main() {
  return (
    <div className="content">
      <aside>
        <PersonalInfo />
        <hr className="solid"></hr>
        <Skills />
        <hr className="solid"></hr>
        <Interests />
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
