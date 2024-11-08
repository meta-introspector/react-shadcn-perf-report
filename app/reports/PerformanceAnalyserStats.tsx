"use client"
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useReducer, useCallback, useState } from "react";
import { GenericListDefinition } from "../generics/GenericListDefinition";
import { initialState } from "../states/initialState";
import { Profile } from "../types/ProfileData";
import { reportReducer } from "../states/reportReducer";
//import { generateReport } from "./generateReport";
import {PerformanceRedux} from "../state/PerformanceRedux"
export function PerformanceAnalyzerStats() {

  const {generateReport, resetReport, state} = PerformanceRedux();
  return (
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
);
}
