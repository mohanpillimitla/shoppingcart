import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Counters from './components/Counters';
class  App extends Component {
  state={
    counters:[

        {id:1,value:0},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0}






        
    ]



}
increment=(counter)=>{
    const counters=[...this.state.counters]
    const index=counters.indexOf(counter)
    counters[index]={...counter}


    counters[index].value++;

    this.setState({counters})




    




}

reset=()=>{
    const counters=this.state.counters.map(counter=>{
        counter.value=0;

        return counter;




    })
    this.setState({counters})


}

delete=(id)=>{

    const counters=[...this.state.counters.filter(counter=>counter.id!==id)];
    
    
    this.setState({counters:counters})
}

  render() { 
    return ( 
      <div>

      <NavBar 

      countersLength={this.state.counters.filter(c=>c.value>0).length}


      
      
      
      
      />
      <main className="container">
        <Counters counters={this.state.counters}

        reset={this.reset}
        
        delete={this.delete} increment={this.increment}/>

        
      </main>

     </div>

     )
  }
}
 
export default App;