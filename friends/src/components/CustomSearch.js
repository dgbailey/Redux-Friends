import React, { Component } from 'react';
import styled, { css } from 'styled-components';


export class CustomSearch extends Component{
    constructor(){
        super();
        this.state={
            isSearching:true
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
                        <div className='tri-container demo-btn'>
                            <div id="triangle-logo"></div>
                            <h4>Search</h4>
                        </div>
                    
                    </div>
                
                </div>
                                
                            
            </div>

        )
    }
}