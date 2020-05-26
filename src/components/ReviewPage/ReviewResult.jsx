import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, Form } from "reactstrap";
import queryString from 'query-string';
import {Container, Button} from 'reactstrap';
import config from '../../config/dbconfig.js'
import Table from '../Table.jsx';

const axios = require('axios');

export default class ReviewResult extends Component {
    constructor(props) {
        super(props);
        let params = queryString.parse(this.props.location.search);
        //console.log(params);        
        this.state = {            
            interval: params.interval,
            items:null           
          }     
    }

    options = {
        method:"get",
        url: config.ip + '/item/review',
        params:{
            interval: null,                     
        }    
      }

      componentDidMount() {
        this.options.params.interval = this.state.interval;                    
        axios(this.options).then((result) => {
            console.log(result.data);            
            this.setState({items: result.data})
        });
      }

      goHome = (e) => {
        window.location.href = '/';
      }

    render(){                  
        return (
            <Container className="App">
              <div className="row">
                <div className="col">
                  <h2>
                    You need to review these, which you have never accessed over {this.state.interval} days!
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  {this.state.items!==null && <Table records={this.state.items} review="yes"></Table>}
                </div>
              </div>               
              <Button color='success' onClick={this.goHome}>Home</Button>
            </Container>            
          );
    }
}