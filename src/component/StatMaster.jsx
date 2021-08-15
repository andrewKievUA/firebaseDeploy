import {Table,Button} from "react-bootstrap" //,Row,Container,Col,

import axios from 'axios';


import React, { Component } from 'react'
import Stroka from './Stroka.jsx'
import { connect } from "react-redux";



 class StatMaster extends Component {
    state=[[],[]]

    componentDidMount(){
        axios.get(`https://alarmstonelight-default-rtdb.europe-west1.firebasedatabase.app/arrays/.json`,)
        .then(response  => {
          let zz= Object.values(response.data)
         // console.log(zz[0].alarms );
          //console.log(zz[0].stat );
          this.setState([zz[0].stat,zz[0].alarms] )
         // console.log(this.state[0][2].id,"inside")


        })
      }

render(){
    console.log(this)
    return(
     <>
      <Button variant="outline-secondary"onClick={this.props.cubs}> Статистика asdfпроизводство </Button>{' '}
          <Table striped bordered hover variant="dark" size="222px" responsive="true" >
        <thead>
          <tr>
            <th>Дата</th>
            <th>1 Смена</th>
            <th>2 Смена</th>
            <th>3 Смена</th>
            <th>4 Смена</th>
            <th>Сутки</th>
          </tr>
        </thead>
        <tbody>
        { this.state[0].map((el,index) => {
                  return(
                    <Stroka el={el} index={index}/>
  
            )})       
        }
        </tbody>
      </Table>
  
</>
    
)}}
const mapStateToProps = (state) => ([...state])

const mapDispatchToProps = (dispatch) => {
  return {

    cubs: () =>  dispatch({ type: 'cubs' }),

  }
}

export default connect(mapStateToProps,mapDispatchToProps) (StatMaster) 