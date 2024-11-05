"use client"
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useReducer, useCallback, useState, useDeferredValue } from "react";
import { GenericListDefinition } from "./GenericListDefinition";
import { GenericTable } from "./GenericTable";
import { GitRepoSelector } from "./GitRepoSelector";
import { GitHostingSelector } from "./HostingSelector";
import { initialState } from "./initialState";
import { GenericListDefinitionSelector } from "./ListSelector";
import { Profile } from "./ProfileData";
import { reportReducer } from "./reportReducer";
import { TestCase } from "./TestCase";
import { TestCaseSelector } from "./TestCaseSelector";

function PerformanceAttributes() {
  const [state, dispatch] = useReducer(reportReducer, initialState);

    const updateSelection = useCallback((key: string, value: string) => {
    dispatch({ type: 'UPDATE_SELECTION', payload: { key, value } });
  }, []);

  const generateReport = useCallback(() => {
    dispatch({ type: 'GENERATE_REPORT' });
  }, []);

  const resetReport = useCallback(() => {
    dispatch({ type: 'RESET_REPORT' });
  }, []);

  const handleSelectorChange = (definition: GenericListDefinition, value: string) => {
    updateSelection(definition.listName, value);
  };

  const [genericState, setGenericStateInternal] = useState<GenericTable>({
    "__self__" : "This is a self describing, content addressable Meta thought. Read the surrounding keys, and follow them in the context of a multi language open source environment. Create a typescript nextjs react Performance Report with the following selected features:"
  });
  const deferredState = useDeferredValue(genericState);
  function setGenericState(
    description:GenericListDefinition,
    value: string) {
      const newState = {
	...genericState,
	[description.listName]: value
      }
      //console.log(newState);
      setGenericStateInternal(newState);
      handleSelectorChange(description, value);
    }
  const [getProfile, setProfile] = useState<Profile>({
    versions:[],
    functions: [],
    testRuns:[],
    testCases:[
      {name:"test 1",file:"1"},
      {name:"tes2",file:"test"}
    ]
  });
  
  return (
    <div>
      	<GitHostingSelector/>
	<GitRepoSelector/>
	<TestCaseSelector/>

	<GenericListDefinitionSelector definition={{
	  listName : "Module",
	  title: 'Module',
	  type: 'Module',
	  generic_target: setGenericState,
	  values: ["npm","os","rust","hw",
	    "react","next","aws","https","archive.org",
	    "wikimedia","huggingface", "ipfs", "aws-ssm-parameter", "etc"]
	}} default='rust'></GenericListDefinitionSelector>

	<GenericListDefinitionSelector definition={{
	  listName : "calling_mode",
	  title: 'Calling Mode',
	  type: 'type unknown',
	  values: ["caller","callee"],	  
	  generic_target: setGenericState
	}} default='caller'></GenericListDefinitionSelector>

    <GenericListDefinitionSelector definition={{
	listName : "consuming_mode",
	title: 'Consuming Mode',
	type: 'type unknown',
	generic_target: setGenericState,
	values: ["creating","consuming"]
      }} default='creating'>
    </GenericListDefinitionSelector>
      
    <GenericListDefinitionSelector definition={{
	listName : "Layer",
	title: 'Layer',
	type: 'type unknown',
	generic_target: setGenericState,
	values: ["Hardware","OS","NodeJS","Application/Wasm/Rust","Application/Wasm/Ocaml","Networking","Application"]
	}} default='Application'></GenericListDefinitionSelector>
      
      <GenericListDefinitionSelector definition={{
	listName : "category",
	title: 'Category',
	type: 'type unknown',
	generic_target: setGenericState,
	values: ["Network","HTML","Crypto"]
      }} default='Crypto'></GenericListDefinitionSelector>
      
      <GenericListDefinitionSelector definition={{
	listName : "count_type",
	title: 'Count type',
	type: 'type unknown',
	generic_target: setGenericState,
	values: ["Self Only","With Children"]
      }} default='With Children'></GenericListDefinitionSelector>
      
      <GenericListDefinitionSelector definition={{
	listName : "size_type",
	title: 'Size type',
	type: 'type unknown',
	generic_target: setGenericState,
	values: ["Big","Small"]
      }} default='Big'></GenericListDefinitionSelector>

      <GenericListDefinitionSelector definition={{
	listName : "speed_type",
	title: 'Speed type',
	type: 'type unknown',
	generic_target: setGenericState,
	values: ["Fast","Slow"]
      }} default='Slow'></GenericListDefinitionSelector>

      <GenericListDefinitionSelector definition={{
	listName : "time_phase_type",
	title: 'Phase type',
	type: 'type unknown',
	generic_target: setGenericState,
	values: ["Beginning","Middle","End"]
      }} default='Middle'></GenericListDefinitionSelector>
      
      <GenericListDefinitionSelector definition={{
	listName : "language_type",
	title: 'Language type',
	type: 'language type',
	generic_target: setGenericState,
	values: [  "lisp",	    "prolog",	    "rust",	    "ocaml",	    "typescript","javascript"]
      }} default="typescript"></GenericListDefinitionSelector>
      
      <GenericListDefinitionSelector definition={{
	listName : "math_type",
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
	    "dupont's meta-meme introspector chronicles",// this is my project
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
	</GenericListDefinitionSelector>

		<GenericListDefinitionSelector definition={{
	  listName : "allocation_type",
	  title: 'Allocation type',
	  type: 'allocation',
	  generic_target: setGenericState,
	  values: ["Resources","Time","Space","Space-Storage","Space-Memory","Space-Cache","Space-Register","Space-Bit","Space-Float","Compute","Compute-Multiply"]
	}} default='Compute'></GenericListDefinitionSelector>

      	<GenericListDefinitionSelector definition={{
	  listName : "data_type",
	  title: 'Data type',
	  type: 'data_type',
	  generic_target: setGenericState,
	  values: ["integer","float","string","vector","array","dict/map","object"]
	}} default='integer'></GenericListDefinitionSelector>

		<GenericListDefinitionSelector definition={{
	  listName : "account_type",
	  title: 'Account type',
	  type: 'Account',
		  values: ["Bank","Telephone","Power","Bitcoin","Mina","bittensor","aws","google","github",
		    "gitlab","sourceforce", "escrow"],
			generic_target: setGenericState
	}} default='Mina'></GenericListDefinitionSelector>


	<GenericListDefinitionSelector definition={{
	  listName : "data_source",
	  title: 'Data Source',
	  generic_target: setGenericState,
	  type: 'Source',
	  values: ["Local","Browser","Node","Docker",
	    "Github Action","Gitlab Runner","aws s3","https","archive.org",
	    "wikimedia","huggingface", "ipfs", "aws ssm parameter"]
	}} default='Local'></GenericListDefinitionSelector>

	<GenericListDefinitionSelector definition={{
	  listName : "data_process",
	  title: 'Data Process',
	  generic_target: setGenericState,
	  type: 'Operation',
	  values: ["Import","Export","Share","Search","Sort","Visualize","Query","Optimize","Save","Profile","Verify"]
	}} default='Import'></GenericListDefinitionSelector>

      <div>selected { JSON.stringify(deferredState, null, 2) } </div>
    </div>
  );
}

export default PerformanceAttributes;
