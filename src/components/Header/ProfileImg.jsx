import { useState } from "react";
//import profileIcon from "../../assets/user-svgrepo-com.svg";
export default function ProfileImg() {
  const [img, setImg] = useState("/user-svgrepo-com.svg");
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleHover = (e) => {
    e.target.style.opacity = e.type === "mouseenter" ? "0.9" : "1";
  };

  return (
    <>
      <label
        className="custom-file-upload"
        style={{ backgroundImage: `url(${img})` }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <input type="file" onChange={handleImageUpload} />
      </label>
    </>
  );
}
