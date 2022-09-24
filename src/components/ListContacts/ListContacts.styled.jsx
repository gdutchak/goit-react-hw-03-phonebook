import styled from "styled-components";

export const Item = styled.li`
font-size: 22px;
font-weight: bold;
margin-bottom: 15px;
`

export const ButtonList = styled.button`
margin-left: 25px;
width: 100px;
height: 25px;
font-size: 18px;
background-color: transparent;
border-radius: 4px;
    &:hover, &:focus {
        background-color: blue;
        color: white;
    }
`