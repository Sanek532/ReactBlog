import React from 'react';

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            age: 0,
            //isHappy: false
        }
    }

    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Введите имя" onChange={(event) => this.setState({firstname: event.target.value})}/>
                <input placeholder="Введите фамилию" onChange={(event) => this.setState({lastname: event.target.value})}/>
                <textarea placeholder="Введите email" onChange={(event) => this.setState({email: event.target.value})}/>
                {/*<input placeholder="Введите возраст" onChange={(event) => this.setState({age: event.target.value})}/>*/}
                {/*<label htmlFor="isHappy">Пользователь счастлив?</label>*/}
                {/*<input type="checkbox" id="isHappy" onChange={(event) => this.setState({isHappy: event.target.checked})}/>*/}
                <button type="button" onClick={() => {
                    this.myForm.reset();
                    this.userAdd = {
                        first_name: this.state.firstname,
                        last_name: this.state.lastname,
                        email: this.state.email,
                        avatar: null
                        //age: this.state.age,
                        // isHappy: this.state.isHappy, //больше не используется
                    };
                    if (this.props.user) {
                        this.userAdd.avatar = this.props.user.avatar;
                        this.userAdd.id = this.props.user.id;
                    }
                    this.props.onSaveUser(this.userAdd)
                }}>Сохранить</button>
            </form>
        );

    }
}
export default AddUser;
