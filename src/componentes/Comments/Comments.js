import React, { Fragment, useState } from 'react';
import { Image, Text, TouchableOpacity, View, FlatList, TextInput } from 'react-native';
import style from './style';

const Comments = ({ startComments, addComment }) => {

    const [comments, setComments] = useState(startComments);

    let newComment = '';
    let commentInput;

    const clickAddComment = () => {
        const addNewComment = addComment(newComment, '7Bryssk')
        setComments([...comments, addNewComment]);
        commentInput.clear();
    }

    return (
        <Fragment>
            <FlatList
                data={comments}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <View style={style.inline}>
                        <Text>{item.userName} </Text>
                        <Text> {item.text}</Text>
                    </View>
                }
            />
            <View style={style.inline}>
                <TextInput placeholder='Comment Here'
                    ref={ref => commentInput = ref}
                    onChangeText={text => newComment = text}
                    style={{ flex: 1 }}
                />
                <TouchableOpacity onPress={clickAddComment}>
                    <Image
                        source={require('../../../res/img/send.png')}
                        style={style.imgSend}
                    />
                </TouchableOpacity>
            </View>
        </Fragment>
    );
}

export default Comments