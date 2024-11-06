"use client";
import { GenericListDefinition } from "./GenericListDefinition";
import { GenericListDefinitionSelector } from "./ListSelector";

export function LayerList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "Layer",
		title: 'Layer',
		type: 'type unknown',
		generic_target: setGenericState,
		values: ["Hardware", "OS", "NodeJS", "Application/Wasm/Rust", "Application/Wasm/Ocaml", "Networking", "Application"]
	}} default='Application'></GenericListDefinitionSelector>;
}
