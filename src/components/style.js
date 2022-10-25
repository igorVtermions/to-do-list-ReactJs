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
        transition: all .4s ease-in;
    }

    p:hover{
        transform: scale(1.2);
    }

    .checkBox{
        position: relative;
	       cursor: pointer;
    }

    .checkBox:before{
        content: "";
         display: block;
         position: absolute;
         width: 20px;
         height: 20px;
         top: 0;
         left: 0;
         background-color:#e9e9e9;
    }
    .checkBox:checked:before{
        content: "";
         display: block;
         position: absolute;
         width: 20px;
         height: 20px;
         top: 0;
         left: 0;
         background-color:#F10086;
    }
    .checkBox:checked:after{
        content: "";
         display: block;
         width: 5px;
         height: 10px;
         border: solid white;
         border-width: 0 2px 2px 0;
         -webkit-transform: rotate(45deg);
         -ms-transform: rotate(45deg);
         transform: rotate(45deg);
         position: absolute;
         top: 2px;
         left: 6px;
    }

`