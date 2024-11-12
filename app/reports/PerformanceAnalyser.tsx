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
function PerformanceAnalyzer() {

  const {generateReport, resetReport, state} = PerformanceRedux();
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Performance Analysis Dashboard</h1>
    </div>
  );
}

export default PerformanceAnalyzer;
