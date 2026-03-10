let escolha = "email"

const user = {
    name: 'Felipe',
    email: 'felipefarofa@gmail.com',
    age: 17
}

console.log(user.name) // Lucas

console.log(user[escolha])

const props = {
    avatar: "https://github.com/ktzxs.png",
    name: 'Felipe Farofa',
    age: 17
}

// const avatar = props.avatar;
// const name = props.name;

const {avatar, name, email} = props;

console.log(avatar);