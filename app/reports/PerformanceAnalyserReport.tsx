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
export function PerformanceAnalyzerReport() {

  const {generateReport, resetReport, state} = PerformanceRedux();
  return (
      <div className="flex gap-4 mb-6">
        <Button onClick={generateReport}>Generate Report</Button>
        <Button variant="outline" onClick={resetReport}>Reset</Button>
      </div>
);
}
