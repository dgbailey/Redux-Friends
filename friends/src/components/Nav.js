import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const StyledNav = styled.div`

    
    height:100%;
    width:60px;
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
            margin-top:20px;
            display:flex;
            flex-direction:column;
            color:white;
            font-size:18px;
            box-sizing: border-box;
            .fas,.fab{
                width:auto;
                margin:10px;
                text-align:center;
                padding-bottom:20px;
                

                &:hover{
                    cursor:pointer;
                    color:#00b6cc;
                    border-radius:50%;
                    
                }
            }


        }

        .logo-top-left{
        
            display:flex;
            align-items:center;
            justify-content:center;
            font-family: 'Ubuntu', sans-serif;
            text-align: center;
            font-size: 15px;
            color:white;
            // letter-spacing: 1px;
            h1{padding: 10px;
                position: absolute;
                top: 50%;
                color: black;
                z-index: 1;
                color: black;
                position: absolute;
                top: -69%;;
             
            color: black;}
            .tri-container{
                width: 30px;
                height: 38px;;
                background: #00b6cc;
                overflow: hidden;
                position: relative;
            }
                
                
            }
            #triangle-logo{
                height: 34px;
                width: 30px;
                background: #00e4ff;
                transform: skewY(18deg);
                transform-origin: right;
            }
        }
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
            
                   
            <div className='relative-pos-barrier'>
                <StyledNav>
                    <div className='global-nav-and-dash'>
                        <div className='logo-top-left'>
                            <div className='tri-container'>
                                <div id="triangle-logo"></div>
                                <h1>f</h1>
                            </div>

                            
                        </div>
                        <div className='skinny-nav'>
                            <i class="fas fa-angle-double-left"></i>
                            <i class="fas fa-search"></i>
                            <i className="fas fa-user-alt"></i>
                            
                    
                        </div>
                    </div>
                    
                
                    

                </StyledNav>
            </div>
            
                
            
        </div>



    )
}