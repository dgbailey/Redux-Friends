import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {DataVisNav} from './DataVisNav';
import {LoaderGears} from './LoaderGears';
import { connect } from 'react-redux';

const StyledDataVisVue = styled.div`

    display:flex;
    flex-direction:column;
    background:#00b6cc;
    align-items:center;
    

    height:100%;
   
    .static-state-icon{
        margin:auto;
        font-size:60px;
    }
    
    .expanded{
        width:100%;
    }

`

export class DataVisVue extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:[],
            test:false
        }
    }
    render(){
        return(
            <div className={`data-vis-vue-container${!this.props.toggleStatus ? ' expand':''}`}>
                <StyledDataVisVue>
                    <DataVisNav/>
                    {/* <i className="fas fa-poll"></i> */}
                    {!this.state.test ? (<LoaderGears/>):<div className='static-state-icon'><i className="fas fa-poll"></i></div>}
                </StyledDataVisVue>
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
export default connect(mapStateToProps,{})(DataView);