import React from "react";
import './nf.scss';
import { Link } from "react-router-dom";

class NF extends React.Component {
    render() {
        return(
            <>
                <div className="nf">
                   <h1>404</h1>
                   <h2>Страница не найдена</h2>
                   <Link to="/">
                        <h3>
                            Вернуться на главную
                        </h3>
                    </Link>
                </div>
            </>
        )
    }
}
export default NF;