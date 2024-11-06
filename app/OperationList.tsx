"use client";
import { GenericListDefinition } from "./GenericListDefinition";
import { GenericListDefinitionSelector } from "./ListSelector";

export function OperationList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "data_process",
		title: 'Data Process',
		generic_target: setGenericState,
		type: 'Operation',
		values: ["Import", "Export", "Share", "Search", "Sort", "Visualize", "Query", "Optimize", "Save", "Profile", "Verify"]
	}} default='Import'></GenericListDefinitionSelector>;
}
