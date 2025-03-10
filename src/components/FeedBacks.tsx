import styled from "styled-components";
import SingleItem from "./Item";
import { useFeedbackItemsStore } from "../store/feedbackItemsStore";
import { useShallow } from "zustand/shallow";

    
const FeedBacks=()=>{
   const list=useFeedbackItemsStore(useShallow(state=>state.getFilterList()))
   const isLoading=useFeedbackItemsStore(state=>state.isLoading)
   const error=useFeedbackItemsStore(state=>state.error)
 return(
 <StyledFeedback>
    {error&&<p className="error">{error}</p>}
    {isLoading&&<p className="loader"></p>}
        <ul>
            {list&&list.map((item)=>{
                return ( <SingleItem key={item.id} item={item} />  )
            })}
        </ul>
    </StyledFeedback>)
}
export default FeedBacks

const StyledFeedback=styled.div`
  min-height: 25rem;
  background-color: aliceblue;

  
  ul{
    list-style-type: none;
  }

.loader {
   margin: auto;
   margin-top: 5rem;
  vertical-align: middle;
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid purple;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.error{
    color: red;
    text-align: center;
}
`;