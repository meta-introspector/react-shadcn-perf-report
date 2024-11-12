import { Value } from '@radix-ui/react-select';
import * as Enums from '../lists/enums';
import { createGenericListFunctions } from '../lists/Generic';
import { GenericListDefinition } from './GenericListDefinition';

class Part {
  //enum!: any
  values!: string[]
  //  parts!: string[]
  name! : string
}


//console.log("enumType1",Object.entries(Enums));
//console.log("enumType2",Object.values(Enums));
//console.log("enumType3",Object.keys(Enums));

const enumLists : Part[] = Object.entries(Enums).map(([name, enumType]) => {
  
  const values : string[] = Object.keys(enumType).map(key => enumType[Number(key)]).filter(value => typeof value === 'string') as string[];
  // function getValues( key: string | number ){
  //   console.log(key, name, enumType)
  //   //const val= typeof enumType[key];
  //   return "fixme";
  // }
  
  // function getStrings(value: any){
  //   return typeof value === 'string'
  // }
  
  // const values : string[] = Object.keys(enumType).map(getValues).filter(getStrings) as string[];

  //const values :string[] = Object.keys(enumType)
  //.map(([name, enumType]) => name);
  //const parts = name.split(/(?=[A-Z])/).map((part) => part.toLowerCase());
  //console.log("name",name);
  //console.log("DEBUG values",values );
  //console.log("enumType",enumType);
  //console.log("enumType1",Object.entries(enumType));
  //console.log("enumType2",Object.values(enumType));
  //console.log("enumType3",Object.keys(enumType));
  const ret= {
    //enum: enumType,
    values: values,
    //    parts,
    name
  };
  return ret;
});

class Desc {
  name!:string
  description!:()=>GenericListDefinition
  default!:()=>string
  component!:renderFT
}
type Key1 = string | number | symbol;
type Map1 = Map<Key1,Desc>;
const initialMap :Map1 = new Map();
type setGST= (description: GenericListDefinition, value: string) => void;
//type renderFT= (setGenericState: setGST) => Element
type renderFT= (setGenericState: (description: GenericListDefinition, 
  value: string) => void) => JSX.Element;
  
//function callback (acc: Map1, obj1 :Part ): Map1
function callback(acc:any, obj1:Part, index:number, array1:any): any
{
  //console.log("CALLBACK",acc,obj1, index, array1);  
  const enumType = obj1.values
  const name1 = obj1?.name
  //  const parts = obj1?.parts
  const values = Object.values(enumType);
  //console.log("DEBUG obj",obj1);
  //console.log("DEBUG enum type",enumType);
  //console.log("DEBUG3",name1);
  //console.log("DEBUG parts",parts);
  //console.log("DEBUG4",values);
  const { 
    getDescription, 
    getDefault, 
    GenericList 
  } = createGenericListFunctions(
    {
      listName: name1,
      default: values[0],
      title: name1,
      type: name1,
      values: values
    });
  const obj:Desc = {
    name: name1,
    description: getDescription,
    default: getDefault,
    component: GenericList
  };  
  acc.set(name1,obj);
  return acc;
}

export const genericLists = enumLists.reduce<Map1>(callback, initialMap);
