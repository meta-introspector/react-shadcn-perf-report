//@ObjectType()
export type GenericElement = string;
export class GenericListDefinition {
  fetch?:any; // function pointer to get new data from outside  
  fetch_id?:any;
  sub_components?: GenericListDefinition[]
  listName!: string; // name of list
  //default!: string;
  title!: string; // title of list
  type!: string; // name of type of data of list
  values!: GenericElement [] // value of the type
  target?: any|undefined // function pointer
  generic_target?: any; // each selection is passed here
  fetch_new_data?: any; // function pointer to get new data from outside
  added_new_value?: any; // function pointer called on new data being added to list
  autocomplete?: any; // function pointer called to get autocomplete results, this is search  
  export_data?: any; // function pointer exposed to give export data to outside
  import_data?: any; // function pointer exposed to give import data from outside
  module?: any; // function pointer exposed to give module information
  ast?: any; // function pointer exposed to give ast information
  code?: any; // function pointer exposed to give source code information
  hierarchy?: any; // function pointer exposed to give hierarchy
  introspect?: any; // function pointer exposed to introspect
  vectorize_element?: any; // vectorize function for element of self
  vectorize_self?: any; // vectorize function for self
  chat_describe?: any; // chat describe this list
  eval?: any; // eval this code in the the context of the list
  hex_dump?: any; // hex dump this value
  wasm?: any; // give wasm representation of this list
  description?:any; // mostly text
}
