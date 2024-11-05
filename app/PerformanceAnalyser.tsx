"use client"
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useReducer, useCallback, useState } from "react";
import { GenericListDefinition } from "./GenericListDefinition";
import { initialState } from "./initialState";
import { Profile } from "./ProfileData";
import { reportReducer } from "./reportReducer";
//import { generateReport } from "./generateReport";
import {PerformanceRedux} from "./PerformanceRedux"
function PerformanceAnalyzer() {

  const {generateReport, resetReport, state} = PerformanceRedux();
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Performance Analysis Dashboard</h1>
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
