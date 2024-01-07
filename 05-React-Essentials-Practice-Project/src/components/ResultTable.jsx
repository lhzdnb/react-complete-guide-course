import TableBody from "./TableBody.jsx";

export default function ResultTable({ calcResult, initialInvestment }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <TableBody
        calcResult={calcResult}
        initialInvestment={initialInvestment}
      />
      <tbody></tbody>
    </table>
  );
}
