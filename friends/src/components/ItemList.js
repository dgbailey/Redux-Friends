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
    .column-heading{
        display:flex;
        flex-direction:column;
        align-items:center;
        border-bottom:1px solid lightgray;
        background:rgb(38, 38, 38);
        color:white;
        width:300px;
        

        .column-title{
            display:flex;
            justify-content:flex-start;
            align-items:center;
            box-shadow: 0 4px 2px -2px black;
            width:300px;
            background: #0003;
            
        }
        .trend-icon{
            height:20px;
            width:20px;
            margin-left: 20px;

        }

    }
   
    .global-item-container{
        // border:1px solid lightgray;
        width:300px;

        
        

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
                    <div className='tweet-container-banner'></div>
                    
                    
                    <div className='column-heading'>
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
                    <StyledNavigation/>
                </StyledDataView>



            )
    }

}

const mapStateToProps = state =>({
    responseItems:state.getData.itemData,
    fetchingData:state.getData.fetchingData
});

export default connect(mapStateToProps,{getData})(ItemList);