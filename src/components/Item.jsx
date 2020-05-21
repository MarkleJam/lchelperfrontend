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
            //last: (this.props.lastaccessed).substring(0,10),
            modal: false,
        }
    }

    render() {      
        let historyBtn = <Button color='success' size='sm'> Historys </Button>  
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
                    <DeleteModel id={this.state.id}></DeleteModel>                
                </Row>
            </td>
            <td>{historyBtn}</td>
        </tr>)
    }    
}