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

function getRandomInt() {
    return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}

App.post('/api/sentInfo', (req, res) => {
    let randomId = getRandomInt();
    UsersList.push({
        id: randomId,
        name: req.body.name,
        skill: req.body.mark,
    });
    console.log('Peron Data is added');
    console.log(UsersList);
    return res.json({
        add: true,
        users: UsersList});
});


App.get('/users', (req, res) => {
    return res.json(
        UsersList
    )
});

App.listen(4000, () => {
    console.log("Server up!");
});
