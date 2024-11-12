"use client"; // This is a client component


export type ReportAction = { type: 'UPDATE_SELECTION'; payload: { key: string; value: string; }; } |
{ type: 'RESET_REPORT'; } |
{ type: 'GENERATE_REPORT'; };
