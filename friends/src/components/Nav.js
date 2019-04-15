import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const StyledNav = styled.div`

    
    height:60px;
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid lightgray;
    padding:10px;
    font-family: 'Ubuntu', sans-serif;
    background: rgb(15, 15, 20);
    color:white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;

    .global-nav-and-dash{

        width:400px;
        display:flex;
        margin-left:20px;

        .logo-top-left{
        
            display:flex;
            align-items:center;
            font-family: 'Ubuntu', sans-serif;
            text-align: center;
            font-size: 15px;
            color:white;
            // letter-spacing: 1px;
        }

        .feature-categories{
            display:flex;
            color:white;
            width:200px;
            align-items: center;
    
            ul{
                display:flex;
                list-style-type:none
                
            }
            li{
                text-decoration:none;
                margin-right:30px;
            }
        }

    }
    

    

    .right-item-container{
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:20px;
        padding:10px;
    }

   


`

export const StyledNavigation = () =>{
    return(
        <div className='outer-most-global-container'>
            <StyledNav>
                <div className='global-nav-and-dash'>
                    <div className='logo-top-left'><h1>flock</h1></div>
                    <div className='feature-categories'>
                
                    <ul>
                        <li>#Trends</li>
                        <li>Dashboard</li>
                    </ul>
                </div>
                </div>
                <div className='right-item-container'>
                    <i className="fas fa-user-alt"></i>
                
                </div>
                

            </StyledNav>
            <div className='global-right-sidebar'>
                
            </div>
        </div>



    )
}