import {Button,Row,Container,Col} from "react-bootstrap"
import './App.css';

import StatMaster from "./component/StatMaster.jsx"

import React, { Component } from 'react'

export default class App extends Component {

  state=[[],[]]





  render() {
   


    return (


      <div>




<Row xs={1} sm={2} md={3}  lg={4} xl={5} xxl={5}  className="g-13">


        <Button variant="outline-secondary"onClick={this.postDataBase}> Статистика производство </Button>{' '}
        <Button variant="outline-secondary"onClick={this.postDataBase}> Аварии сборщика </Button>{' '}
        <br/>
        <br/>{" "}
        
        </Row>


        <Container>
  <Row>
    <Col><StatMaster/></Col>
    <Col><StatMaster/></Col>
  </Row>
 
</Container>





       
      </div>
    )
  }
}


