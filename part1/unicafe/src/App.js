import { useState } from "react";

const Display = (props) => <p>{props.text}</p>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const Statistic = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = ((good - bad) / total).toFixed(1);
  const positive = (good / total * 100).toFixed(1);

  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    );
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + ' %'} />
      </tbody>
    </table>
  );
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  console.log('good:', good, 'neutral:', neutral, 'bad:', bad);

  return (
    <div>
      <Display text="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Display text="statistics" />
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;