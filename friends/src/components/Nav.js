import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const StyledNav = styled.div`

    
    height:100%;
    width:100px;
    display:flex;
    flex-direction:column;
    
    border-bottom:1px solid lightgray;
    padding:10px;
    font-family: 'Ubuntu', sans-serif;
    background: rgb(15, 15, 20);
    color:white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;

    .global-nav-and-dash{

        
        display:flex;
        flex-direction:column;
        
        .skinny-nav{
            display:flex;
            flex-direction:column;
            color:white;
            font-size:30px;
            .fas,.fab{
                width:auto;
                margin:10px;
                text-align:center;
            }


        }

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
            
            align-items: center;
            flex-direction:column;
    
            
            
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
                    <div className='skinny-nav'>
                        <i class="fas fa-angle-double-left"></i>
                        <i className="fab fa-searchengin"></i>
                        <i className="fas fa-user-alt"></i>
                        <i class="fas fa-hashtag"></i>
                
                    </div>
                </div>
                
               
                

            </StyledNav>
            <div className='global-right-sidebar'>
                
            </div>
        </div>



    )
}