import React, { Component } from 'react';
import styled, { css } from 'styled-components';


const StyledDataVisNav = styled.div`
    background:rgb(15,15,20);
    display:flex;
    align-items:flex-end;
    height: 52px;
    width:100%;

    .styling-div{
        background:#0f8da8;
        width:100%
        height:5px;

    }
`


export const DataVisNav = () =>{
    return(
        <StyledDataVisNav>
            <div className='styling-div'></div>

        </StyledDataVisNav>

    )
}