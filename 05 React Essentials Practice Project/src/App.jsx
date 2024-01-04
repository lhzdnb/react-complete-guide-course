import UserInput from "./components/UserInput.jsx";
import Header from "./components/Header.jsx";
import ResultTable from "./components/ResultTable.jsx";
import { useState } from "react";
import { INVESTMENT, SECOND_ROW_DATA } from "./inputData.js";
import { calculateInvestmentResults } from "./util/investment.js";

function App() {
  const [annualData, setAnnualData] = useState({
    ...INVESTMENT,
    ...SECOND_ROW_DATA,
  });
  const investmentData = {
    initialInvestment: annualData.initialInvestment,
    annualInvestment: annualData.annualInvestment,
  };
  const secondRowData = {
    expectedReturn: annualData.expectedReturn,
    duration: annualData.duration,
  };
  function handleInputChange(event, label) {
    console.log(label);
    setAnnualData((prevValue) => {
      return { ...prevValue, [label]: Number(event.target.value) };
    });
  }

  const calcResult = calculateInvestmentResults(annualData);
  return (
    <>
      <Header />
      <UserInput
        investmentData={investmentData}
        secondRowData={secondRowData}
        handleInputChange={handleInputChange}
      />
      <ResultTable
        calcResult={calcResult}
        initialInvestment={annualData.initialInvestment}
      />
    </>
  );
}

export default App;
