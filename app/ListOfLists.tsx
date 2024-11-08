"use client";
import { GenericListDefinition } from "./GenericListDefinition";
import { GenericListDefinitionSelector } from "./ListSelector";

import { getDescription as PhaseList } from "./PhaseList";
import { getDescription as LanguageList } from "./LanguageList";
// import { getDescription as MathList } from "./MathList";
// import { getDescription as ResourceList } from "./ResourceList";
// import { getDescription as DataTypeList } from "./DataTypeList";
// import { getDescription as AccountList } from "./AccountList";
// import { getDescription as SourceList } from "./SourceList";
// import { getDescription as ModuleList } from "./ModuleList";
// import { getDescription as OperationList } from "./OperationList";
// import { getDescription as SpeedList } from "./SpeedList";
// import { getDescription as SizeList } from "./SizeList";
// import { getDescription as FunctionCategories } from "./FunctionCategories";
// import { getDescription as LayerList } from "./LayerList";
// import { getDescription as ConsumingModeList } from "./ConsumingModeList";
// import { getDescription as CallingModeList } from "./CallingModeList";

// function render(x:any){
//     return x(setGenericState)
//   }

export function getDescription() :GenericListDefinition {
  return {
	  listName: "ListOfList",
	  title: 'List of Lists',
    //generic_target: setGenericState,// feedback
	  type: 'ListComponent',
	  values: [
	    "PhaseList",
	    "LanguageList",
	    "ListOfLists"// this list
	  ],

	  sub_components: [
	 // GitHostingSelector,
	  //GitRepoSelector,
	  //TestCaseSelector,
	  // CallingModeList,
	  // ConsumingModeList,
	  // LayerList,
	  // FunctionCategories,
	  // CallingModeList,
	  // SizeList,
	  // SpeedList,
	    PhaseList(),
	    LanguageList()
	  // MathList,
	  // ResourceList,
	  // DataTypeList,
	  // AccountList,
	  // SourceList,
	  // ModuleList,
	  // OperationList
	  ]
	}
}

export function getDefault() :string {  return getDescription().values[0] }
export function GenericList(setGenericState: (description: GenericListDefinition, value: string) => void) {
  return <GenericListDefinitionSelector definition={{... getDescription(), generic_target:setGenericState }} default={getDefault()}></GenericListDefinitionSelector>;
}

