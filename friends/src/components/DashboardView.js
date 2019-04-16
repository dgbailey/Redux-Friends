import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {StyledNavigation} from './Nav';
import ItemList from './ItemList';


const StyledDashboard = styled.div`
    height:100%;
    display:flex;
    


`




export const DashboardVue = () =>{

        return(

            <div className='complete-dashboard-container'>
                <StyledDashboard>

                    <ItemList/>
                    <StyledNavigation/>
                </StyledDashboard>
            
            
            
            </div>


        )

}

