import styled from "styled-components"
import Header from "./Header";
import FeedBacks from "./FeedBacks";

const Content=()=>{
  
return(<StyledContent>
       <div className="mainContainer">
         <Header/>
         <FeedBacks/>
       </div>
    </StyledContent>
)
}
export default Content

const StyledContent=styled.div`
  flex:1.5;
  padding-top: 4rem;
  .mainContainer{
     width: 100%;
     display: flex;
     flex-direction: column;
     border-radius:.4rem;
     background-color: aliceblue;
  }
`;