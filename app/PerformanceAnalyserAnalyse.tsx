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
export function PerformanceAnalyzerAnalyse() {

  const {generateReport, resetReport, state} = PerformanceRedux();
  return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Performance Report</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
           
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
);
}
