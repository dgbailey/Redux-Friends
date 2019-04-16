import React, { Component } from 'react';
import styled, { css } from 'styled-components';


const StyledSearch = styled.div`
    .sentiment-input-search-term{
        background:#00000030;
        padding:10px;
        border:none;
        border-bottom:2px solid #ffff60
        height:50px;
        width:200px;
        color:gray;
        font-size:20px;
    }


`

export class CustomSearch extends Component{
    constructor(){
        super();
        this.state={
            isSearching:true,
            input:''
        }


    }

    render(){
        return(
            <div className='tweet-factory-column'>
                <div className='column-title sample'>
                    <span className='trend-icon'><i class="fas fa-hashtag"></i></span><h3 className='tab-title'>Custom Search</h3>
                </div>
                <div className='tweet-factory-content demo'>
                    <div className='walk-through-content'>
                        <h3>Experience your first sentiment enhanced search</h3>
                        <StyledSearch>
                            <input className='sentiment-input-search-term' placeholder='#LambdaSchool'></input>
                        </StyledSearch>
                       
                        
                        {/* <div className='tri-container demo-btn'>
                            <div id="triangle-logo"></div>
                            
                        </div> */}
                    
                    </div>
                
                </div>
                                
                            
            </div>

        )
    }
}