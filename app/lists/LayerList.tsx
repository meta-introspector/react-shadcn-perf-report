"use client";
import { GenericListDefinition } from "../generics/GenericListDefinition";
import { GenericListDefinitionSelector } from "../generics/ListSelector";

export function LayerList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "Layer",
		title: 'Layer',
		type: 'type unknown',
		generic_target: setGenericState,
		values: ["Hardware", "OS", "NodeJS", "Application/Wasm/Rust", "Application/Wasm/Ocaml", "Networking", "Application","Hosting","Security","Financial",
			"Audit","Backup","Parameters","Containerization","Introspection"]
	}} default='Application'></GenericListDefinitionSelector>;
}
