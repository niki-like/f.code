import React from "react";
import './slider.scss';
import IMG1 from"./sliderIMG/1.jpg"
import IMG2 from'./sliderIMG/2.jpg'
import IMG3 from'./sliderIMG/3.jpg'
import IMG4 from'./sliderIMG/4.jpg'

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            images:1,
            text:{
                1:"Отдых в лесу",
                2:"Отдых на свежем воздухе",
                3:"В кругу близких",
            }
        }
        this.setImage = this.setImage.bind(this)
    }
    itervalSlider = setInterval(() => {
        this.setImage("+")
    },5000)
    setImage(bin){
        if (this.state.images >= 3){
            this.setState({images:1})
        }
        else{
            if(bin ==="+")
                this.setState({images: this.state.images + 1}) 
            else{
                if(this.state.images > 1)            
                    this.setState({images: this.state.images - 1})
            }
        } 
    }
    render() {
        // itervalSlider()
        return(
            <>
                <div className="slider">
                    <p>
                        <i onClick={()=>{  this.setImage("-")}} className="navig navig1"></i>
                            {this.state.images === 1 ? <img src={IMG1}/> :null}    
                            {this.state.images === 2 ?  <img src={IMG2}/> :null}    
                            {this.state.images === 3 ?  <img src={IMG3}/> :null}     
                            {this.state.images >= 4 ?  <img src={IMG4}/> :null}     
                        <i onClick={()=>{  this.setImage("+")}} className="navig navig2"></i>    
                    </p>
                    <h3>{this.state.text[this.state.images]}</h3>
                </div>
            </>
        )
    }
}
export default Slider;