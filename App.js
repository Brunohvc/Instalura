import React, { Fragment, useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { Header } from './src/componentes/Header';
import { PostedImage } from './src/componentes/PostedImage';
import getPhotos from './src/api/feed';
import { Comments } from './src/componentes/Comments';

const informacoes = [
  { nome: 'Ricardo', img: './res/img/alura.jpg' },
  { nome: 'Marina', img: './res/img/alura.jpg' },
];

const App = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    getPhotos(setFotos);
  }, []);

  return (
    <ScrollView >
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
              />
              <Comments startComments={item.comentarios} />
            </Fragment>
          }
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
