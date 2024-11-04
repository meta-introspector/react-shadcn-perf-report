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
import {GenericListDefinitionSelector} from "./ListSelector";
import {GenericListDefinition} from "./GenericListDefinition";

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
    functions: [],
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
    functions: [],
    testRuns:[],
    testCases:[
      {name:"test 1",file:"1"},
      {name:"tes2",file:"test"}
    ]
  });
  const [testCase,setTestCase] = useState<TestCase>();
  console.log(getProfile);
  console.log(getProfile?.testCases);
  const calling_mode : GenericListDefinition = {
    listName : "calling_mode",
    title: 'Calling Mode',
    type: 'type unknown',    
    values: ["caller","callee"]
  };

  const consuming_mode : GenericListDefinition = {
    listName : "consuming_mode",
    title: 'Consuming Mode',
    type: 'type unknown',    
    values: ["creating","consuming"]
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Performance Analysis Dashboard</h1>
      <div className="mb-6">
	<GitHostingSelector/>
	<GitRepoSelector/>
	<TestCaseSelector/>

	<GenericListDefinitionSelector definition={{
	  listName : "Module",
	  title: 'Module',
	  type: 'Module',    
	  values: ["npm","os","rust","hw",
	    "react","next","aws","https","archive.org",
	    "wikimedia","huggingface", "ipfs", "aws-ssm-parameter", "etc"]
	}} default='rust'></GenericListDefinitionSelector>

  <span>Function: Function</span>
	<GenericListDefinitionSelector definition={calling_mode} default='caller'></GenericListDefinitionSelector>
	<GenericListDefinitionSelector definition={{
    listName : "consuming_mode",
    title: 'Consuming Mode',
    type: 'type unknown',    
    values: ["creating","consuming"]
  }} default='creating'></GenericListDefinitionSelector>

	<GenericListDefinitionSelector definition={{
	  listName : "Layer",
	  title: 'Layer',
	  type: 'type unknown',    
	  values: ["Hardware","OS","NodeJS","Application/Wasm/Rust","Application/Wasm/Ocaml","Networking","Application"]
	}} default='Application'></GenericListDefinitionSelector>

	<GenericListDefinitionSelector definition={{
	  listName : "category",
	  title: 'Category',
	  type: 'type unknown',    
	  values: ["Network","HTML","Crypto"]
	}} default='Crypto'></GenericListDefinitionSelector>

	<GenericListDefinitionSelector definition={{
	  listName : "count_type",
	  title: 'Count type',
	  type: 'type unknown',    
	  values: ["Self Only","With Children"]
	}} default='With Children'></GenericListDefinitionSelector>

	<GenericListDefinitionSelector definition={{
	  listName : "size_type",
	  title: 'Size type',
	  type: 'type unknown',    
	  values: ["Big","Small"]
	}} default='Big'></GenericListDefinitionSelector>
	<GenericListDefinitionSelector definition={{
	  listName : "speed_type",
	  title: 'Speed type',
	  type: 'type unknown',    
	  values: ["Fast","Slow"]
	}} default='Slow'></GenericListDefinitionSelector>
	<GenericListDefinitionSelector definition={{
	  listName : "time_phase_type",
	  title: 'Phase type',
	  type: 'type unknown',    
	  values: ["Beginning","Middle","End"]
	}} default='Middle'></GenericListDefinitionSelector>

	<GenericListDefinitionSelector definition={{
	  listName : "math_type",
	  title: 'Math type',
	  type: 'math type',    
	  values: [
	    "univalent foundations",
	    "homotopy",
	    "algebra",
	    "lattice",
	    "geometry",
	    "platonic solids",
	    "euclidian geometry",
	    "dupont's meta-meme introspector chronicles",// this is my project
	    "cartesian projection",
	    "cantor diagonalization",
	    "goedels numbering",
	    "peano sequencing",
	    "russels PM",
	    "freges begriffschrift",
	    "elliptic curves",
	    "group theory-fields",
	    "topology",
	    "density functions-probability",
	    "sine waves-trigonometry",
	    "comp sci -searching/sorting",
	    "algebra- linear",
	    "algebra- topology",
	  ]
	}}
	  default="univalent foundations"></GenericListDefinitionSelector>

	
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

	<GenericListDefinitionSelector definition={{
	  listName : "allocation_type",
	  title: 'Allocation type',
	  type: 'allocation',    
	  values: ["Resources","Time","Space","Space-Storage","Space-Memory","Space-Cache","Space-Register","Space-Bit","Space-Float","Compute","Compute-Multiply"]
	}} default='Compute'></GenericListDefinitionSelector>

		<GenericListDefinitionSelector definition={{
	  listName : "account_type",
	  title: 'Account type',
	  type: 'Account',    
		  values: ["Bank","Telephone","Power","Bitcoin","Mina","bittensor","aws","google","github",
		    "gitlab","sourceforce", "escrow"]
	}} default='Mina'></GenericListDefinitionSelector>


	<GenericListDefinitionSelector definition={{
	  listName : "data_source",
	  title: 'Data Source',
	  type: 'Source',    
	  values: ["Local","Browser","Node","Docker",
	    "Github Action","Gitlab Runner","aws s3","https","archive.org",
	    "wikimedia","huggingface", "ipfs", "aws ssm parameter"]
	}} default='Local'></GenericListDefinitionSelector>

      	<GenericListDefinitionSelector definition={{
	  listName : "data_process",
	  title: 'Data Process',
	  type: 'Operation',    
	  values: ["Import","Export","Share","Search","Sort","Visualize","Query","Optimize","Save","Profile","Verify"]
	}} default='Import'></GenericListDefinitionSelector>

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
