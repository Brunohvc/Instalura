const getPhotos = async (callback) => {
    const photonsHTTP = await fetch('http://10.0.0.176:3030/feed/');
    photonsJSON = await photonsHTTP.json();
    callback(photonsJSON);
}

export default getPhotos;