import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {getData} from '../actions/index';
import { connect } from 'react-redux';
import {StyledNavigation} from './Nav';

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
                <div>
                    <StyledNavigation/>

                    {this.props.fetchingData && (<div><h1>Waiting....</h1></div>)}

                    {!this.props.fetchingData && this.props.responseItems.length > 0 && (
                        <div className='item-container'>
                            {this.props.responseItems.map(item => {
                                return(
                                    <div className='item-container'>
                                        <h3>{item.name}</h3>
                                        
                                    </div>
                                )
                            })}
                    
                    
                        </div>)}
                </div>



            )
    }

}

const mapStateToProps = state =>({
    responseItems:state.getData.itemData,
    fetchingData:state.getData.fetchingData
});

export default connect(mapStateToProps,{getData})(ItemList);