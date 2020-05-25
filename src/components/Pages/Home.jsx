import React, {Component} from 'react';
import config from '../../config/dbconfig.js'
import Table from '../Table.jsx';
import ModelForm from '../Modal.jsx'
import SearchModal from './SearchModal.jsx';
import {Container} from 'reactstrap';

const axios = require('axios');

class Home extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            items: null,
          }     
    }

    options = {
      method:'get',
      url:config.ip + '',    
    }
  
    async componentDidMount() {
      this.options.url = config.ip + '/item';
      let ret = await axios(this.options);
      this.setState({items:ret});
    }

    render(){
      if(this.state.items === null) return null;
        return (
            <Container className="App">
              <div className="row">
                <div className="col">
                  <h1>
                    Leetcode Recorder
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Table records={this.state.items.data}></Table>
                </div>
              </div> 
              <div className="row">
                  <ModelForm buttonLabel="Add">Hello!</ModelForm>
                  <SearchModal></SearchModal>
              </div>     
            </Container>
          );
    }
}

export default Home;