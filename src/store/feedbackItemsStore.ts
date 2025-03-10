import { create } from "zustand";
import { ItemProp } from "../components/type";
import { v4 as uuidv4 } from 'uuid';

type store={
    list:ItemProp[],
    isLoading:boolean,
    error:string,
    filter:string,
    getFilterList:()=>ItemProp[],
    getUniqueList:()=>string[],
    selectFilter:(select:string)=>void,
    addNewItem:(text:string)=>Promise<void>,
    fetchData:()=>Promise<void>,
    DeleteItem:(id:string)=>Promise<void>,
}

export const useFeedbackItemsStore=create<store>((set,get)=>({
    list:[],
    isLoading:false,
    error:"",
    filter:"",
    getFilterList:()=>{
       return get().filter?get().list.filter((item)=>item.company===get().filter):get().list
    },
    getUniqueList:()=>{
       return get().list.map((item)=>{
          return item.company
        }).filter((item,index,array)=>{
          return array.indexOf(item)===index
        })
    },
    selectFilter:(select:string)=>{
        set(()=>({
            filter:select
        }))
    },
    addNewItem: async (text:string)=>{
        const company=text.split(" ").filter((item)=>item.includes("#")).toString().substring(1)
        const newItem:ItemProp={
          text:text,
          company:company,
          badgeLetter:company.substring(0,1),
          upvoteCount:0,
          daysAgo:0,
          id:uuidv4()
         }
        set((state)=>({
            list:[...state.list,newItem ]
        }))
       
         await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",{
          method:"POST",
        
          body: JSON.stringify(newItem),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        })
      },
    DeleteItem:async(id:string)=>{
        const newList=get().list.filter((item)=>{
         return  item.id!==id
        })
        set(()=>({
            list:newList
        }))
        await fetch(`https://bytegrad.com/course-assets/projects/corpcomment/api/${id}`,{
          method:"DELETE"
        })
      },
    fetchData:async()=>{
       set(()=>({isLoading:true}))
        try{
        const response= await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks")
        if(!response.ok){
            throw new Error("something went wrong")
          }
        const data=await response.json()
        set(()=>({list:data.feedbacks}))
        set(()=>({isLoading:false}))
        set(()=>({error:""}))
        }
        catch{
            set(()=>({error:"something went wrong"}))
            set(()=>({isLoading:false}))
        } 
    }
}))