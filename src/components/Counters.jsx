import React,{Component} from 'react';

import Counter from "./Counter";


class Counters extends Component{

    
    render(){


        return (
            <div className='container'>
                <button onClick={this.props.reset} 
            className='btn-danger btn-sm m-3'>reset</button>
                




        {this.props.counters.map(counter => 
        
            <Counter counter={counter} key={counter.id}

            increment={this.props.increment}
            
            delete={this.props.delete}/>)}
            </div>





        )
    }





}


export default Counters;