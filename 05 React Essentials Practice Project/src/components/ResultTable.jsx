import TableRow from "./TableRow.jsx";

export default function ResultTable({ annualData }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
          <TableRow annualData={annualData} />
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}
