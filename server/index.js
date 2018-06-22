const express = require('express');
const bodyParser = require('body-parser');
const App = express();

App.use(bodyParser.json());


let UsersList = [
    {
        id: 1,
        name: "Ivan Petrov",
        skill: 5
    }, {
        id: 2,
        name: "Volodymyr Kiskichenko",
        skill: 4
    },{
        id: 3,
        name: "Oleksander Rosaless",
        skill: 5
    }
];

App.get('/users', (req, res) => {
    return res.json(
        UsersList
    )
});

App.listen(4000, () => {
    console.log("Server up!");
});