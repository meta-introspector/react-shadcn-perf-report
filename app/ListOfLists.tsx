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

// FIXME commented out
// export function getListName(
//   getGenericState:(() => GenericListDefinition),
//   setGenericState: ((description: GenericListDefinition, value: string) => void)
// ) {
//      return getGenericState().listName
// }

// function render(x:any){
//     return x(setGenericState)
//   }

export function ListOfList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
	  listName: "ListOfList",
	  title: 'List of Lists',
	  generic_target: setGenericState,// feedback
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
	}} default='ListOfLists'></GenericListDefinitionSelector>;
}
