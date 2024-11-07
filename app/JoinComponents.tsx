"use client";
import { JSX } from "react";
import { GenericListDefinitionSelector } from "./ListSelector";
import { getListName } from "./PerformanceAttributes";

/* create a list box of lists */

export function JoinComponents(props: ComponentFunc[]): JSX.Element {
  const names = props.map(getListName);
  return (
    <GenericListDefinitionSelector
      definition={{
        listName: "list_of_components",
        title: 'Components',
        generic_target: setGenericState,
        type: 'GenericListOfLists',
        values: names
      }} default names />)[0] >
    ;
  GenericListDefinitionSelector >
    ;
  ;
}
