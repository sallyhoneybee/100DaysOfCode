const Results = (props) => {
  if (!props.results || props.results.length === 0) {
    return <p>No results to display.</p>;
  }

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((data, index) => (
          <tr key={index}>
            <td>{data.year}</td>
            <td>{data.savingsEndOfYear}</td>
            <td>{data.yearlyInterest}</td>
            <td>{data.totalInterest}</td>
            <td>{data.investedContribution}</td>
          </tr>
        ))}
        {/* <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td> */}
      </tbody>
    </table>
  );
};

export default Results;
