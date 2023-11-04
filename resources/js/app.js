require('./bootstrap');
import React from 'react';
import Header from "./components/header";
import Image from "./components/image";
import logoReact from "../image/react.jpg" //для вывода картинок в js их всегда нужно импортировать вот так

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Тест",
            userText: null,
        }

        this.onClick = this.onClick.bind(this);
        this.mouseOver = this.mouseOver.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (document.title !== "Laravel") {
            document.title = "Laravel";
            console.log("Заголовок страница изменен");
        }
    }

    render() {
        return (
            <div className="name">
                <Header myTitle="Шапка моего сайта" myText={"fdf" + (5+9)} />
                <h1>{this.state.text}</h1>
                <h2>{this.state.userText}</h2>
                <input placeholder="Поле для ввода текста" onChange={event => this.setState({userText: event.target.value})} onClick={this.onClick} onMouseEnter={this.mouseOver}/>
                <p>w123</p>
                <Image image={logoReact}/>
            </div>
        );
    }

    onClick() {
        this.setState({text: "Нажал"});
        console.log("Click");
    }

    mouseOver() {
        this.setState({text: "Навел"});
        console.log("Навел");
    }
}


export default App;
