import classes from '../css for pages/regpage.module.css'

const RegPage = () => {
    const inputs = document.querySelector('input');

    const handleClick = () => {
        // Получаем значения из инпутов
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Создаем объект с данными для отправки
    const userData = {
        username: username,
        email: email,
        password: password
    };

    // Отправляем данные на сервер с помощью fetch
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка при регистрации');
        }
        return response.json();
    })
    .then(data => {
        console.log('Пользователь зарегистрирован:', data);
        // Здесь можно добавить логику для обработки успешного ответа
    })
    .catch(error => {
        console.error('Ошибка при регистрации:', error);
        // Здесь можно добавить логику для обработки ошибки
    });
    }

    return(
        <>
            <body>
    {/* <div className={classes.container}> */}
        <h1>Регистрация</h1>
        <form>
            <input type="text" placeholder="Имя пользователя" required/>
            <input type="email, number" placeholder="Почта или телефон" required/>
            <input type="password" placeholder="Пароль" required/>
            <p>Не менее 8 символов, буквы на английском языке, заглавные буквы, а также цифры и спец. символы.</p>
            <label>
                <div className={classes.xx}><input type='checkbox' className={classes.checkbox}/> <p className={classes.remember}>Запомнить меня</p></div>
                <button className={classes.Otckl}>Отклонить</button>
            </label>
            <button onClick={handleClick} className={classes.submit}>Зарегистрироваться</button>
            <div className={classes.or}>
                <span>или</span>
            </div>
            <a className={classes.button}>Зарегистрироваться через Google</a>
        </form>
    {/* </div> */}
</body>
        </>
    )
}

export default RegPage;