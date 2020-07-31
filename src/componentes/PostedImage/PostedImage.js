import React, { Fragment, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import style from './style';


const PostedImage = ({ urlImage, descricao, qntLikes }) => {

    const [like, setLike] = useState(false);
    const [likes, setLikes] = useState(qntLikes);

    const likePhoto = () => {
        if (like) {
            setLikes(likes - 1)
        } else {
            setLikes(likes + 1)
        }
        setLike(!like);
    }

    const getImgLike = (like) => {
        if (like == true) {
            return require('../../../res/img/s2-checked.png');
        }
        return require('../../../res/img/s2.png');
    };

    return (
        <Fragment>
            <Image source={{ uri: urlImage }}
                style={style.image} />
            <Text>{descricao}</Text>
            <View style={style.viewLike}>
                <TouchableOpacity onPress={likePhoto}>
                    <Image source={getImgLike(like)}
                        style={style.like} />
                </TouchableOpacity>
                <Text>{likes} Likes</Text>
            </View>
        </Fragment>

    );
}

export default PostedImage;