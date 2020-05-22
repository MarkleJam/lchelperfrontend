import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, Card, CardBody, Col} from 'reactstrap';
import config from '../../config/dbconfig.js';
import HistoryItem from './HistoryItem.jsx';
import AddForm from './AddForm.jsx';

const axios = require('axios');

export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            problemid: this.props.match.params.id,
            history: null,
            date: null,
            comment: null
        }
    }

    options = {
        method:'get',
        url:config.ip + '',    
      }
    
    async componentDidMount() {
        this.options.method = 'get';
        this.options.url = config.ip + '/history/' + this.state.problemid;
        let ret = await axios(this.options);
        this.setState({history:ret.data});    
        //console.log(this.state.history)
      }

      goHome = (e) => {
        window.location.href = '/';
      }

    render() {
        if(this.state.history == null) return null;
        return <div>
            <h1>History of Problem No.{this.state.problemid}</h1>
            {this.state.history.map(item => {
                return <HistoryItem {...item} key = {item.id}></HistoryItem>
            })}
            <br/>
            <br/>
            <AddForm id={this.state.problemid}></AddForm>
            <Button color='success' onClick={this.goHome}>Home</Button>
        </div>
    }
}