import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {getData} from '../actions/index';
import { connect } from 'react-redux';
import {StyledNavigation} from './Nav';

const StyledDataView = styled.div`


    display:flex;
    height:100%;
    justify-content: flex-end;
    width:100%;
    
    

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
        border-bottom:1px solid lightgray;
        background:rgb(38, 38, 38);
        color:white;
        width:608px;
        overflow:hidden;
        justify-content: space-around;
        
       

        .tweet-factory-column{
            border-left: 2px solid #7a7a7a30;
            height:100%
            overflow:scroll;
            width: 300px;
            .column-title{
                position:fixed;
                
                display:flex;
                justify-content:flex-start;
                align-items:center;
                box-shadow: 0 4px 2px -2px black;
                width:300px;
                height:70px;
                background:#1b1b1b;
                
                &.sample{
                    
                }
            }
            .trend-icon{
                height:20px;
                width:20px;
                margin-left: 20px;

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
            }

            
        }

    }
   
    .global-item-container{
        // border:1px solid lightgray;
        width:300px;
        margin-top:40px;
        padding: 10px;
        
        

        .item-container{
            border:1px solid light-gray;
            
        }
    }

    .loader-icon{
        margin-top:200px;
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
                <StyledDataView>
                    
                    
                    
                    <div className='column-container'>
                         
                        <div className='tweet-factory-column'>
                            <div className='column-title sample'>
                                <span className='trend-icon'><i class="fas fa-hashtag"></i></span><h3>Custom Search</h3>
                            </div>
                            <div className='tweet-factory-content demo'>
                                <div className='walk-through-content'>
                                    <h3>Experience your first sentiment enhanced search</h3>
                                    <div className='tri-container demo-btn'>
                                        <div id="triangle-logo"></div>
                                        <h4>Search</h4>
                                    </div>
                                
                                </div>
                            
                            </div>
                                
                            
                        </div>
                        <div className='tweet-factory-column'>
                        <div className='column-title'>
                                <span className='trend-icon'><i class="fas fa-bolt"></i></span><h3>Trending</h3>
                            </div>
                        {this.props.fetchingData && (<div className='loader-icon'><i class="fas fa-crow"></i></div>)}
                            {!this.props.fetchingData && this.props.responseItems.length > 0 && (
                                <div className='global-item-container'>
                                    
                                    {this.props.responseItems.map(item => {
                                        return(
                                            <div className='item-container'>
                                                <h3>{item.name}</h3>
                                                
                                            </div>
                                        )
                                    })}
                            
                            
                                </div>)}
                        
                        
                        </div>
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