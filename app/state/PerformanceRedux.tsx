import { useReducer, useCallback } from "react";
import { GenericListDefinition } from "../generics/GenericListDefinition";
import { initialState } from "../states/initialState";
import { reportReducer } from "../states/reportReducer";

export function PerformanceRedux() {
  const [state, dispatch] = useReducer(reportReducer, initialState);

  const updateSelection = useCallback((key: string, value: string) => {
    dispatch({ type: 'UPDATE_SELECTION', payload: { key, value } });
  }, []);

  const generateReport = useCallback(() => {
    dispatch({ type: 'GENERATE_REPORT' });
  }, []);

  const resetReport = useCallback(() => {
    dispatch({ type: 'RESET_REPORT' });
  }, []);

  const handleSelectorChange = (definition: GenericListDefinition, value: string) => {
    updateSelection(definition.listName, value);
  };

  return {
    state,
    generateReport,
    handleSelectorChange,
    resetReport
  }
}
