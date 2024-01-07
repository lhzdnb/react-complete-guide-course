import InputGroup from "./InputGroup.jsx";

export default function UserInput({
  investmentData,
  secondRowData,
  handleInputChange,
}) {
  return (
    <section id="user-input">
      <InputGroup
        label={["INITIAL INVESTMENT", "ANNUAL INVESTMENT"]}
        inputValue={investmentData}
        handleInputChange={handleInputChange}
      />
      <InputGroup
        label={["EXPECTED RETURN", "DURATION"]}
        inputValue={secondRowData}
        handleInputChange={handleInputChange}
      />
    </section>
  );
}
