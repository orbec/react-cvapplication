import { useState } from "react";
import Modal from "../Modal";
export default function Skills() {
  const [showModal, setShowModal] = useState(false);
  const [skills, setSkills] = useState([]);
  const handleModal = () => setShowModal(true);

  const handleCancel = (e) => {
    e.preventDefault();

    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSkills = [...skills, e.target.skill.value];
    setSkills(newSkills);

    setShowModal(false);
  };
  return (
    <section className="skills">
      <div>
        <h3>Skills</h3>
        <button className="add" onClick={handleModal}></button>
      </div>

      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
      {showModal && (
        <Modal
          modalId="addSkillModal"
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
        />
      )}
    </section>
  );
}
