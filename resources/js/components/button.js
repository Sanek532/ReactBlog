import React, {useEffect, useState} from 'react';

const Button = (props) => {
    const [click, setClick] = useState(0);
    useEffect(() => {
        if (click !== 0) document.title = `Вы нажади на кнопку ${click} раз`;
    });
    return (
        <button onClick={() => setClick(click + 1)}>{props.text}</button>
    );
}

Button.defaultProps = {
    text: "Моя кнопка",
}

export default Button;
