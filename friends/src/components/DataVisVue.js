import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {DataVisNav} from './DataVisNav';

const StyledDataVisVue = styled.div`

    display:flex;
    flex-direction:column;
    background:#00b6cc;
    align-items:center;
    height:100%;
   

    .fas{
        margin-top:50%;
        font-size:50px;
    }

`

export const DataVisVue = ()=>{

    return(
        <div className='data-vis-vue-container'>
            <StyledDataVisVue>
                <DataVisNav/>
                <i className="fas fa-poll"></i>
            </StyledDataVisVue>
        </div>
    )
}