require('./bootstrap');
import React from 'react';
import Header from "./components/header";
import Users from "./components/users";
import AddUser from "./components/addUser";
import axios from "axios"

const baseUrl = "https://reqres.in/api/users?page=1/"

class App extends React.Component {
    constructor(props) {
        super(props);
        axios.get(baseUrl).then((res) => {
            this.setState({ users: res.data.data})
            console.log(res.data.data);
        })
        this.state = {
            users: []
        };

        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
    }

    render() {
        return (
            <div>
                <Header myTitle="Список пользователей" />
                <main>
                    <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser}/>
                </main>
                <aside>
                    <AddUser onSaveUser={this.addUser}/>
                </aside>
            </div>
        );
    }

    addUser(user) {
        const id = this.state.users.length + 1;
        this.setState({ users: [...this.state.users, {id, ...user}]})
        console.log(this.state.users);
    }

    editUser(user) {
        let allUsers = this.state.users;
        allUsers[user.id - 1] = user;

        this.setState({ users: [] }, () => {
            this.setState({ users: allUsers});
        });
        console.log(user);
    }

    deleteUser(id) {
        this.setState({
                users: this.state.users.filter((user) => user.id !== id)
            })
    }
}


export default App;
