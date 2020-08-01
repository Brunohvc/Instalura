const likePhoto = (like, likes) => {
    if (like) {
        likes--;
    } else {
        likes++;
    }
    return [!like, likes];
}

const getImgLike = (like) => {
    if (like) {
        return require('../../res/img/s2-checked.png');
    }
    return require('../../res/img/s2.png');
};

export { likePhoto, getImgLike }