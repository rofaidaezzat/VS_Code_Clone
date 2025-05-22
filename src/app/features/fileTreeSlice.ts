import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface Iclickedfile{
        filename:string,
        filecontent:string|undefined,
        activeTabid:string|null

}
interface IinitialState{
    openFiles:IFile[],
    clickedFile:Iclickedfile,
    
}
const initialState:IinitialState= {
    openFiles:[],
    clickedFile:{
        activeTabid:null,
        filename:"",
        filecontent:""
    },
    

}
export const fileTreeSlice = createSlice({
    name:"fileTree",
    initialState,
    reducers:{
        //hold actions
        setOpenFiles:(state,action:PayloadAction<IFile[]>)=>{
            state.openFiles=action.payload;
        },
        setClickedFile:(state,action:PayloadAction<Iclickedfile>)=>{
        state.clickedFile=action.payload;
        },
        
    }
})
export const{setOpenFiles}=fileTreeSlice.actions
export const{setClickedFile}=fileTreeSlice.actions
export default fileTreeSlice.reducer