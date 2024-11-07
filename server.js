const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const PORT = 8000;

const createUser = () => ({
    _id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    password: faker.internet.password()
});

const createCompany = () => ({
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    country: faker.location.country()
    }
});


app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});


app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({ user: newUser, company: newCompany });
});

app.listen(PORT, () => {
    console.log("Server is up and running on port:8000");
});