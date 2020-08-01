const addComment = (text, userName) => {
    return {
        date: Date.now(),
        text,
        userName
    }
}

export { addComment }