mport React, { Component } from 'react'

 class Cel extends Component {
    render() {
        return (
            
            <div className="box">
            <h1> {this.props.scaleName} scale</h1>
            
            <input className='text' value={this.props.value} onChange={this.props.func}/>
            
           
            
            </div>

                
            
        )
    }
}

export default Cel
