import React from 'react';
import { AiFillEdit, AiOutlineClose } from "react-icons/ai";
import AddUser from "./addUser";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editForm: false,
        }
    }
    user = this.props.user;
    render() {
        return (
            <div className="user">
                <AiOutlineClose className="delete-icon" onClick={() => this.props.onDelete(this.user.id)}/>
                <AiFillEdit className="edit-icon" onClick={() => {
                    this.setState({editForm: !this.state.editForm})
                }}/>

                <h3>{this.user.first_name} {this.user.last_name}</h3>
                <p>{this.user.email}</p>
                <img src={this.user.avatar}/>
                <b>{this.user.isHappy ? "Чел счастлив" : "Чел несчастлив"}</b>

                {this.state.editForm && <AddUser user={this.user} onSaveUser={this.props.onEdit}/>}
            </div>
        );

    }
}
export default User;
