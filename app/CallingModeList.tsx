"use client";
import { GenericListDefinition } from "./GenericListDefinition";
import { GenericListDefinitionSelector } from "./ListSelector";

export function CallingModeList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "calling_mode",
		title: 'Calling Mode',
		type: 'type unknown',
		values: ["caller", "callee"],
		generic_target: setGenericState
	}} default='caller'></GenericListDefinitionSelector>;
}
