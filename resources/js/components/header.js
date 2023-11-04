import React from 'react';
import Button from "./button";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                {this.props.myTitle}
                Мой переданный текст: {this.props.myText}
                <Button />
                <Button text="Моя кнопка №2" />
            </header>
        );

    }
}
export default Header;
