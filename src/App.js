import React, { Component } from 'react';

import './App.css';
class App extends Component {
    constructor(){
        super();
        this.state =
            {
                users: [],
                name: '',
                mark: ''

            };
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

    handleChange = (e) => {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        let personData = {
            name: this.state.name,
            mark: this.state.mark
        };

        fetch('/api/sentInfo', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(personData),
        })
            .then(res => res.json())
            .then(res => {
                if (res.add) {
                    this.setState({
                        name: '',
                        mark: '',
                        users: res.users
                    });
                }
            });
    };

    render() {
        return (
            <div className="App">
                <h1>Список студентов</h1>
                <table>
                    {this.state.users.map(user =>
                        <tr key={user.id}>
                            <td>Имя: {user.name}</td>
                            <td>Оценка: {user.skill}</td>
                        </tr>
                    )}
                </table>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Введите имя и фамилию" required value={this.state.name} onChange={this.handleChange}/>
                    <input type="number" min="1" max="5" name="mark" step="1" placeholder="Введите количество баллов" required value={this.state.mark} onChange={this.handleChange}/>
                    <button type="submit">Отправить</button>
                </form>
            </div>
        );
    }
}
export default App;
