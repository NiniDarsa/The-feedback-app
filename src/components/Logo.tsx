import styled from "styled-components"
import { LuMountainSnow } from "react-icons/lu";



const Logo=()=>{
 
  return(
    <StyleLogo>
       <a href="/"  className="logoContainer">
         <LuMountainSnow />
         <p><b>Corp</b>Comment</p>
       </a> 
    </StyleLogo>
  )
}
export default Logo

const StyleLogo=styled.div`
    flex:1;
    margin-top: 1rem;
    font-style: italic;
    cursor: pointer;
    .logoContainer{
        text-decoration: none;
        color: aliceblue;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .7rem;
        p{
            margin-left:.2rem
        }
    }
`