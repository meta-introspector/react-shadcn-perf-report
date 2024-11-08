"use client";
import { GenericListDefinition } from "../generics/GenericListDefinition";
import { GenericListDefinitionSelector } from "../generics/ListSelector";

export function ConsumingModeList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "consuming_mode",
		title: 'Consuming Mode',
		type: 'type unknown',
		generic_target: setGenericState,
		values: ["creating", "consuming"]
	}} default='creating'>
	</GenericListDefinitionSelector>;
}
