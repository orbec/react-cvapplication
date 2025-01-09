import githubLogo from "../assets/github-original.svg";
import linkedinLogo from "../assets/linkedin-plain.svg";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        Project developed for the purpose of learning React with Odin Project
        Course.
      </p>
      <div className="container links">
        <a href="https://github.com/orbec">
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/jairo-alonso-l-5970232a8">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}
