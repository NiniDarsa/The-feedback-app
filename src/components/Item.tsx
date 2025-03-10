import { RxTriangleUp } from "react-icons/rx";
import { ItemProp } from "./type";
import styled from "styled-components";
import {useState} from "react";
import { useFeedbackItemsStore } from "../store/feedbackItemsStore";

type SingleItemProp={
    item: ItemProp
}
const SingleItem=({item}:SingleItemProp)=>{
    const handleDelete=useFeedbackItemsStore(state=>state.DeleteItem)
    const[number,setNumber]=useState(item.upvoteCount)
    const[big,setBig]=useState(false)

    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const handleClick=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.stopPropagation()
        setNumber(number+1)
        setButtonDisabled(true)
    }
    const handleBigger=()=>{
      setBig(!big)
    }

   
    return(
        <StyleItem onClick={handleBigger}   >
          <main className={`${big? "big" :""}`}>
            <button onClick={handleClick} className="number" disabled={isButtonDisabled} >
                <p>{!isButtonDisabled&&<RxTriangleUp />}</p>
                <p className="blackNumber">{number}</p>
            </button>

            <div className="letter">
                <p>{item.badgeLetter}</p>
            </div>

            <div className="main">
                <h3>{item.company}</h3>
                <p>{item.text}</p>
            </div>

            <div className="day">
                <p>{`${item.daysAgo<1?"now":item.daysAgo+'d'}`}</p>
            </div>
          
            <button className="delete" onClick={()=>handleDelete(item.id)}>delete</button>
            </main>
        </StyleItem>
    )
}
export default SingleItem

const StyleItem=styled.li` 
    main{
        height: 4rem;
        padding: 2rem 0rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom:2px solid #b9b7b758;
        transition: all .2s ease;

        &:hover{
        transform: translateX(2px);
        cursor: pointer;
    }
    }
    .big{
      height: 5rem  ; 
    }
    .number{
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    .blackNumber{
        color: black;
    }
    .letter{
        flex:1;
        p{
        padding: .2rem;
        width: 90%;
        border-radius: .2rem;
        font-weight: 700;
        background-color: purple;
        color: aliceblue;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        }
        
    }

&:nth-child(odd){
  .letter p{
    background-color:  #800080;
  }
}

&:nth-child(even){
  .letter p{
    background-color: #801980ca;
  }
}
   

   .main{
      flex:10;
      h3{
        color: #000000df;
      }
   }

   .day{ 
      flex:1;
      text-align: center;
      color: grey;
   }
   .delete{
    margin-right: .2rem;
    color: aliceblue;
    background-color: #BB60EC;
    border: none;
    padding: .5rem 1rem;
    cursor: pointer;
   }
`