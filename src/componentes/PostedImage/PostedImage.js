import React, { Fragment, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import style from './style';


const PostedImage = ({ urlImage, descricao, qntLikes, getImgLike, likePhoto }) => {

    const [like, setLike] = useState(false);
    const [likes, setLikes] = useState(qntLikes);

    const clickLikePhoto = () => {
        const [newLike, newLlikes] = likePhoto(like, likes)
        setLikes(newLlikes)
        setLike(newLike)
    }


    return (
        <Fragment>
            <Image source={{ uri: urlImage }}
                style={style.image} />
            <Text>{descricao}</Text>
            <View style={style.viewLike}>
                <TouchableOpacity onPress={clickLikePhoto}>
                    <Image source={getImgLike(like)}
                        style={style.like} />
                </TouchableOpacity>
                <Text>{likes} Likes</Text>
            </View>
        </Fragment>

    );
}

export default PostedImage;