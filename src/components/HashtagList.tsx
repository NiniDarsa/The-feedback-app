import styled from "styled-components";
import { useFeedbackItemsStore } from "../store/feedbackItemsStore";
import { useShallow } from "zustand/shallow";


const HashtagList=()=>{
  const uniqueList=useFeedbackItemsStore(useShallow(state=>state.getUniqueList()))
  const selectFilter=useFeedbackItemsStore((state)=>state.selectFilter)
  
    return(<StyledHashtagList>
             <ul>
              {uniqueList&&uniqueList.map((item)=>{
                return ( <li onClick={()=>{selectFilter(item)}} key={item}> <button>#{item}</button> </li>
                )})}
             </ul>
        </StyledHashtagList>)

}

export default HashtagList

const StyledHashtagList=styled.div`
  flex:1;
  padding-top: 4rem;
  padding-left: 1rem;
  ul{
    list-style-type: none;

    li{
      border-radius: 2rem;
      margin-bottom: 1rem;
      width: 7rem;
      
       button{ 
        width: 100%;
        padding: .7rem 1rem;
        border-radius: 2rem;
        border: none;
        background-color: #bd64edd9;
        color: #EBD3F8;
        cursor: pointer;
    }
    }
  }
`;