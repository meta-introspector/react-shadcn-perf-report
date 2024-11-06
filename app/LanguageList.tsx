"use client";
import { GenericListDefinition } from "./GenericListDefinition";
import { GenericListDefinitionSelector } from "./ListSelector";

export function LanguageList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "language_type",
		title: 'Language type',
		type: 'language type',
		generic_target: setGenericState,
		values: ["lisp", "prolog", "rust", "ocaml", "typescript", "javascript"]
	}} default="typescript"></GenericListDefinitionSelector>;
}
