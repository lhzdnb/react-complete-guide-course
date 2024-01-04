import UserInput from "./components/UserInput.jsx";
import Header from "./components/Header.jsx";
import ResultTable from "./components/ResultTable.jsx";
import { useState } from "react";
import { INVESTMENT, SECOND_ROW_DATA } from "./inputData.js";
import { calculateInvestmentResults } from "./util/investment.js";

function App() {
  const [inputData, setInputData] = useState({
    ...INVESTMENT,
    ...SECOND_ROW_DATA,
  });
  const investmentData = {
    initialInvestment: inputData.initialInvestment,
    annualInvestment: inputData.annualInvestment,
  };
  const secondRowData = {
    expectedReturn: inputData.expectedReturn,
    duration: inputData.duration,
  };

  const inputIsValid = inputData.duration > 0;

  function handleInputChange(event, label) {
    console.log(label);
    setInputData((prevValue) => {
      return { ...prevValue, [label]: Number(event.target.value) };
    });
  }

  const calcResult = calculateInvestmentResults(inputData);
  return (
    <>
      <Header />
      <UserInput
        investmentData={investmentData}
        secondRowData={secondRowData}
        handleInputChange={handleInputChange}
      />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && (
        <ResultTable
          calcResult={calcResult}
          initialInvestment={inputData.initialInvestment}
        />
      )}
    </>
  );
}

export default App;
