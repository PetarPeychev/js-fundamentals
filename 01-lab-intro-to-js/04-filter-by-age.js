function filterByAge(minAge, firstName, firstAge, secondName, secondAge) {
    let firstPerson = {};
    firstPerson.name = firstName;
    firstPerson.age = firstAge;

    let secondPerson = {};
    secondPerson.name = secondName;
    secondPerson.age = secondAge;

    if (firstPerson.age >= minAge) {
        console.log(firstPerson);
    }
    if (secondPerson.age >= minAge) {
        console.log(secondPerson);
    }
}