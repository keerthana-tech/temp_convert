import React, { Component } from 'react'
import Cel from './Cel'



 class Convert extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              scale:'c',
              temp:0
         }
     }
     handleCel= (e)=> {
         this.setState({
             scale:'c',
             temp:e.target.value
         })
     }
     handlefah= (e)=> {
        this.setState({
            scale:'f',
            temp:e.target.value
        })
    }
     
    render() {
        const temp =this.state.temp
        const scale = this.state.scale
        const cel = scale==='f'? convert(temp,toCel) : temp
        const fah = scale==='c' ? convert(temp,toFah): temp
        function convert(temp,con){
            return con(temp)
            
        }
        function toCel(temp){
           return (temp-32)*5/9
        
        }
        function toFah(temp){
            return (temp*9/5)+32
        }
        return (
            <div> 
            <div className="cel">
            <Cel scaleName="celius" func={this.handleCel} value={cel}/>
            </div>

            <div className="fah">
            <Cel scaleName="faherinheit" func={this.handlefah} value={fah} />
            
                
            </div>
            </div>
        )
    }
}

export default Convert
