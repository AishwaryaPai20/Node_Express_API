import { v4 as uuidv4 } from 'uuid';

let users = [];
export const getUsers = (req, res) => {
    console.log('GET ROUTE REACHED');
    // console.log(users);
    res.send(users);
}

export const createUser = (req, res) => {
    console.log('POST ROUTE REACHED');
    // console.log(req.body);
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.firstName} added to the database!`);
}

export const getUserId = (req, res) => {
    console.log('GET ID ROUTE REACHED');
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    console.log('DELETE ROUTE REACHED');
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    // res.send(deleteUser);
    res.send(`User with the ${id} deleted from the database`);
}

export const updateUser = (req, res) => {
    console.log('PATCH ROUTE REACHED');
    const { id } = req.params;
    const { firstName, lastName, Age } = req.body;
    const user = users.find((user) => user.id == id);

    if (firstName) user.firstName = firstName;

    if (lastName) user.lastName = lastName;

    if (Age) user.Age = Age;

    // res.send(deleteUser);
    res.send(`User with the ${id} updated in the database`);
}