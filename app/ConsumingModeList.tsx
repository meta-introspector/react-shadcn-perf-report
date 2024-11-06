"use client";
import { GenericListDefinition } from "./GenericListDefinition";
import { GenericListDefinitionSelector } from "./ListSelector";

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
