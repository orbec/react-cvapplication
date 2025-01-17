import "../../styles/Bullets.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../Modal";
export default function Bullets({ header, modal }) {
  const [showModal, setShowModal] = useState(false);
  const [bullets, setBullets] = useState([]);
  const handleModal = () => setShowModal(true);

  const handleCancel = (e) => {
    e.preventDefault();

    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bullet = {
      id: crypto.randomUUID(),
      name: e.target.bullet.value,
    };
    const newBullets = [...bullets, bullet];
    setBullets(newBullets);

    setShowModal(false);
  };
  const handleDelete = (id) => () => {
    const newSkills = bullets.filter((skill) => skill.id !== id);
    setBullets(newSkills);
  };
  return (
    <section className="bullets">
      <div>
        <h3>{header}</h3>
        <button className="add" onClick={handleModal}></button>
      </div>

      <ul>
        {bullets.map((skill) => (
          <li key={skill.id} className="bullet">
            {skill.name}
            <button
              className="delete"
              onClick={handleDelete(skill.id)}
            ></button>
          </li>
        ))}
      </ul>
      {showModal &&
        createPortal(<div className="backdrop"></div>, document.body)}
      {showModal &&
        createPortal(
          <Modal
            modalId={modal}
            handleCancel={handleCancel}
            handleSubmit={handleSubmit}
          />,
          document.body
        )}
    </section>
  );
}
