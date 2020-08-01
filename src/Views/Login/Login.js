import React, { Fragment, useState } from 'react';
import { Text, View, TextInput, Button, AsyncStorage, Platform } from 'react-native';
import style from './style'
import { login } from '../../api/login';

const Login = ({ navigation }) => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const tryLogin = async () => {
        try {
            setLoginError('');
            const token = await login(user, password);
            await AsyncStorage.setItem('instalura_token', token);

            // navigation.replace('Feed', { user: user }); --> Coloca na pilha
            navigation.replace('Feed', { user: user }); // --> Sobrepõe
        } catch (error) {
            setLoginError(error.message);
        }
    }

    return (
        <Fragment>
            <View style={style.container}>
                <TextInput
                    style={style.inputs}
                    placeholder="Username"
                    onChangeText={text => setUser(text)}
                />
                <TextInput
                    style={style.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />
                <Text>{loginError}</Text>
            </View>
            <View style={style.button}>
                <Button title="Login" onPress={tryLogin} />
            </View>
        </Fragment>
    );
}

Login.navigationOptions = () => {
    const options = {
        title: 'Login'
    }

    if (Platform.OS = 'android') {
        options.header = null;
    }

    return options;
}

export default Login;
