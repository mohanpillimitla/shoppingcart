import React,{Component} from 'react';

class Counter extends Component{

   

    

    

    render(){

        

       

        
        

        return( 
        
        <div className='container'>

        
        <span className={this.getClasses()}>{this.formatCount()}</span>

            <button onClick={()=>this.props.increment(this.props.counter)} className='btn btn-primary btn-sm m-3'>Increment</button>

            <button onClick={()=>this.props.delete(this.props.counter.id)} 
            className='btn-danger btn-sm m-3'>delete</button>
                



        </div>
        )
    }

    formatCount(){

      
        const {value} =this.props.counter;


        return value===0 ? 'zero':value;
    }

    getClasses(){

        let classes='badge badge-primary badge-'


       return classes+=this.props.counter.value===0 ? 'warning' : 'primary'

        
        
    }






}

export default Counter;