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
export function PerformanceAnalyzerChart() {
  const {generateReport, resetReport, state} = PerformanceRedux();
  return (
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
);
}
