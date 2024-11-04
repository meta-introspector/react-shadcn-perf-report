//@ObjectType()
export type GenericElement = string;
export class GenericListDefinition {
  listName!: string; // name of list
  //default!: string;
  title!: string; // title of list
  type!: string; // name of type of data of list
  values!: GenericElement [] // value of the type
  target?: any|undefined // function pointer
}
