import styled from "styled-components"
import GlobalStyle from "../../styles/GlobalStyle"
import Content from "./Content"
import Footer from "./Footer"
import HashtagList from "./HashtagList"
import { useEffect } from "react"
import { useFeedbackItemsStore } from "../store/feedbackItemsStore"


function App() {
 const fetchData=useFeedbackItemsStore(state =>state.fetchData)
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <StyledApp>
      <GlobalStyle/>
      <Footer/>
      <Content/>
      <HashtagList/>
    </StyledApp>
  )
}

export default App

const StyledApp=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
