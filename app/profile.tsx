"use client"; // This is a client component
import React, { useState, useMemo } from 'react';
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

import type { Profile,TestRun,FunctionData,Stats,TestCase,TestMetrics } from "./types";

function loadProfiles():Profile[]
{
  const ret:Profile[]=[];
  return ret;
}

function foo1() {
  const sampleData: Profile[] = loadProfiles();
                  sampleData.map((func, i) => {
                  func.testRun.map((value:TestRun,index: number, array:TestRun[]): void => {
                    value.metrics.map((function1:FunctionData,index2:number, array:FunctionData[]) => {
                      
                    });
                  });
                  //const stats = getPerformanceStats(func);
		  });
}

function tbody(i:number,functionName:string, stats:Stats) {
                {
                  return (
                    <tr key={i}>
                      <td className="p-4 border-b">{functionName.split('::').pop()}</td>
			<td className="p-4 border-b text-green-600">

                        {stats.min.toLocaleString()}
                      </td>
                      <td className="p-4 border-b text-red-600">
                        {stats.max.toLocaleString()}
                      </td>
                      <td className="p-4 border-b">
                        {Math.round(stats.avg).toLocaleString()}
                      </td>
                      <td className="p-4 border-b">{stats.variance}%</td>
                    </tr>
                  );
                }
}

// now a component
// FIXME: remove all data,leave only the structure
const PerformanceAnalyzer = () => {
  const [selectedTest, setSelectedTest] = useState<TestCase>({name: 'test1', file:"todo"});
  
  // Sample data structure
  const sampleData: Profile[] = loadProfiles();
  const processedData = useMemo(() => {
    return sampleData.map(func => ({
      //name: func.functionName.split('::').pop(),
      //vm: func.metrics[selectedTest.name],
      //      v2: func.metrics[selectedTest].v2,
      //v3: func.metrics[selectedTest].v3
    }));
  }, [selectedTest, sampleData]);

  function findTest(name:string):TestCase {
   const test: TestCase = { name:"test", file:"test" };
    return test;
  }
  function getPerformanceStats(metrics: TestMetrics): Stats {
    const allValues = Object.values(metrics)
      .flatMap(test => Object.values(test))
      .flatMap(test2 => test2.count);
      const total = 0;
      const count = 0;
    const min = Math.min(...allValues);
    const max = Math.max(...allValues);
    const avg = allValues.reduce((a, b) => a + b, 0) / allValues.length;
    const variance = Number(((max - min) / min * 100).toFixed(1));
    return { total, count, min, max, avg, variance };
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Performance Analysis Dashboard</h1>
      
      <div className="mb-6">
        <Select value={selectedTest.name} onValueChange={(value: string) => setSelectedTest(findTest(value))}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select test case" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="test1">Test Case 1</SelectItem>
            <SelectItem value="test2">Test Case 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Performance Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 w-full">

            <LineChart
              width={1100}
              height={400}
              data={processedData}
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
                name="Version 1" 
		  />
		
              <Line 
                type="monotone" 
                dataKey="v2" 
                stroke="#82ca9d" 
                name="Version 2" 
              />
              <Line 
                type="monotone" 
                dataKey="v3" 
                stroke="#ffc658" 
                name="Version 3" 
              />
            </LineChart>
          </div>
        </CardContent>
      </Card>

      
            <Card>
        <CardHeader>
          <CardTitle>Performance Statistics</CardTitle>
        </CardHeader>
        <CardContent>

      <h1>debug</h1>
	<div><pre>DEBUG1{JSON.stringify([]
	 // [... new Set(	  sampleData.flatMap(func => Object.values(func.metrics)).flatMap(a => Object.keys(a) )	  )]
	  , null, 2) }</pre></div>;
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
};

export default PerformanceAnalyzer;
