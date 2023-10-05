import React from "react";
import './calculation.scss';

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            peoples: 0,
            hours: 0,
            plus: 1,
            result:""
        }
        this.setResult = this.setResult.bind(this)
    }
    
    render() {
        return(
            <>
                <div className="calc">
                    <ul>
                        <li>
                            Колличество людей: <input onChange={(e)=> this.setState({peoples: e.target.value})} type="number" className="" placeholder="Колличество людей"/>
                        </li>
                        <li>
                            Колличество часов: <input onChange={(e)=> this.setState({hours: e.target.value})} type="number" className="" placeholder="Колличество людей"/>
                        </li>
                        <label>
                            <input type="checkbox" onChange={(e)=> e.target.checked === true ? this.setState({plus: 1.3}) : this.setState({plus: 1})}/>
                                Дополнительные услуги по проживанию
                        </label>
                        <button onClick={()=>{
                            console.log(this.state)
                            this.setResult()
                            }} type="button">Расчитать</button>
                        <h3>примерная стоимость: {this.roundUp( this.state.result, 2)} евро</h3>
                    </ul>
                            
                </div>
            </>
        )
    }
     roundUp(num, precision) {
        precision = Math.pow(10, precision)
        return Math.ceil(num * precision) / precision
      }
    setResult(){
        
        this.setState({
            result: (this.state.peoples * 1.9) * this.state.hours * this.state.plus
        })
    }
}
export default Calc;