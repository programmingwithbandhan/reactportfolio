import React from "react";
import styled from "styled-components";

const Button = styled.button`
// width: 10rem;         
display: inline-block;
font-weight: 700;
line-height: 2;
color: #fff;
text-align: center;
text-decoration: none;
// vertical-align: middle;
cursor: pointer;
user-select: none;
border: 1px solid #ffd;
background: transparent;
padding: 0.5rem 3rem;
font-size: 1rem;
transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;     
border-radius: 5px;
margin: 1rem 0;
transition: all linear .3s;

a{
    text-decoration: none;
    color: #fff;
}

&:hover{
   
    transform: scale(0.97);

    background-color: #fffddd;
border: 1px solid transparent;
    color: #000;
    a{
        color: #000;
    }
}
@media(max-width: 769px){
    margin: .5rem 0;
    font-size: .75rem;
    padding: 0.25rem 1.5rem;
    line-height: 2;
}
`

export default Button;
