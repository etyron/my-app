import React, { Component } from 'react';

import './App.css';
class App extends Component {
    constructor(){
        super();
        this.state ={users: []};
    }
    componentDidMount() {
        fetch('/users')
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then(users => {
                console.log(users);
                this.setState({ users })
            });
    }
    render() {
        return (
            <div className="App">
                <h1>Список студентов</h1>
                <ul>
                {this.state.users.map(user =>
                    <li key={user.id}>Имя: {user.name} Количество баллов: {user.skill}</li>
                )}
                </ul>
                <form action="">
                    <input type="text" name="name" placeholder="Введите имя и фамилию"/>
                    <input type="number" min="1" max="5" name="skill" step="1" placeholder="Введите количество баллов"/>
                    <button type="submit">Отправить</button>
                </form>
            </div>
        );
    }
}
export default App;