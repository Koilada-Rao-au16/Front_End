import { Component} from "react";
import "./Button.css"


class Button extends Component {

    render(){

        const {title,type,clickHandler} = this.props;
       
        return(
            <button onClick={clickHandler} className={`btn ${type}`}>
                {title}
             </button>
        )
    }
}

export default Button;