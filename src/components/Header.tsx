import styled from "styled-components";
import Logo from "./Logo";
import TextArea from "./TextArea";


const Header=()=>{
 return(<StyledHeader>
      <Logo />
      <h1>Give FeedBack. <i>Publicly.</i></h1>
      <TextArea/>
    </StyledHeader>)
}
export default Header

const StyledHeader=styled.header`
  height: 15rem;
  padding-bottom: 1rem;
  background-image: url("../img.webp");
  background-size: 100% 60%;
  background-repeat: no-repeat;
  background-color: #131212f6;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  h1{
    flex:2;
    font-size: 2rem;
    text-align: center;
    i{
        color: #f0f8ffd1;
    }
  }
`;