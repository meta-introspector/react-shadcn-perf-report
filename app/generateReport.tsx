"use client"; // This is a client component

import { analyzeConfigurations } from "./analyzeConfigurations";
import { ReportState } from './ReportState';

export const generateReport = (state: ReportState): ReportState => {
  const { rawSelections } = state;

  // Convert raw selections to configuration
  const configuration = {
    module: rawSelections.Module || '',
    callingMode: rawSelections.calling_mode || '',
    layer: rawSelections.Layer || '',
    category: rawSelections.category || '',
    countType: rawSelections.count_type || '',
    sizeType: rawSelections.size_type || '',
    speedType: rawSelections.speed_type || '',
    timePhaseType: rawSelections.time_phase_type || '',
    languageType: rawSelections.language_type || '',
    mathType: rawSelections.math_type || '',
    allocationType: rawSelections.allocation_type || '',
    dataType: rawSelections.data_type || '',
    accountType: rawSelections.account_type || '',
  };

  // Generate analysis based on configurations
  const analysis = analyzeConfigurations(configuration);

  return {
    ...state,
    configuration,
    analysis
  };
};
