import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {StyledNavigation} from './Nav';
import ItemList from './ItemList';
import {DataVisVue} from './DataVisVue';

const StyledDashboard = styled.div`
    height:100%;
    display:flex;
    
    position:relative;
    
    .data-vis-vue-container{
        width:100%;
        height:100%;
       
        

    }
    .vis-vue-background{
            height:100%;
            width:100%;
            background:#00e4ff;
            position:absolute;
        }

`




export const DashboardVue = () =>{

        return(

            <div className='complete-dashboard-container'>
                <StyledDashboard>
                    
                    <DataVisVue/>
                    <ItemList/>
                    <StyledNavigation/>
                </StyledDashboard>
            
            
            
            </div>


        )

}

