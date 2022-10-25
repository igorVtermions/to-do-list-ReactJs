import styled from "styled-components";

export const Container = styled.div`
   
    
    
    .Container-card{
        display: flex;
        flex-direction: column;
        background-color: #4C3575;
        padding: 20px;
        width: 350px;
        border-radius: 10px 5px 10px 5px;
        border: .5px solid white;

    }

    label{
        text-align: center;
        font-size: 20px;
        font-weight: bolder;
        margin-bottom: 10px;
    }

    input{
        padding: 10px;
        border-radius: 10px 5px 10px 5px;
        border: none;
        margin-bottom: 5px;
    }

    button{
        padding: 10px;
        border: 2px solid white;
        border-radius: 10px 5px 10px 5px;
        font-weight: bolder;
        background-color: transparent;
        color: white;
        cursor: pointer;
    }
`