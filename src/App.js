import React, { Component } from 'react'
import Card from './Pages/Card'
import Nav from './Pages/Nav'
import './App.css';

export class App extends Component {
  state = {
    Persons: [
      {name: "omar",age:"50",tittle:"paleatine"},
      {name: "abd",age:"20",tittle:"Amarcin"},
      {name: "Ahman",age:"30",tittle:"Gaza"}

    ]
  }

  myFunction = () =>{

    this.setState(
      {
        Persons: [
          {name: "Aml",age:"25",tittle:"Amarcin"},
          {name: "Abaar",age:"20",tittle:"Gaza"},
          {name: "Maha",age:"19",tittle:"paleatine"}
    
        ]
      }
    )
  }


  
  myFunctionbind = (newValue) =>{

    this.setState(
      {
        Persons: [
          {name: newValue,age:"25",tittle:"Amarcin"},
          {name: newValue,age:"20",tittle:"Gaza"},
          {name: newValue,age:"19",tittle:"paleatine"}
    
        ]
      }
    )
  }


  myFunctionarrow = (newValue) =>{

    this.setState(
      {
        Persons: [
          {name: newValue,age:"25",tittle:"Amarcin"},
          {name: newValue,age:"20",tittle:"Gaza"},
          {name: newValue,age:"19",tittle:"paleatine"}
    
        ]
      }
    )
  }

  render() {

    return (
      <div className="" >





<button type="button"  onClick={this.myFunction} className="btn btn-primary btn-lg btn-block ddd"> تبديل الاسماء بالطريقة العادية </button>
<button type="button" onClick={this.myFunctionbind.bind(this,"Male")} className="btn btn-primary btn-lg btn-block ddd"> تبديل الاسماء بطريقة البند </button>
<button type="button" onClick={ () => this.myFunctionarrow("Female")} className="btn btn-primary btn-lg btn-block ddd"> تبديل الاسماء بطريقه اروو فنكشن</button>

    
<div class="alert alert-primary" role="alert">
استدعاء بيانات بطريقة الكلاس

</div>

        <table  className="table table-hover">
  <thead>
    <tr>
    <th scope="row">Name</th>
      <th scope="col">  Age</th>
      <th scope="col">Address</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><Nav name={this.state.Persons[0].name} /></th>
      <th scope="row"><Nav name={this.state.Persons[0].age} /></th>
      <th scope="row"><Nav name={this.state.Persons[0].tittle} /></th>
    </tr>
    <tr>
      <th > <Nav name={this.state.Persons[1].name} /></th>
      <th><Nav name={this.state.Persons[1].age} /></th>
      <th ><Nav name={this.state.Persons[1].tittle} /></th>
    </tr>
    <tr>
      <th> <Nav name={this.state.Persons[2].name} /></th>
      <th ><Nav name={this.state.Persons[2].age} /></th>
      <th><Nav name={this.state.Persons[2].tittle} /></th>
    </tr>
  </tbody>
</table>


<div class="alert alert-primary" role="alert">
استدعاء بيانات بطريقة اللفنكنش

</div>


<table  className="table table-hover">
  <thead>
    <tr>
    <th scope="row">Name</th>
      <th scope="col">  Age</th>
      <th scope="col">Address</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><Card name={this.state.Persons[0].name} /></th>
      <th scope="row"><Card name={this.state.Persons[0].age} /></th>
      <th scope="row"><Card name={this.state.Persons[0].tittle} /></th>
    </tr>
    <tr>
      <th > <Card name={this.state.Persons[1].name} /></th>
      <th><Card name={this.state.Persons[1].age} /></th>
      <th ><Card name={this.state.Persons[1].tittle} /></th>
    </tr>
    <tr>
      <th> <Card name={this.state.Persons[2].name} /></th>
      <th ><Card name={this.state.Persons[2].age} /></th>
      <th><Card name={this.state.Persons[2].tittle} /></th>
    </tr>
  </tbody>
</table>





      </div>
    )
  }
}

export default App
