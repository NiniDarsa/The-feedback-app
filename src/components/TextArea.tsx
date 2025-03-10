import styled from "styled-components";
import { CiPen } from "react-icons/ci";
import { useState } from "react";
import { useFeedbackItemsStore } from "../store/feedbackItemsStore";



const TextArea=()=>{
  const addNewItem=useFeedbackItemsStore(state=>state.addNewItem)
  const[value,setValue]=useState("")
  const[invalid,setInvalid]=useState(false)
  const[valid,setValid]=useState(false)

  const handleChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    const newText=e.target.value
    if(newText.length>150){
      return
    }
    setValue(newText)
 }
 
 const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  if(!value.includes("#")){
    setValue("")
    setInvalid(true)
    setTimeout(()=>{
      setInvalid(false)
    },2000)
    return
  }
 
  addNewItem(value)
  setValue("")
  setValid(true)
  setTimeout(()=>{
    setValid(false)
  },2000)
 
 }
  
 return(
    <StyledForm onSubmit={handleSubmit} >
     <textarea placeholder="" id="textarea" onChange={handleChange} value={value} className={`${invalid?"redBorder":""} ${valid?"greenBorder":""}` }/>
{ 
  invalid?   
  <label htmlFor="textarea">invalid text<CiPen /></label>:
  <label htmlFor="textarea">Enter yor feedback here, remember to #hashtag your company <CiPen /></label>
}    
 <div className="container">
       <p>{150-value.length}</p>
       <button>submit</button>
     </div>
    </StyledForm>
    )
}
export default TextArea

const StyledForm=styled.form`
 flex: 4;
 width: 70%;
 margin: auto;
 position: relative;
textarea{
  background-color: #3535357c;
  max-width: 100%;
  min-width: 100%;
  min-height: 100%;
  border: none;
  padding: 1rem;
  color: aliceblue;
  &:focus{
    outline: none;
  }
}
.greenBorder{
  border: 1px solid green;
}
.redBorder{
  border:1px solid red
}

label{
  position: absolute;
  left: 1rem;
  top: 1rem;
  font-size: .9rem;
  color:  #f0f8ffac;
}
.container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 2rem;
    position: absolute;
    bottom:10%;
    p{
        color: #f0f8ffac;
        font-style: italic;
        font-size: .7rem;
    }
    button{
        border: none;
        border-radius: 2rem;
        padding: .4rem 1rem;
        cursor: pointer;
    }
}

textarea:focus + label,
textarea:not(:placeholder-shown)+label,
textarea:-webkit-autofill + label{
  z-index: -1;
}
`;