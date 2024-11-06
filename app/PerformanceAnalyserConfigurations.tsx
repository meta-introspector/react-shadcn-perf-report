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
export function PerformanceAnalyzerConfigurations() {

  const {generateReport, resetReport, state} = PerformanceRedux();
  return (
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
            </div></div>
            </CardContent></Card>
);
}
