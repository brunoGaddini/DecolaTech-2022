const user = {
    id: 42,
    displayName: 'jDoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId ({id}){
    return id;
}

function getFullName ({fullName: {firstName: first, lastName: last}}){
    return `${first} ${last}`;
}

userId(user)
getFullName(user)
