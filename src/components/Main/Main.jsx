import "../../styles/Main.css";
import PersonalInfo from "./PersonalInfo";
import Bullets from "./Bullets";
import Objective from "./Objective";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
export default function Main() {
  return (
    <div className="content">
      <aside>
        <PersonalInfo />
        <hr className="solid"></hr>
        <Bullets header="Skills" modal="addSkillModal" />
        <hr className="solid"></hr>
        <Bullets header="Interests" modal="addInterestModal" />
      </aside>
      <main>
        <Objective />
        <hr className="solid"></hr>
        <Education />
        <hr className="solid"></hr>
        <WorkExperience />
        <hr className="solid"></hr>
        <Bullets header="Certifications" modal="addCertificationModal" />
      </main>
    </div>
  );
}
