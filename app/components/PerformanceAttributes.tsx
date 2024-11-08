"use client"
import { useReducer, useCallback, useState, useDeferredValue } from "react";
import { GenericListDefinition } from "../generics/GenericListDefinition";
import { GenericTable } from "../types/GenericTable";
import { GitRepoSelector } from "../sources/GitRepoSelector";
import { GenericList as GitHostingSelector } from "../sources/GitHostingSelector";
import { initialState } from "../states/initialState";
import { Profile } from "../types/ProfileData";
import { reportReducer } from "../states/reportReducer";
import { TestCaseSelector } from "../sources/TestCaseSelector";
import { GenericList as PhaseList } from "../lists/PhaseList";
import { GenericList as LanguageList } from "../lists/LanguageList";
/*
import { MathList } from "./MathList";
import { ResourceList } from "./ResourceList";
import { DataTypeList } from "./DataTypeList";
import { AccountList } from "./AccountList";
import { SourceList } from "./SourceList";
import { ModuleList } from "./ModuleList";
import { OperationList } from "./OperationList";
import { SpeedList } from "./SpeedList";
import { SizeList } from "./SizeList";
import { FunctionCategories } from "./FunctionCategories";
import { LayerList } from "./LayerList";
import { ConsumingModeList } from "./ConsumingModeList";
import { CallingModeList } from "./CallingModeList";
*/
import { GenericList as ListOfLists } from "../lists/ListOfLists";

class PerfAttrsProps{
	setSuggestion:any
}

export function PerformanceAttributes(props:PerfAttrsProps) {
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

  const [genericState, setGenericStateInternal] = useState<GenericTable>({
    "__self__" : "This is a self describing, content addressable Meta thought. Read the surrounding keys, and follow them in the context of a multi language open source environment. Create a typescript nextjs react Performance Report with the following selected features:"
  });
  const deferredState = useDeferredValue(genericState);
  function setGenericState(
    description:GenericListDefinition,
    value: string) {
      const newState = {
	...genericState,
	[description.listName]: value
      }
      //console.log(newState);
      setGenericStateInternal(newState);
	  props.setSuggestion(JSON.stringify( deferredState))
      handleSelectorChange(description, value);
    }
  const [getProfile, setProfile] = useState<Profile>({
    versions:[],
    functions: [],
    testRuns:[],
    testCases:[
      {name:"test 1",file:"1"},
      {name:"tes2",file:"test"}
    ]
  });

  // {ConsumingModeList(setGenericState)}      
  // {LayerList(setGenericState)}      
  // {FunctionCategories(setGenericState)}
  // {CallingModeList(setGenericState)}
  // {SizeList(setGenericState)}
  // {SpeedList(setGenericState)}
  
  // {MathList(setGenericState)}
  // {ResourceList(setGenericState)}
  // {DataTypeList(setGenericState)}
  // {AccountList(setGenericState)}
  // {SourceList(setGenericState)}
  // {ModuleList(setGenericState)}
  // {OperationList(setGenericState)}

  return (
    <div>
      {GitHostingSelector(setGenericState)}
      <GitRepoSelector/>
      <TestCaseSelector/>
      {PhaseList(setGenericState)}
      {LanguageList(setGenericState)}
      {ListOfLists(setGenericState)}
  <div>selected { JSON.stringify(deferredState, null, 2) } </div>
</div>
  );
}

export default PerformanceAttributes;