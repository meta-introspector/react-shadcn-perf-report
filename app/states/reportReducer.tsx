"use client"; // This is a client component

import { generateReport } from "../reports/generateReport";
import { initialState } from './initialState';
import { ReportAction } from "./ReportAction";
import { ReportState } from "./ReportState";


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
