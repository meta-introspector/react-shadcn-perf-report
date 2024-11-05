"use client"; // This is a client component
import React, { useState, useReducer, useCallback, useMemo, ReactNode, useDeferredValue } from 'react';
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
import { Button } from '@/components/ui/button';

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

export interface GenericTable {
  [key:string]: string; // string->string association
}

export interface PerformanceReport {
  metadata: {
    timestamp: string;
    environment: string;
    dataSource: string;
  };
  configuration: {
    module: string;
    callingMode: string;
    layer: string;
    category: string;
    countType: string;
    sizeType: string;
    speedType: string;
    timePhaseType: string;
    languageType: string;
    mathType: string;
    allocationType: string;
    dataType: string;
    accountType: string;
  };
  analysis: {
    resourceUtilization: ResourceMetrics;
    performanceMetrics: PerformanceMetrics;
    recommendations: string[];
  };
}

interface ResourceMetrics {
  memory: number;
  cpu: number;
  networkCalls: number;
  storageUsage: number;
}

interface PerformanceMetrics {
  averageResponseTime: number;
  p95ResponseTime: number;
  p99ResponseTime: number;
  errorRate: number;
  throughput: number;
}

const analyzeConfigurations = (config: ReportState['configuration']) => {
  const recommendations: string[] = [];
  const resourceMetrics = calculateResourceMetrics(config);
  const performanceMetrics = calculatePerformanceMetrics(config);

  // Add recommendations based on configuration
  if (config.speedType === 'Slow' && config.sizeType === 'Big') {
    recommendations.push('Consider implementing pagination or lazy loading');
  }

  if (config.languageType === 'javascript' && config.allocationType === 'Compute') {
    recommendations.push('Consider using Web Workers for compute-intensive operations');
  }

  return {
    resourceUtilization: resourceMetrics,
    performanceMetrics: performanceMetrics,
    recommendations
  };
};

const calculateResourceMetrics = (config: ReportState['configuration']): ResourceMetrics => {
  // This would normally be based on actual measurements
  // Here we're just providing example calculations
  return {
    memory: config.sizeType === 'Big' ? 1024 : 256,
    cpu: config.speedType === 'Fast' ? 80 : 40,
    networkCalls: config.category === 'Network' ? 100 : 10,
    storageUsage: config.allocationType === 'Space-Storage' ? 5000 : 1000
  };
};

const calculatePerformanceMetrics = (config: ReportState['configuration']): PerformanceMetrics => {
  // This would normally be based on actual measurements
  const baseResponseTime = config.speedType === 'Fast' ? 100 : 300;
  
  return {
    averageResponseTime: baseResponseTime,
    p95ResponseTime: baseResponseTime * 1.5,
    p99ResponseTime: baseResponseTime * 2,
    errorRate: config.speedType === 'Fast' ? 0.1 : 0.5,
    throughput: config.speedType === 'Fast' ? 1000 : 500
  };
};

const generateReport = (state: ReportState): ReportState => {
  const { rawSelections } = state;
  
  // Convert raw selections to configuration
  const configuration = {
    module: rawSelections.Module || '',
    callingMode: rawSelections.calling_mode || '',
    layer: rawSelections.Layer || '',
    category: rawSelections.category || '',
    countType: rawSelections.count_type || '',
    sizeType: rawSelections.size_type || '',
    speedType: rawSelections.speed_type || '',
    timePhaseType: rawSelections.time_phase_type || '',
    languageType: rawSelections.language_type || '',
    mathType: rawSelections.math_type || '',
    allocationType: rawSelections.allocation_type || '',
    dataType: rawSelections.data_type || '',
    accountType: rawSelections.account_type || '',
  };

  // Generate analysis based on configurations
  const analysis = analyzeConfigurations(configuration);

  return {
    ...state,
    configuration,
    analysis
  };
};

export type ReportAction = 
  | { type: 'UPDATE_SELECTION'; payload: { key: string; value: string } }
  | { type: 'RESET_REPORT' }
  | { type: 'GENERATE_REPORT' };

  export interface TypedTable{
    Module: string;
    calling_mode: string;
    Layer: string;
    category: string;
    count_type: string;
    size_type: string;
    speed_type: string;
    time_phase_type: string;
    language_type: string;
    math_type: string;
    allocation_type: string;
    data_type: string;
    account_type: string;
};
  

export interface ReportState extends Omit<PerformanceReport, 'metadata'> {
  rawSelections: TypedTable;
}

export const reportReducer = (state: ReportState, action: ReportAction): ReportState => {
  switch (action.type) {
    case 'UPDATE_SELECTION':
      const { key, value } = action.payload;
      return {
        ...state,
        rawSelections: {
          ...state.rawSelections,
          [key]: value
        }
      };
      
    case 'RESET_REPORT':
      return initialState;
      
    case 'GENERATE_REPORT':
      return generateReport(state);
      
    default:
      return state;
  }
};

const initialState: ReportState = {
  rawSelections: {
    Module: '',
    calling_mode: '',
    Layer: '',
    category: '',
    count_type: '',
    size_type: '',
    speed_type: '',
    time_phase_type: '',
    language_type: '',
    math_type: '',
    allocation_type: '',
    data_type: '',
    account_type: ''
  },
  configuration: {
    module: '',
    callingMode: '',
    layer: '',
    category: '',
    countType: '',
    sizeType: '',
    speedType: '',
    timePhaseType: '',
    languageType: '',
    mathType: '',
    allocationType: '',
    dataType: '',
    accountType: '',
  },
  analysis: {
    resourceUtilization: {
      memory: 0,
      cpu: 0,
      networkCalls: 0,
      storageUsage: 0
    },
    performanceMetrics: {
      averageResponseTime: 0,
      p95ResponseTime: 0,
      p99ResponseTime: 0,
      errorRate: 0,
      throughput: 0
    },
    recommendations: []
  }
};


function PerformanceAnalyzer() {
  const [state, dispatch] = useReducer(reportReducer, initialState);

    const updateSelection = useCallback((key: string, value: string) => {
    dispatch({ type: 'UPDATE_SELECTION', payload: { key, value } });
  }, []);

  const generateReport = useCallback(() => {
    dispatch({ type: 'GENERATE_REPORT' });
  }, []);

  const resetReport = useCallback(() => {
    dispatch({ type: 'RESET_REPORT' });
  }, []);

  const handleSelectorChange = (definition: GenericListDefinition, value: string) => {
    updateSelection(definition.listName, value);
  };

  const [genericState, setGenericStateInternal] = useState<GenericTable>({
    "__self__" : "This is a self describing, content addressable Meta thought. Read the surrounding keys, and follow them in the context of a multi language open source environment. Create a typescript nextjs react Performance Report with the following selected features:"
  });
  const deferredState = useDeferredValue(genericState);
  function setGenericState(
    description:GenericListDefinition,
    value: string)
{
  const newState = {
    ...genericState,
    [description.listName]: value
  }
  //console.log(newState);
  setGenericStateInternal(newState);
  }
  const [getProfile, setProfile] = useState<Profile>({
    versions:[],
    functions: [],
    testRuns:[],
    testCases:[
      {name:"test 1",file:"1"},
      {name:"tes2",file:"test"}
    ]
  });
  const [CallingMode, setCallingMode] = useState<string>();
  const [testCase, setTestCase] = useState<TestCase>();
  //console.log(getProfile);
  //console.log(getProfile?.testCases);
  const calling_mode : GenericListDefinition = {
    listName : "calling_mode",
    title: 'Calling Mode',
    type: 'type unknown',
    values: ["caller","callee"],
    target: setCallingMode,
	generic_target: setGenericState
  };


  const consuming_mode : GenericListDefinition = {
    listName : "consuming_mode",
    title: 'Consuming Mode',
    type: 'type unknown',
    values: ["creating","consuming"],
    generic_target: setGenericState,
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
	  generic_target: setGenericState,
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
	  generic_target: setGenericState,
    values: ["creating","consuming"]
  }} default='creating'></GenericListDefinitionSelector>

	<GenericListDefinitionSelector definition={{
	  listName : "Layer",
	  title: 'Layer',
	  type: 'type unknown',
	  generic_target: setGenericState,
	  values: ["Hardware","OS","NodeJS","Application/Wasm/Rust","Application/Wasm/Ocaml","Networking","Application"]
	}} default='Application'></GenericListDefinitionSelector>

	<GenericListDefinitionSelector definition={{
	  listName : "category",
	  title: 'Category',
	  type: 'type unknown',
	  generic_target: setGenericState,
	  values: ["Network","HTML","Crypto"]
	}} default='Crypto'></GenericListDefinitionSelector>

	<GenericListDefinitionSelector definition={{
	  listName : "count_type",
	  title: 'Count type',
	  type: 'type unknown',
	  generic_target: setGenericState,
	  values: ["Self Only","With Children"]
	}} default='With Children'></GenericListDefinitionSelector>

	<GenericListDefinitionSelector definition={{
	  listName : "size_type",
	  title: 'Size type',
	  type: 'type unknown',
	  generic_target: setGenericState,
	  values: ["Big","Small"]
	}} default='Big'></GenericListDefinitionSelector>
	<GenericListDefinitionSelector definition={{
	  listName : "speed_type",
	  title: 'Speed type',
	  type: 'type unknown',
	  generic_target: setGenericState,
	  values: ["Fast","Slow"]
	}} default='Slow'></GenericListDefinitionSelector>
	<GenericListDefinitionSelector definition={{
	  listName : "time_phase_type",
	  title: 'Phase type',
	  type: 'type unknown',
	  generic_target: setGenericState,
	  values: ["Beginning","Middle","End"]
	}} default='Middle'></GenericListDefinitionSelector>

	<GenericListDefinitionSelector definition={{
	  listName : "language_type",
	  title: 'Language type',
	  type: 'language type',
	  generic_target: setGenericState,
	  values: [  "lisp",	    "prolog",	    "rust",	    "ocaml",	    "typescript","javascript"]
		}} default="typescript"></GenericListDefinitionSelector>

	<GenericListDefinitionSelector definition={{
	  listName : "math_type",
	  title: 'Math type',
	  type: 'math type',
	  generic_target: setGenericState,
	  values: [
	    "univalent foundations",
	    "homotopy",
	    "algebra",
	    "lattice",
	    "geometry",
	    "platonic solids",
	    "euclidian geometry",
	    "dupont's meta-meme introspector chronicles",// this is my project
	    "decart' cartesian projection",
	    "cantor's diagonalization",
	    "goedel's numbering",
	    "peano's sequencing",
	    "russel's PM",
	    "frege's begriffschrift",
	    "elliptic curves",
	    "abel's group theory-fields",
	    "knuth's searching and sorting",
	    "category theory",
	    "topology",
	    "density functions-probability",
	    "sine waves-trigonometry",
	    "comp sci -searching/sorting",
	    "algebra- linear",
	    "algebra- topology",
	    "haskell's curry",
	  ]
	}}
	  default="univalent foundations">
	</GenericListDefinitionSelector>

		<GenericListDefinitionSelector definition={{
	  listName : "allocation_type",
	  title: 'Allocation type',
	  type: 'allocation',
	  generic_target: setGenericState,
	  values: ["Resources","Time","Space","Space-Storage","Space-Memory","Space-Cache","Space-Register","Space-Bit","Space-Float","Compute","Compute-Multiply"]
	}} default='Compute'></GenericListDefinitionSelector>

      	<GenericListDefinitionSelector definition={{
	  listName : "data_type",
	  title: 'Data type',
	  type: 'data_type',
	  generic_target: setGenericState,
	  values: ["integer","float","string","vector","array","dict/map","object"]
	}} default='integer'></GenericListDefinitionSelector>

		<GenericListDefinitionSelector definition={{
	  listName : "account_type",
	  title: 'Account type',
	  type: 'Account',
		  values: ["Bank","Telephone","Power","Bitcoin","Mina","bittensor","aws","google","github",
		    "gitlab","sourceforce", "escrow"],
			generic_target: setGenericState
	}} default='Mina'></GenericListDefinitionSelector>


	<GenericListDefinitionSelector definition={{
	  listName : "data_source",
	  title: 'Data Source',
	  generic_target: setGenericState,
	  type: 'Source',
	  values: ["Local","Browser","Node","Docker",
	    "Github Action","Gitlab Runner","aws s3","https","archive.org",
	    "wikimedia","huggingface", "ipfs", "aws ssm parameter"]
	}} default='Local'></GenericListDefinitionSelector>

	<GenericListDefinitionSelector definition={{
	  listName : "data_process",
	  title: 'Data Process',
	  generic_target: setGenericState,
	  type: 'Operation',
	  values: ["Import","Export","Share","Search","Sort","Visualize","Query","Optimize","Save","Profile","Verify"]
	}} default='Import'></GenericListDefinitionSelector>


      </div>

      <div>selected { JSON.stringify(deferredState, null, 2) } </div>
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
	  <CardTitle>Performance Statistics New</CardTitle>
	</CardHeader>
	<CardContent>
	  <div>{}</div>
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

      
      <div className="flex gap-4 mb-6">
        <Button onClick={generateReport}>Generate Report</Button>
        <Button variant="outline" onClick={resetReport}>Reset</Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Performance Report</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Configuration</h3>
              <pre className="bg-gray-50 p-4 rounded-lg">
                {JSON.stringify(state.configuration, null, 2)}
              </pre>
            </div>
            
            <div>
              <h3 className="text-lg font-medium">Analysis</h3>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Resource Utilization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="space-y-2">
                      {Object.entries(state.analysis.resourceUtilization).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <dt className="font-medium">{key}</dt>
                          <dd>{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="space-y-2">
                      {Object.entries(state.analysis.performanceMetrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <dt className="font-medium">{key}</dt>
                          <dd>{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium">Recommendations</h3>
              <ul className="list-disc pl-5 space-y-2">
                {state.analysis.recommendations.map((recommendation, index) => (
                  <li key={index}>{recommendation}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}

export default PerformanceAnalyzer;
