import "../../styles/Experience.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../Modal";
export default function Experience({ header, modal }) {
  const [showModal, setShowModal] = useState(false);
  const [experienceList, setExperienceList] = useState([]);
  const handleModal = () => {
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const work = {
      id: crypto.randomUUID(),
      company: e.target.company.value,
      title: e.target.title.value,
      date: e.target.dateRange.value,
    };
    const newExperienceList = [...experienceList, work];
    setExperienceList(newExperienceList);
    setShowModal(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  const handleDelete = (id) => () => {
    const newExperienceList = experienceList.filter((item) => item.id !== id);
    setExperienceList(newExperienceList);
  };
  return (
    <section className="experience">
      <div>
        <h3>{header}</h3>
        <button className="add" onClick={handleModal}></button>
      </div>
      <ul>
        {experienceList.map((item) => (
          <li key={item.id}>
            <div>
              <h4>{item.company}</h4>
              <h4>{item.date}</h4>
              <button
                className="delete"
                onClick={handleDelete(item.id)}
              ></button>
            </div>
            <p>{item.position}</p>
          </li>
        ))}
      </ul>
      {showModal &&
        createPortal(<div className="backdrop"></div>, document.body)}
      {showModal &&
        createPortal(
          <Modal
            modalId={modal}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
          />,
          document.body
        )}
    </section>
  );
}
