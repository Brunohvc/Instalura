import React from 'react';
import { Text, View, Image } from 'react-native';
import style from './style'

const Header = ({ nome, urlImage }) => {
    return (
        <View style={style.cabecalho}>
            <Image source={{ uri: urlImage }}
                style={style.fotoUser} />
            <Text>{nome}</Text>
        </View>);
}

export default Header;