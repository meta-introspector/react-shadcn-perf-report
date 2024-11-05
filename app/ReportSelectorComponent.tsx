import React from "react";
import { ReportSelectorProps } from "./ReportSelectorProps";
import { ReportSelectorState } from "./ReportSelectorState";
import { TestCase } from "./TestCase";

export class ReportSelectorComponent extends React.Component<ReportSelectorProps, ReportSelectorState> {
  state: ReportSelectorState = {
    selectedTestCase: null,
  };

  handleSelectTestCase = (testCase: TestCase) => {
    this.setState({ selectedTestCase: testCase });
  };

  renderTests = () => {
    return (
      <div>
	{this.props.testCases.map((testCase, index) => (
	  <div key={index}>
	    <button onClick={() => this.handleSelectTestCase(testCase)}>
	      {testCase.name}
	    </button>
	  </div>
	))}
      </div>
    );
  };

  renderChart = () => {
    // TO DO: implement chart rendering
    return <div>Chart</div>;
  };

  renderReport = () => {
    // TO DO: implement report rendering
    return <div>Report</div>;
  };

  render() {
    return (
      <div>
	<h2>Tests</h2>
	{this.renderTests()}
	<h2>Chart</h2>
	{this.renderChart()}
	<h2>Report</h2>
	{this.renderReport()}
      </div>
    );
  }
}
