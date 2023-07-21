import React, { useState } from "react";

const Form = (props) => {
  const [inputValue, setInputValue] = useState({
    currentSavings: "",
    yearlySavings: "",
    expectedInterest: "",
    investmentDuration: "",
  });
  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(inputValue);
  };

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            name="currentSavings"
            onChange={inputChangeHandler}
            value={inputValue.currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            name="yearlySavings"
            onChange={inputChangeHandler}
            value={inputValue.yearlySavings}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            name="expectedInterest"
            onChange={inputChangeHandler}
            value={inputValue.expectedInterest}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            name="investmentDuration"
            onChange={inputChangeHandler}
            value={inputValue.investmentDuration}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
