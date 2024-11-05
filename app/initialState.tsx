"use client"; // This is a client component

import { ReportState } from "./ReportState";


export const initialState: ReportState = {
  rawSelections: {
    Module: '',
    calling_mode: '',
    Layer: '',
    category: '',
    count_type: '',
    size_type: '',
    speed_type: '',
    time_phase_type: '',
    language_type: '',
    math_type: '',
    allocation_type: '',
    data_type: '',
    account_type: ''
  },
  configuration: {
    module: '',
    callingMode: '',
    layer: '',
    category: '',
    countType: '',
    sizeType: '',
    speedType: '',
    timePhaseType: '',
    languageType: '',
    mathType: '',
    allocationType: '',
    dataType: '',
    accountType: '',
  },
  analysis: {
    resourceUtilization: {
      memory: 0,
      cpu: 0,
      networkCalls: 0,
      storageUsage: 0
    },
    performanceMetrics: {
      averageResponseTime: 0,
      p95ResponseTime: 0,
      p99ResponseTime: 0,
      errorRate: 0,
      throughput: 0
    },
    recommendations: []
  }
};
