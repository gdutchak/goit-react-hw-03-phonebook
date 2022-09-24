import styled from "styled-components";

export const Input = styled.input`
width: 200px;
margin-left: 10px;
margin-bottom: 10px;
font-size: 18px;
    height: 25px;
    border-radius: 4px;
    &:hover, &:focus {
        outline-color: blue;
    }
    `

export const Label = styled.label`
display: block;
font-size: 22px;
    &:hover, &:focus {
        color: blue;
    }
    `

export const Button = styled.button`
    width: 140px;
    height: 35px;
    font-size: 18px;
    margin-bottom: 20px;
    background-color: transparent;
    &:hover, &:focus {
        background-color: blue;
        color: white;
    }
    `