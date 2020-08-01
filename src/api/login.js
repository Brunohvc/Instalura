const login = async (userName, password) => {
    let url = '10.0.0.176'
    if (Platform.OS == 'ios') {
        url = 'localhost'
    }

    const header = {
        method: 'POST',
        body: JSON.stringify({
            userName,
            password
        }),
        headers: {
            'Content-type': 'application/json'
        }
    }
    const response = await fetch(`http://${url}:3030/users/login/`,
        header);

    if (response.ok) {
        return response.headers.get('x-access-token');
    } else {
        throw new Error("Username or password incorrect!");
    }
}

export { login }