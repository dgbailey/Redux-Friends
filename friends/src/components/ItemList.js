import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {getData} from '../actions/index';
import { connect } from 'react-redux';
import {StyledNavigation} from './Nav';
import {CustomSearch} from './CustomSearch';

const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576,
}

const media = Object.keys(sizes).reduce((acc,label) => {
    acc[label] = (...args) => 
    css`@media (max-width:${sizes[label]}px){
        ${css(...args)}

    }`

    return acc

    
},{})

const StyledDataView = styled.div`


    display:flex;
    height:100%;
    justify-content: flex-end;
    min-width: 604px;
    overflow: scroll;
    max-width: 604px;
    
   
    
    

    .tweet-container-banner{
        width:50px;
        length:100%
        background:
        background:rgb(38, 38, 38);
    }
    .column-container{
        display:flex;
        flex-direction:row;
        align-items:center;
        
        border-left: 6px solid #272727;
        background: rgb(30, 30, 30);
        color: white;
        max-width:608px;
        overflow:hidden;
        justify-content: space-around;

        
        ${media.desktop`flex-direction:column-reverse;`}

        .tweet-factory-column{
            border-right: 6px solid #272727;
            height:100%
            overflow:scroll;
            width: 300px;
            margin:1px;

            
            .column-title{
                position:fixed;
                
                display:flex;
                justify-content:flex-start;
                align-items:center;
                // box-shadow: 0 4px 2px -2px black;
                width: 289px;
                height: 50px;
                background: #2c2a2a;
                
                &.sample{
                    color: white;
                    
                    
                    h3{
                        color:white;

                    }
                }
            }
            .trend-icon{
               
                margin-left: 20px;

            }
            .tweet-factory-content{
                display:flex;
                flex-direction:column;
                align-items:center;
                
            }
            .tweet-factory-content.demo{
                
                .walk-through-content{
                    padding:20px;
                    display:flex;
                    flex-direction:column;
                    text-align:center;
                    justify-content:center;
                    margin-top:50%;
                    align-items:center;

                    .tri-container{
                        width: 200px;
                        height: 63px;
                        background: #959c21;
                        overflow: hidden;
                        position: relative;

                        h4{
                            position: absolute;
                            top: 0;
                            color: black;
                            width: 100%;


                        }
                        
                    }
                        
                        
                    }
                    #triangle-logo{
                        height: 60px;

                        width: 200px;

                        background: #fffc00;

                        -webkit-transform: skewY(18deg);

                        -ms-transform: skewY(18deg);

                        -webkit-transform: skewY(10deg);

                        -ms-transform: skewY(10deg);

                        transform: skewY(9deg);

                        -webkit-transform-origin: right;
                    }

                }

                h3{
                    color:#d3d3d369;
                }

                .tab-title{
                    color:white;
                    margin-left:5px;
                }
            }

            
        }

    }
   
    .global-item-container{
        // border:1px solid lightgray;
        
        margin-top:40px;
        width:100%;
        
        
        

        .item-container{
            border:1px solid light-gray;
            padding:10px;
            display: flex;

            justify-content: space-between;
            
        }

        .tweet-volume{
            display:flex;
            align-items:center;

            .fa-users{
                padding-right:2px;
            }
        }
    }

    .loader-icon{
        margin-top:200px;
        margin:200px auto
    }

    .fa-crow{
        font-size:100px;
        color:black;
        opacity:.1;
        animation:loadcrow  ease  2s infinite;
    }

    @keyframes loadcrow {
        from {
          
          color:black;
            opacity:.1;
        }
        to {
            color:white;
          opacity:.5;
          
        }
    }
    
   

`

class ItemList extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[]
        }
    }

    componentDidMount(){
        this.props.getData()
    }

    render(){
        return( 
                <StyledDataView id={!this.props.toggleStatus ? 'hidden':''}>
                    
                    
                    
                    <div className='column-container'>
                         
                        
                        
                        <div className='tweet-factory-column'>
                        <div className='column-title'>
                                <span className='trend-icon'><i class="fas fa-bolt"></i></span><h3 className='tab-title'>Trending</h3>
                            </div>
                            <div className='tweet-factory-content'>
                        {this.props.fetchingData && (<div className='loader-icon'><i class="fas fa-crow"></i></div>)}
                            {!this.props.fetchingData && this.props.responseItems.length > 0 && (
                                <div className='global-item-container'>
                                    
                                    {this.props.responseItems.map(item => {
                                        return(
                                            <div className='item-container'>
                                                <h3>{item.name}</h3>
                                                <span className='tweet-volume'>
                                                    <i class="fas fa-users"></i><h4>{item.tweet_volume}</h4>
                                                </span>
                                                
                                                
                                            </div>
                                        )
                                    })}
                            
                            
                                </div>)}
                            </div>
                        
                        
                        </div>
                        <CustomSearch/>
                    </div>
                    
                </StyledDataView>



            )
    }

}

const mapStateToProps = state =>({
    responseItems:state.getData.itemData,
    fetchingData:state.getData.fetchingData
});

export default connect(mapStateToProps,{getData})(ItemList);