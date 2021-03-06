import React, { Component } from 'react';
import {Row, Button} from 'reactstrap';
import ModelForm from './Modal.jsx'
import config from '../config/dbconfig.js';
import HistoryModel from './Pages/Historymodal.jsx';
import DeleteModel from './Pages/deleteModal.jsx';
const axios = require('axios');

export default class Item extends Component{
    constructor(props) {
        super(props);        
        this.state = {
            id: this.props.id,
            name: this.props.name,
            diff: this.props.diff,
            type1: this.props.type1,
            type2: this.props.type2,
            type3: this.props.type3,
            grasp: this.props.grasp,
            createAt: this.props.createAt,
            last: this.props.md
        }
    }

    historyBtnOnClick = () => {
        window.location.href="/history/" + this.state.id;
    }

    render() {      
        let historyBtn = <Button color='success' size='sm' onClick={this.historyBtnOnClick}> Historys </Button>  
        return( 
        <tr>
            <td>{this.state.id}</td>
            <td>{this.state.name}</td>
            <td>{this.state.diff}</td>
            <td>{this.state.type1}</td>
            <td>{this.state.type2}</td>
            <td>{this.state.type3}</td>
            <td>{this.state.grasp}</td>           
            <td>
                <Row>
                    <HistoryModel id={this.state.id}></HistoryModel>
                    <ModelForm buttonLabel='Edit' editState={this.state}></ModelForm>
                    <DeleteModel id={this.state.id} table="item"></DeleteModel>                
                </Row>
            </td>
            <td>{historyBtn}</td>
            {this.props.review && <td>{this.state.last}</td>}
        </tr>)
    }    
}