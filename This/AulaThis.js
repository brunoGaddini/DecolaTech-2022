// A palavra this é uma referência de constexto

const pessoa = {
    firstName: "Bruno",
    lastName: "Amaral",
    id: 1,
    fullname: function() {
        return this.firstName + " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }
};

console.log(pessoa.fullname());

console.log(pessoa.getId());