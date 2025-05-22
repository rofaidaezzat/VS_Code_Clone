import { IFile } from "../interfaces";

/**
 * 
 * @param arr 
 * @param id 
 * @returns 
 */
export const doesFileObjectExist=(arr:IFile[],id:string)=>{
return arr.some(obj=>obj.id===id)
}