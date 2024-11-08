"use client";
import { GenericListDefinition } from "../generics/GenericListDefinition";
import { GenericListDefinitionSelector } from "../generics/ListSelector";

export function CallingModeList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "calling_mode",
		title: 'Calling Mode',
		type: 'type unknown',
		values: ["caller", "callee","internal","inlined"],
		generic_target: setGenericState
	}} default='caller'></GenericListDefinitionSelector>;
}
