"use client";
import { GenericListDefinition } from "./GenericListDefinition";
import { GenericListDefinitionSelector } from "./ListSelector";

export function MathList(setGenericState: (description: GenericListDefinition, value: string) => void) {
	return <GenericListDefinitionSelector definition={{
		listName: "math_type",
		title: 'Math type',
		type: 'math type',
		generic_target: setGenericState,
		values: [
			"univalent foundations",
			"homotopy",
			"algebra",
			"lattice",
			"geometry",
			"platonic solids",
			"euclidian geometry",
			"dupont's meta-meme introspector chronicles", // this is my project
			"decart' cartesian projection",
			"cantor's diagonalization",
			"goedel's numbering",
			"peano's sequencing",
			"russel's PM",
			"frege's begriffschrift",
			"elliptic curves",
			"abel's group theory-fields",
			"knuth's searching and sorting",
			"category theory",
			"topology",
			"density functions-probability",
			"sine waves-trigonometry",
			"comp sci -searching/sorting",
			"algebra- linear",
			"algebra- topology",
			"haskell's curry",
		]
	}}
		default="univalent foundations">
	</GenericListDefinitionSelector>;
}
