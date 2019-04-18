import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {sentimentSend} from '../actions';
import { connect } from 'react-redux';

var TwitterWidgetsLoader = require('twitter-widgets');

const StyledSearch = styled.div`
    

    

    
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

    #tweet{
        width:275px;
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
                <div className='search-bar-container'>
                    <div className='search-bar-hidden-drop'>
                        <input className='sentiment-input-search-term' 
                                placeholder='#LambdaSchool' onChange={this.handleChanges}></input>

                                <button className='demo-btn'>
                                    <span>Submit Search</span><i class="fas fa-arrow-circle-right"></i>
                                    
                                </button>
                    
                    </div>
                </div>
                <div className='column-title sample'>
                    <span className='trend-icon'></span><h3 className='tab-title'>{this.state.input}</h3>
                </div>
                <div className='tweet-factory-content demo'>
                    <div className='walk-through-content'>
                        <h3>Enhance your experience with #sentiment search</h3>
                        <StyledSearch>
                            

                            {
                                TwitterWidgetsLoader.load(function(err, twttr) {
                                    if (err) {
                                        //do some graceful degradation / fallback
                                        return;
                                    }
                                
                                    twttr.widgets.createTweet('20', {theme:'dark'},document.getElementById('tweet'));
                                })}

                            <div id='tweet'></div>
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