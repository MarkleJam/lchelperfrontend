import React, {Component} from 'react';
import config from '../../config/dbconfig.js'
import Table from '../Table.jsx';
import ModelForm from '../Modal.jsx'
import SearchModal from './SearchModal.jsx';
import {Container, Button} from 'reactstrap';
import queryString from 'query-string';
import JSON from 'JSON';

const axios = require('axios');

export default class SearchResult extends Component { 
    constructor(props) {
        super(props);
        let params = queryString.parse(this.props.location.search);
        //console.log(params);        
        this.state = {            
            id: params.id,
            name:params.name,
            diff:params.diff,
            type1:params.type1,
            type2:params.type2,
            type3:params.type3,
            grasp:params.grasp,
            items:null           
          }     
    }

    options = {
        method:"get",
        url: config.ip + '/item/search',
        params:{
            id: null,
            name: null,
            diff: null,
            type1: null,
            type2: null,
            type3: null,
            grasp: null,            
        }    
      }

      componentDidMount() {
        this.options.params = this.state;
        
        console.log("In the search params:" + JSON.stringify(this.options.params));
        
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
                  <h1>
                    Your search Result!
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  {this.state.items!==null && <Table records={this.state.items}></Table>}
                </div>
              </div>               
              <Button color='success' onClick={this.goHome}>Home</Button>
            </Container>            
          );
    }
}
