const skills = [
    {id: 23412, skill: 'HTML, JS, CSS', done: true},
    {id: 23453, skill: 'Intro to Mongo', done: true},
    {id: 34523, skill: 'Intro to Node', done: true}
];

module.exports ={
    getAll
};

function getAll() {
    return skills;
}