askUserInfo = () => {
    const name = prompt('Введите ваше имя:');
    if (name === null) {
        return null;
    } else if (name === '') {
        alert('Вы ничего не ввели');
        return askUserInfo();
    } else if (name === 'выход') {
        return null;
    }

    const age = prompt('Введите ваш возраст:');
    if (age === '') {
        alert('Вы ничего не ввели');
    } else if (age < 18) {
        alert('Мы не регистрируем несовершеннолетних');
        return askUserInfo();
    } else {
        return {name: name, age: age};
    }
};

getAllUsers = () => {
    let users = [];
    let userInfo = askUserInfo();

    while (userInfo !== null) {
        users.push(userInfo);
        alert('для выхода нажмите : выход')
        userInfo = askUserInfo();
    }
    return users;
};

const allUsers = getAllUsers();

console.log(allUsers);

