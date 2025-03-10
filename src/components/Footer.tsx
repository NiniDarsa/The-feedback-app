import styled from "styled-components";

const Footer=()=>{
 return(<StyledFooter>
       <span>
        <p>&copy; Copyright by <a target="_blank" href="https://www.ByteGrad.com">ByteGrad.com.</a> intended for learning or your portfolio.</p>
        <p>Not allow to use as your teaching material</p>
        </span>
    </StyledFooter>)
}
export default Footer

const StyledFooter=styled.footer`
  flex:1;
  display: flex;
  justify-content: end;
  align-items: end;
  span{
    color: #EBD3F8;
    margin-bottom: 10rem;
    margin-right: -8rem;
    transform: rotateZ(-90deg);
    a{
        color: #EBD3F8;
    }
  }
`;