import { Platform } from "react-native";

const getPhotos = async (callback) => {
    let url = '10.0.0.176'
    if (Platform.OS == 'ios') {
        url = 'localhost'
    }

    const photonsHTTP = await fetch(`http://${url}:3030/feed/`);
    photonsJSON = await photonsHTTP.json();
    callback(photonsJSON);
}

export default getPhotos;