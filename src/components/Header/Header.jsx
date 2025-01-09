import "../../styles/Header.css";
import Name from "./Name";
import Role from "./Role";
import ProfileImg from "./ProfileImg";
export default function Header() {
  const img = "/user-svgrepo-com.svg";
  return (
    <header>
      <div>
        <Name />
        <Role />
      </div>
      <ProfileImg image={img} />
    </header>
  );
}
