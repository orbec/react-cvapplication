import "../../styles/Skills.css";
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
    const skill = {
      id: crypto.randomUUID(),
      name: e.target.skill.value,
    };
    const newSkills = [...skills, skill];
    setSkills(newSkills);

    setShowModal(false);
  };
  const handleDelete = (id) => () => {
    const newSkills = skills.filter((skill) => skill.id !== id);
    setSkills(newSkills);
  };
  return (
    <section className="skills">
      <div>
        <h3>Skills</h3>
        <button className="add" onClick={handleModal}></button>
      </div>

      <ul>
        {skills.map((skill) => (
          <li key={skill.id} className="skill">
            {skill.name}
            <button
              className="delete"
              onClick={handleDelete(skill.id)}
            ></button>
          </li>
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
