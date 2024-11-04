"use client"; // This is a client component
import React, { useState, useMemo, ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { Profile } from "./ProfileData";
import { TestRun } from "./TestRun";
import { FunctionData } from "./FunctionData";
import { TestMetrics } from "./TestMetrics";
import { Stats } from "./Stats";
import { Version } from "./Version";
import { TestCase } from "./TestCase";
import { TestCaseSelector } from "./TestCaseSelector";
import { GitHostingSelector } from "./HostingSelector";
import { GitRepoSelector } from "./GitRepoSelector";

interface ReportSelectorProps {
  testCases: TestCase[];
  versions: Version[];
  testRuns: TestRun[];
}

interface ReportSelectorState {
  selectedTestCase: TestCase | null;
}

class ReportSelectorComponent extends React.Component<ReportSelectorProps, ReportSelectorState> {
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

class ProfileState extends Profile {}
class ProfileProps {}

class ProfileComponent extends React.Component<ProfileProps, ProfileState> {
  state: ProfileState = {
    // Initialize state as needed
    testCases: [{ name: "t1", file: "t1" }],
    versions: [],
    testRuns: []
  };

  prepareReport = () => {
    const reportSelector = new ReportSelectorComponent({
      testCases: this.state.testCases,
      versions: this.state.versions,
      testRuns: this.state.testRuns,
    });
    return reportSelector;
  };

  render() {
    // TO DO: implement rendering
    return <div>Profile</div>;
  }
}


function PerformanceAnalyzer() {
  const [getProfile, setProfile] = useState<Profile>({
    versions:[],
    testRuns:[],
    testCases:[
      {name:"test 1",file:"1"},
      {name:"tes2",file:"test"}
    ]
  });
  const [testCase,setTestCase] = useState<TestCase>();
  console.log(getProfile);
  console.log(getProfile?.testCases)
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Performance Analysis Dashboard</h1>

      <div className="mb-6">
	<GitHostingSelector/>
	<GitRepoSelector/>
	<TestCaseSelector/>
	
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Performance Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 w-full">

            {/* <LineChart
              id="first_chart"
              width={800}
              height={350}
              data={processedData?.chart()}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Ticks', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="v1"
                stroke="#8884d8"
                name="Version 1" />
            </LineChart> */}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Performance Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-4 text-left border-b bg-gray-50 font-medium">Function</th>
                  <th className="p-4 text-left border-b bg-gray-50 font-medium">Best Version</th>
                  <th className="p-4 text-left border-b bg-gray-50 font-medium">Worst Version</th>
                  <th className="p-4 text-left border-b bg-gray-50 font-medium">Average</th>
                  <th className="p-4 text-left border-b bg-gray-50 font-medium">Variance</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PerformanceAnalyzer;
