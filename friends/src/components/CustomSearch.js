import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {sentimentSend} from '../actions';
import { connect } from 'react-redux';

const StyledSearch = styled.div`
    .sentiment-input-search-term{
        background:#00000030;
        padding:10px;
        border:none;
        border-bottom: 2px solid #93934d

        height:50px;
        width:240px;
        color:gray;
        font-size:20px;
        margin-bottom:30px;
    }

    
    .demo-btn{
        padding:20px 80px;
        background:#cbcb5c;
        font-weight:700;
        margin:0px auto;
        display:flex;
        align-items:center;
        border: none;
        text-align:center;
        font-size:12px;
        &:hover{
            cursor:pointer;
            opacity:.8;
        }
        
    }

`

export class CustomSearch extends Component{
    constructor(){
        super();
        this.state={
            isSearching:true,
            input:'#Custom Search',
            
            
        }


    }
    handleChanges = e => {
        this.setState({
          input: e.target.value
        });
    };

    //oncsubmit function will need to encode the URI sent to DS api. 

    render(){
        return(
            <div className='tweet-factory-column'>
                <div className='column-title sample'>
                    <span className='trend-icon'></span><h3 className='tab-title'>{this.state.input}</h3>
                </div>
                <div className='tweet-factory-content demo'>
                    <div className='walk-through-content'>
                        <h3>Experience your first #sentiment enhanced search</h3>
                        <StyledSearch>
                            <input className='sentiment-input-search-term' 
                            placeholder='#LambdaSchool' onChange={this.handleChanges}></input>

                            <button className='demo-btn'>
                                Submit Search
                                
                            </button>
                        </StyledSearch>
                       
                        
                        
                    
                    </div>
                
                </div>
                                
                            
            </div>

        )
    }
}

const mapStateToProps = state => {
    console.log('mapping state to props')
   return{
       fetchingSentiment:state.fetchingSentiment,
       sentimentData:state.sentimentData,
        error:state.error
     }

}


//Make sure you do not have two copies of react or react-dom between your friends folder directory and outside of your friends folder directory
//nmp ls react  or npm ls react-dom in each to identify
//removing duplicate copies from /friends did the tricks
export default connect(mapStateToProps,{sentimentSend})(CustomSearch);