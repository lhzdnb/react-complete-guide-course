import { formatter } from "../util/investment.js";

export default function TableBody({ calcResult, initialInvestment }) {
  return (
    <tbody>
      {calcResult.map((data, index) => {
        let totalInterest = 0;
        for (let i = 0; i <= index; i++) {
          totalInterest += calcResult[i].interest;
        }
        return (
          <tr key={index}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>
              {formatter.format(
                initialInvestment + (index + 1) * data.annualInvestment,
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
