import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    
    flex-direction: column;
    
    .cardContent{
        background-color: #4C3575;
    width: 350px;
    padding: 20px;
    border-radius: 10px 5px 10px 5px;
    border: .5px solid white;
    margin-top: 30px;
    display: flex;
    justify-content:space-between;
    align-items: center;

    }

    p{
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
    }
`