import styled, { css } from 'styled-components';
import React, { Component } from 'react';
const StyledLogin = styled.div `
    width:450px;
    min-height:500px;
    border:1px solid lightgray;
    border-radius:10px;
    padding:20px
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;


    .welcome-title{
        
        margin: 30px auto;
        font-family: 'Exo', sans-serif;
        text-align: center;
        font-size: 50px;
        color:#24097b;
        // letter-spacing: 1px;
    }

    

    .inputdiv {

        margin: 40px auto;
       
        display:flex;
        justify-content:center;
        height:40px;
        width:350px;
        border-radius:5px;
        border:1px solid lightgray;
        padding:10px;
        position:relative;

        .credential-input{
           
            width:300px;
            border:none;
            font-size:15px;
            
        }
        .input-icon-cont{
            display:flex;
            justify-content:center;
            aligh-items:center;
            color:light-gray;

            .fas{
                padding: 5px;

                margin: auto;

                color: lightgray;

                font-size: 20px;
            }
        }
        .fo-placeholder{
            position:absolute;
            left: 0;
            top: 17px;
            padding-left: 10px;
            font-size:20px;
            color: gray;
            z-index:1;
            transition: transform 150ms cubic-bezier(0.4,0,0.2,1),opacity 150ms cubic-bezier(0.4,0,0.2,1);
            background:white;
        }

        .transform-placeholder{
            padding:0px 10px;
            transform: scale(.75) translateY(-39px);
            color:#24097b;
            
        }
       
    }

    .transform-inputdiv{
        border:2px solid #24097b;
    }
    .login-next-steps-cont{
        width:372px;
        display:flex;
        justify-content:space-between;
    }

    button{
        border:none;
        padding: 10px 30px;
        font-size:15px;
        border-radius:5px;
        font-weight:600;
        &:hover{
            cursor:pointer;
            opacity:.8;
        }
        
        
    }
    .next{
        color:white;
        background:#41bd42;
    }

    .forgot{
        background:none;
        color:#7c7cad;

        padding:5px;
        &:hover{
            background:#7c7cad1f;
        }
        
    }
`

export class  Login extends Component  {
    constructor(){
        super();
        this.state={
            password:'',
            clicked:false
        }
    }

    loginAnimate(){
        
        this.setState({clicked:true});
        console.log('animatefire')
    }

    escapeAnimate(){
        console.log('escape')
        this.setState({clicked:false})
    }

   

    render(){
        return(
        <StyledLogin onClick={(e) => {e.stopPropagation();this.escapeAnimate()}}>
            <div className='animation-div'></div>
            <h1 className='welcome-title'>talweg</h1>
            <h3 className='warm-welcome'>Hi Dustin!</h3>
            <div onClick={(e) => {e.stopPropagation();this.loginAnimate()}} className={`inputdiv${this.state.clicked ?' transform-inputdiv':''}`}>
                    <input type='password' 
                    className='credential-input'>
            
                    </input>
                    <div className={`fo-placeholder${this.state.clicked ?' transform-placeholder':''}`}>Enter Your Password
                    </div>
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
}