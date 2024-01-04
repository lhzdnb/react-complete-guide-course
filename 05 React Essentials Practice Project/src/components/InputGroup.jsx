import { convertLabelName } from "../inputData.js";
export default function InputGroup({ label, inputValue, handleInputChange }) {
  function returnLabelName(label) {
    return convertLabelName[label];
  }

  return (
    <div className="input-group">
      <p>
        <label>{label[0]}</label>
        <input
          type="number"
          required
          value={inputValue[returnLabelName(label[0])]}
          onChange={(event) => handleInputChange(event, label[0])}
        />
      </p>
      <p>
        <label>{label[1]}</label>
        <input
          type="number"
          required
          value={inputValue[returnLabelName(label[1])]}
          onChange={(event) => handleInputChange(event, label[1])}
        />
      </p>
    </div>
  );
}
