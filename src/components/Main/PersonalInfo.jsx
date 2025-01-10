import { useState } from "react";
import "../../styles/PersonalInfo.css";
import Modal from "../Modal";
export default function PersonalInfo() {
  const [showModal, setShowModal] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    gender: "Gender",
    birthDate: "01/01/01/",
    phone: "555-5555",
    email: "example@example.com",
    webPage: "https://example.org/profile",
    country: "United States",
  });
  const handleModal = () => setShowModal(true);

  const handleCancel = (e) => {
    e.preventDefault();

    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = {
      gender: e.target.gender.value,
      birthDate: e.target.birthDate.value,
      phone: e.target.phone.value,
      email: e.target.emailAddress.value,
      webPage: e.target.webPage.value,
      country: e.target.country.value,
    };
    setPersonalInfo(person);

    setShowModal(false);
  };
  return (
    <section className="personal-info">
      <div>
        <h3>Personal Information</h3>
        <button className="edit" onClick={handleModal}></button>
      </div>
      <ul>
        <li className="gender">{personalInfo.gender}</li>
        <li className="birth-date">{personalInfo.birthDate}</li>
        <li className="phone">{personalInfo.phone}</li>
        <li className="email-address">{personalInfo.email}</li>
        <li className="web-page">{personalInfo.webPage}</li>
        <li className="country">{personalInfo.country}</li>
      </ul>
      {showModal && (
        <Modal
          modalId="editPersonalInfoModal"
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
        />
      )}
    </section>
  );
}
