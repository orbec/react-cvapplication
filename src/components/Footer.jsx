import githubLogo from "../assets/github-original.svg";
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
      </div>
    </footer>
  );
}
