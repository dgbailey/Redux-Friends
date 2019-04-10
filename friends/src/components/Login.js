import styled, { css } from 'styled-components';
import React, { Component } from 'react';
const StyledLogin = styled.div `
    width:450px;
    border:1px solid lightgray;
    border-radius:10px;
    padding:20px


    .welcome-title{
        
        margin: 30px auto;

        text-align: center;
    }

    

    .inputdiv {

        margin: 40px auto;
       
        display:flex;
        justify-content:center;
        height:40px;
        width:300px;
        border-radius:5px;
        border:1px solid lightgray;
        padding:10px;

        .credential-input{
           
            width:300px;
            border:none;
            
        }
        .input-icon-cont{
            display:flex;
            justify-content:center;
            aligh-items:center;
            color:light-gray;

            .fas{
                padding: 5px;

                margin: auto;

                color: light;

                font-size: 20px;
            }
        }
    }
`

export const Login = (props) =>{
    return(
       <StyledLogin>
           <div className='animation-div'></div>
           <h1 className='welcome-title'>Hello User!</h1>
           <div className='inputdiv'>
                <input type='password' placeholder='Enter your password'
                className='credential-input'></input>
                <content className='input-icon-cont'>
                    <i class="fas fa-key"></i>
                </content>
           </div>
           <div className='login-next-steps-cont'>
                
                <button className='forgot'>Forgot password?</button>
                <button className='next'>Next</button>
           </div>



       </StyledLogin> 
    )
}