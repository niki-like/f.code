import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./main.scss";


class Main extends React.Component {
    render() {
        return (
            <>
                <main>
                    <Outlet/>
                </main>
                <header>
                    <NavLink  className={({isActive})=> isActive ? "activa-link" : ""} to="/">Главная</NavLink>
                    <NavLink  className={({isActive})=> isActive ? "activa-link" : ""} to="/rule">Правила пользования</NavLink>
                    <NavLink  className={({isActive})=> isActive ? "activa-link" : ""} to="/prise">Цены</NavLink> 
                </header>
                <footer>
                    <ul>
                        <li>+7(999)999 99-99</li>
                        <li>9-99-99</li>
                        <li>mail.kemping@legend.rf</li>
                    </ul>
                    <ul>
                        <li>г. Москва, Красная площадь, строение 7, 15/5</li>
                        <li>Часы работы с 9:00 - 18:30 24/7</li>
                    </ul>
                </footer>
            </>
        );
    }
}
export default Main;