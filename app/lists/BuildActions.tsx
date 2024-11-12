"use client";
import { GenericListDefinition } from "../generics/GenericListDefinition";
import { GenericListDefinitionSelector } from "../generics/ListSelector";

export function BuildActions(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "build_actions",
		title: 'Build Actions',
		type: 'Actions',
		default: "model",
	  values: ["aquire", "configure", "compile", "link", "load", "simulate", "execute",
	    "introspect","observe",
	    "deploy","contain","download",
	    "model",
	    "model-check",	    
	    "secure","audit","test",
	    "install","uninstall",
	    "catalog","collect",
	    "record-profile",
	    "record-profile-cpu",
	    "record-profile-heap",
	    "record-profile-perf",
	    "record-profile-strace",
	    "record-event-lsof",
	    "record-event-core",
	    "play","decide",
	    // act is like execute or output
	    "splice",
	    "quote", "prove","output-report","explain","package","publish","use","dispose",
	    "merge", "sort", "search","visualize","edit"
	  ],
	  generic_target: setGenericState
	}} default='execute'></GenericListDefinitionSelector>;
}
