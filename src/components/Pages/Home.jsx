import React, {Component} from 'react';
import config from '../../config/dbconfig.js'
import Table from '../Table.jsx';
import ModelForm from '../Modal.jsx'
import JSON from 'JSON';
import {Container} from 'reactstrap';

const axios = require('axios');

class Home extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            items: null
          }     
    }

    options = {
      method:'get',
      url:config.ip + '',    
    }
  
    async componentDidMount() {
      let ret = await axios(this.options);
      //this.state.data = ret;
      this.setState({items:ret});
      // console.log(ret.data);
      // console.log("==================");
      console.log(this.state.items.data);      
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
                  <ModelForm buttonLabel="addNew">Hello!</ModelForm>
              </div>     
            </Container>
          );
    }
}

export default Home;