"use client";
import { GenericListDefinition } from "../generics/GenericListDefinition";
import { GenericListDefinitionSelector } from "../generics/ListSelector";

export function SpeedList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "speed_type",
		title: 'Speed type',
		type: 'type unknown',
		generic_target: setGenericState,
		values: ["Fast", "Slow"]
	}} default='Slow'></GenericListDefinitionSelector>;
}
