"use client"; // This is a client component

import { PerformanceReport } from "./PerformanceReport";
import { TypedTable } from "./TypedTable";


export interface ReportState extends Omit<PerformanceReport, 'metadata'> {
  rawSelections: TypedTable;
}
