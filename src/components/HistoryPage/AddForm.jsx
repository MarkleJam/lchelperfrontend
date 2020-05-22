import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, Card, CardBody, Col} from 'reactstrap';
import config from '../../config/dbconfig.js';
import HistoryItem from './HistoryItem.jsx';

const axios = require('axios');

export default class HistoryAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            problemid: this.props.id,            
            date: null,
            comment: null
        }
    }

    postOptions = {
        method: 'post',
        url: config.ip + '/history' + '/doAdd'
      }
    
    submitAdd = async (e) => {
        e.preventDefault();
        let newHistory = {problemid:this.state.problemid, date:this.state.date, comment:this.state.comment};
        this.postOptions.data = newHistory;
        await axios(this.postOptions);                                                
        window.location.reload();
    }

    onChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }

    render() {        
        return <div>            
            <Col style={{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>
            <Card >
                <CardBody>
                <Form onSubmit={this.submitAdd}>                    
                    <FormGroup>
                        <Label>Date</Label>                     
                        <Input type='date' name='date' onChange={this.onChange} value={this.state.last}/>                
                    </FormGroup>
                    <FormGroup>
                        <Label>Comment</Label>                     
                        <Input type='textarea' name='comment' onChange={this.onChange} value={this.state.last}/>                
                    </FormGroup>
                    <Button color='success' >Add New</Button>
                </Form>
                </CardBody>            
            </Card>
            </Col>      
        </div>
    }
}