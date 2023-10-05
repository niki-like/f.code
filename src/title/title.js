import React from "react";
import './title.scss';
import Slider from "./slider"

class Title extends React.Component {
    render() {
        return(
            <>
                <div className="title">
                    <div className="preWiev">
                        <div className="preWiev-title">Выбирай</div>
                        <div className="preWiev-title">
                            <p>кемпинг</p>
                        </div>
                    </div>
                </div>
                <div className="ttext">
                    <p>
                        Кемпингом называют отдых для туристов и автопутешественников в лагере под открытым небом. Сюда можно приехать с палаткой или в доме на колесах, а на некоторых стоянках можно арендовать гостевой домик.<br/>
                    </p>
                    <p>
                        Еще жив стереотип, что такой отдых предполагает спартанские условия и отсутствие удобств. Но в современных кемпингах вы можете отключиться от городской суеты и ощутить единение с природой в условиях почти домашнего комфорта.
                    </p>
                </div>
                <Slider/>
            </>
        )
    }
}
export default Title;