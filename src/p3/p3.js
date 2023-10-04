import React from "react";
import './p3.scss';

class P3 extends React.Component {
    render() {
        return(
            <>
                <div className="p2">
                    <h3>Цены</h3>
                    <p>
                        Цена за ночь зависит от положения кемпинга, сезона, наличия бассейна, вай-фая, числа гостей и так далее.
                    </p>
                    <p>
                        Цена варьируется в зависимости от ваших потребностей: при регистрации вы заполняете карточку, в которой пишете, сколько вас, на сколько ночей вы хотите остановиться, на чём приехали, есть ли с вами дети и животные, нужно ли вам электричество и другие услуги. На основе этой информации вам выставят стоимость проживания.
                    </p>
                    <p>
                        Цены начинаются от <b>10 €⁣ (1044 ₽)</b> за двоих на ночь, но это если сильно повезет. <b>Средняя цена за ночь — 15⁠—⁠30 €⁣ (1567⁠—⁠3133 ₽).</b> За дополнительные услуги вроде электричества чаще всего придется доплачивать около <b>3 €⁣ (313 ₽)</b> за сутки. Иногда в кемпингах платный душ.
                    </p>
                    
                    <p>
                        <b>10€ </b >минимальная стоимость ночевки в кемпинге, если сильно повезет. <br/>Средние цены: <b>15—30 €</b> на двоих за ночь
                        Есть крупные кемпинги с бассейном, игровой площадкой, собственным пляжем и прочими удовольствиями — они дороже. В таких кемпингах проводят групповые экскурсии, дают напрокат мячи и ракетки, развлекают гостей. Ночь в них может стоить до 50⁠—⁠60 €⁣ (5222⁠—⁠6266 ₽), что всё равно дешевле трехзвездочного отеля в Европе. Это особенно выгодно, если вы приехали с семьей или большой компанией.
                    </p>
                </div>
            </>
        )
    }
}
export default P3;