import "../styles/Modal.css";
import { modalConfigurations } from "../utils/ModalConfs";

function FormGroup({ field }) {
  if (field.type === "select") {
    return (
      <div className="form-group tooltip">
        <select
          id={field.id}
          name={field.name}
          required={field.required}
          placeholder=" "
        >
          <Options options={field.options} />
        </select>
        <label htmlFor={field.id}>{field.label}</label>
        <span className="tooltip-text">{field.tooltip}</span>
      </div>
    );
  } else if (field.type === "textarea") {
    return (
      <div className="form-group tooltip">
        <textarea
          id={field.id}
          name={field.name}
          placeholder=" "
          required={field.required}
          maxLength="200"
        />
        <label htmlFor={field.id}>{field.label}</label>
        <span className="tooltip-text">{field.tooltip}</span>
      </div>
    );
  }
  return (
    <div className="form-group tooltip">
      <input
        type={field.inputType}
        id={field.id}
        name={field.name}
        placeholder=" "
        required={field.required}
        maxLength={field.inputType === "text" ? 100 : undefined}
      />
      <label htmlFor={field.id}>{field.label}</label>
      <span className="tooltip-text">{field.tooltip}</span>
    </div>
  );
}

function Options({ options }) {
  return (
    <>
      <option value="" disabled="true" selected="true" hidden="true" />
      {options.map((optionValue) => (
        <option key={optionValue.value} value={optionValue.value}>
          {optionValue.text}
        </option>
      ))}
    </>
  );
}

export default function Modal({ modalId, handleSubmit, handleCancel }) {
  const diagConf = modalConfigurations.find((modal) => modal.id === modalId);

  return (
    <dialog id={diagConf.id} open={true}>
      <h3>{diagConf.header}</h3>
      <form method="dialog" onSubmit={handleSubmit}>
        {diagConf.fields.map((field) => (
          <FormGroup key={field.id} field={field} />
        ))}
        <div className="dialog-buttons">
          <button type="button" id="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </dialog>
  );
}
