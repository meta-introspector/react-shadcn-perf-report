"use client"
import { useReducer, useCallback, useState, useDeferredValue, SetStateAction, Key, AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode } from "react";
import { GenericListDefinition } from "../generics/GenericListDefinition";
import { GenericTable } from "../types/GenericTable";
import { GitRepoSelector } from "../sources/GitRepoSelector";
import { GenericList as GitHostingSelector } from "../sources/GitHostingSelector";
import { initialState } from "../states/initialState";
import { Profile } from "../types/ProfileData";
import { reportReducer } from "../states/reportReducer";
import { TestCaseSelector } from "../sources/TestCaseSelector";
import { GenericList as PhaseList, getDescription as getPhaseDescription } from "../lists/PhaseList";
import { GenericList as LanguageList } from "../lists/LanguageList";
import { GenericType } from "../generics/Loader"
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
import { createGenericListFunctions } from "../lists/Generic";
import { genericLists } from "../generics/enums"
export class PerfAttrsProps{
	setSuggestion:any
}

export function PerformanceAttributes(props:PerfAttrsProps) {
  
  const handleSelectorChange = (definition: GenericListDefinition, value: string) => {
    //updateSelection(definition.listName, value);
    console.log("DEBUG",definition,value);
  };

  const [genericState, setGenericStateInternal] = useState<GenericTable>({
    "__self__" : "This is a self describing, content addressable Meta thought. Read the surrounding keys,"
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
  const {getDescription, getDefault, GenericList:QueryLanguage } =createGenericListFunctions({
  listName: "queryLanguage",
  title: "query Language",
  type: "QueryLanguage",
  default: "sql",
  values : ["sparql","react-query","graphql","jq","grep","sql"]
 });
 
 function makeList(){
  return (<div>todo</div>)  
 }
  //const newElements = genericLists.map()
  //let reactList: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<AwaitedReactNode> | null | undefined = []
  let reactList : any[]= [];
  for (const entry of genericLists.entries()) {
    //console.log("entry",entry);
    const value = entry[1];
    reactList.push((<div key={`Entry${value.name}`}>{value.component(setGenericState)}</div>));
  }
 
 //.keys().map(makeList);
 //.map(makeList);
 //function ({ GenericList: data }) {
 //  const alist = data(setGenericState);
 //  return (<div>hello{alist}</div>);
 //})
  //console.log(reactList);
  const newElements = <div key="somelist">{reactList}</div>
  const element= (
    <div>
      {GitHostingSelector(setGenericState)}
      <GitRepoSelector/>
      <TestCaseSelector/>
      {newElements}
      {QueryLanguage(setGenericState)}
      {PhaseList(setGenericState)}
      {LanguageList(setGenericState)}
      {ListOfLists(setGenericState)}
  <div>selected { JSON.stringify(deferredState, null, 2) } </div>
</div>
  );
  return {element, setGenericStateInternal, genericState }
}

export default PerformanceAttributes;