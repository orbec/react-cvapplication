import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../Modal";
export default function Objective() {
  const [showModal, setShowModal] = useState(false);
  const [objective, setObjective] = useState(
    "You can edit your objective and professional profile here."
  );
  const handleModal = () => setShowModal(true);

  const handleCancel = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObjective = e.target.objective.value;
    setObjective(newObjective);

    setShowModal(false);
  };
  return (
    <section className="objective">
      <div>
        <h3>Objective</h3>
        <button className="edit" onClick={handleModal}></button>
      </div>
      <p>{objective}</p>
      {showModal &&
        createPortal(<div className="backdrop"></div>, document.body)}
      {showModal &&
        createPortal(
          <Modal
            modalId="editObjectiveModal"
            handleCancel={handleCancel}
            handleSubmit={handleSubmit}
          />,
          document.body
        )}
    </section>
  );
}
