import styled, { css } from 'styled-components';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Graphic} from './Graphic';
import twitlogo from '../svg';
import {initiateLogin} from '../actions';


const StyledLoginContainer=styled.div`
    display:flex;
    border:1px solid lightgray;
    border-radius:10px;


`
const StyledLogin = styled.div `
    width:400px;
    min-height:500px;
    
    border-radius:10px;
    padding:20px
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position:relative;
    overflow: hidden;

    .animation-div{
        height:7px;
        position:absolute;
        z-index:5;
        width:100%;
        top:0;
        border-raduis:5px;
       
    }




    .welcome-title{
        
        margin: 30px auto;
        font-family: 'Ubuntu', sans-serif;
        text-align: center;
        font-size: 50px;
        color:#000;
        // letter-spacing: 1px;
    }
    .flock-output-ani{
        position:relative;
        display:flex;
        justify-content:center;
        height:100px;
        width:200px;
        background:powderblue;

        h2{
            height: 60px;
    
            width: 60px;
        }

        .output-items{
            height:50px;
            width:62px;
            border:1px solid red;
            display:flex;
            flex-wrap:wrap;
            position:absolute;
            top:30px;

            .output{
                height:20px;
                width:20px
                border:1px solid yellow;

                .one{
                    animation:infinite-spinning 4s infinite;
                }
                
            }
        }

    }
    @keyframes infinite-spinning {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
    }

    .inputdiv {

        margin: 40px auto;
       
        display:flex;
        justify-content:center;
        height: 64px;
        width: 350px;
        border-radius:5px;
        border:1px solid lightgray;
        padding:10px;
        position:relative;

       
        .credential-input{
           
            width:300px;
            border:none;
            font-size:15px;
            
        }

        .pw-form{
            display:flex;
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

            .fa-ellipsis-h{
                display:none 
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
            color:#000;
            
        }
       
    }
    .password{
        margin-bottom:0px;
    }

    .transform-inputdiv{
        border:2px solid #000;
    }
    .login-next-steps-cont{
        width:372px;
        padding:10px;
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
        background:#000;
    }

    .forgot{
        background:none;
        color:#515151;

        padding:5px;
        &:hover{
            background:#7c7cad1f;
        }
        
    }

    .pulse {
        animation: pulse  3s  infinite;
        -webkit-animation:pulse ease 2s  infinite;
        -moz-animation: pulse ease 2s  infinite;
      }
      
      @keyframes pulse {
        0% {
          background-color: lightgray;
          margin-left:-300%;
          
          
        }

        20%{
            
            background-color: blue;
            
        }

        30%{
            background-color: blue;
            
        }

        80% {
            background-color:white;
            
        }
        100% {
          background-color: white;
          margin-right:-300%;
        }
      }
      
     
`

class Login extends Component  {
    constructor(props){
        super(props);
        this.state={
            credentials:{
                username:'',
                password:''
            },
            clicked:false,
            submitpw:false
            
        }
    }

    componentDidUpdate(){
        console.log('props',this.props)
    }

    handleChanges = e =>
        this.setState({credentials:{
            ...this.state.credentials,
            [e.target.name]:e.target.value
        }})
    

    loginAnimate(){
        
        this.setState({clicked:true});
        console.log('animatefire')
    }

    escapeAnimate(){
        console.log('escape')
        this.setState({clicked:false})
    }

    submitPw(){
        console.log('submit')
        this.setState({submitpw:true})
    }

    login = e => {
        e.preventDefault();
        this.props.initiateLogin(this.state.credentials)

        .then(() => this.props.history.push('/protected'))
    }
   
  
    render(){
        return(
            <div className='gen-login-container'>
                <StyledLoginContainer>
                    <StyledLogin onClick={(e) => {e.stopPropagation();this.escapeAnimate()}}>
                    
                

                
                    <div className={`animation-div${this.state.submitpw ?' pulse':''}`}></div>
                    <h1 className='welcome-title'>flock</h1>
                    <div className='flock-output-ani'>
                        <div className='output-items'>
                            
                            <img className='output one' src='`${twitlogo}`'/>
                            <img className='output'></img>
                            <img className='output'></img>
                            <img className='output'></img>
                            <img className='output'></img>
                        </div>
                        <h2>
                       
                        <svg class="heading-icon">
                            <circle fill="#000" cx="33" cy="33" r="33"></circle>
                            <path d="M38.4 15l1-3h1l1.2 3c.2.2.5.2.7.3l2.2-2.5 1 .4-.2 3.3c.2 0 .3.2.5.4l3-1.5.7.7-1.4 3 .5.5h3.3l.4.8-2.5 2.2c0 .2 0 .5.2.7l3 1v1l-3 1.2-.3.8 2.5 2-.4 1-3.3-.2-.4.7 1.5 2.8-.7.7-3-1.4c0 .2-.4.4-.6.5l.2 3.3-1 .4-2-2.5c-.3 0-.6 0-1 .2l-1 3h-1l-1-3c-.2-.2-.5-.2-.8-.3l-2 2.5-1-.4.2-3.3-.7-.4-2.8 1.5-.7-.7 1.4-3c-.2 0-.4-.4-.5-.6l-3.3.2-.4-1 2.5-2c0-.3 0-.6-.2-1l-3-1v-1l3-1c.2-.2.2-.4.3-.7l-2.5-2.2.4-1 3.3.2c0-.2.2-.3.4-.5l-1.5-3 .7-.7 3 1.4.5-.5v-3.3l.8-.4 2.2 2.5s.5 0 .7-.2z" fill="#00b6cc" transform="rotate(143.20083851999883 40 25)">
                            <animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="360 40 25"
                          to="0 40 25"
                          dur="10s"
                          repeatCount="indefinite"/></path>
                            <circle fill="#000" cx="40" cy="25" r="2"></circle>
                            <path d="M21.6 26.8L19 25l-1.3 1 1.4 3c0 .2-.3.4-.5.6l-3-.8-1 1.4 2.4 2.3-.4.8-3.2.3-.3 1.6 3 1.4v.8l-3 1.4.4 1.6 3.2.3c0 .3.2.5.3.8l-2.4 2.3.8 1.4 3-.8.7.6-1.3 3 1.3 1 2.6-1.8c.3 0 .5.3.8.4l-.3 3.2 1.6.6 2-2.7c.2 0 .5 0 .7.2l1 3h1.5l1-3c0-.2.4-.2.7-.3l2 2.7 1.4-.6-.4-3.2c.3 0 .5-.3.8-.4L37 49l1.3-1-1.4-3c0-.2.3-.4.5-.6l3 .8 1-1.4-2.4-2.3.4-.8 3.2-.3.3-1.6-3-1.4v-.8l3-1.4-.4-1.6-3.2-.3c0-.3-.2-.5-.3-.8l2.4-2.3-.8-1.4-3 .8-.7-.6 1.3-3-1.3-1-2.6 1.8c-.3 0-.5-.3-.8-.4l.3-3.2-1.6-.6-2 2.7c-.2 0-.5 0-.7-.2l-1-3h-1.5l-1 3c0 .2-.4.2-.7.3l-2-2.7-1.4.6.4 3.2c-.3 0-.5.3-.8.4z" fill="#00e4ff" > 
                            <animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 28 37"
                          to="360 28 37"
                          dur="10s"
                          repeatCount="indefinite"/></path>
                            <circle fill="#000" cx="28" cy="37" r="3"></circle>
                        </svg>
                    </h2> 
                    </div>
                    <div onClick={(e) => {e.stopPropagation();this.loginAnimate()}} className={`inputdiv password${this.state.clicked ?' transform-inputdiv':''}`}>
                        <form  className='pw-form' >
                            
                            <input name='username' value={this.state.credentials.username} onChange={this.handleChanges}
                            className='credential-input'>
                    
                            </input>
                            <div className={`fo-placeholder${this.state.clicked ?' transform-placeholder':''}`}>Enter Your Username
                            </div>
                            <div className='input-icon-cont'>
                                <i className="fas fa-user-lock"></i>
                            </div>
                        </form>
                        
                    </div>
                    <div onClick={(e) => {e.stopPropagation();this.loginAnimate()}} className={`inputdiv${this.state.clicked ?' transform-inputdiv':''}`}>
                        <form  className='pw-form' onSubmit={ e=>{e.preventDefault();this.submitPw();setTimeout((()=>this.login(e)),2000)}}>
                        
                            <input type='password' name='password' value={this.state.credentials.password} onChange={this.handleChanges}
                            className='credential-input'>
                    
                            </input>
                            <div className={`fo-placeholder${this.state.clicked ?' transform-placeholder':''}`}>Enter Your Password
                            </div>
                            <div className='input-icon-cont'>
                                <i className="fas fa-key"></i>
                            </div>
                        </form>
                        
                    </div>
                    <div className='login-next-steps-cont'>
                            
                            <button className='forgot'>Forgot password?</button>
                            <button className='next' onClick={(e) => {e.stopPropagation();this.submitPw();setTimeout((()=>this.login(e)),2000)}}>Next</button>
                    </div>
                    



                </StyledLogin> 
               
                    
                </StyledLoginContainer>
            </div>
        )

    }
}

const mapStateToProps = state => {
    console.log('mapping state to props')
   return{
       loginStart:state.loginStart,
        error:state.error
     }

}


//Make sure you do not have two copies of react or react-dom between your friends folder directory and outside of your friends folder directory
//nmp ls react  or npm ls react-dom in each to identify
//removing duplicate copies from /friends did the tricks
export default connect(mapStateToProps,{initiateLogin})(Login);
