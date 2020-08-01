import React, { Fragment, useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, FlatList, Text, Platform } from 'react-native';
import { Header } from '../../componentes/Header';
import { PostedImage } from '../../componentes/PostedImage';
import getPhotos from '../../api/feed';
import { Comments } from '../../componentes/Comments';
import { StatusBar } from 'expo-status-bar';
import { getImgLike, likePhoto } from '../../api/like';
import { addComment } from '../../api/comment';

const Feed = () => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        getPhotos(setFotos);
    }, []);

    return (
        <ScrollView>
            <StatusBar
                backgroundColor="white"
                barStyle="dark-content"
            />
            <View style={styles.container}>
                <FlatList
                    data={fotos}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <Fragment>
                            <Header
                                nome={item.userName}
                                urlImage={item.userURL}
                            />
                            <PostedImage
                                urlImage={item.url}
                                descricao={item.description}
                                qntLikes={item.likes}
                                getImgLike={getImgLike}
                                likePhoto={likePhoto}
                            />
                            <Comments
                                startComments={item.comentarios}
                                addComment={addComment}
                            />
                        </Fragment>
                    }
                />
            </View>
        </ScrollView>
    );
}

Feed.navigationOptions = ({ navigation }) => {
    const options = {
        title: navigation.getParam('user')
    }

    return options;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Feed;
