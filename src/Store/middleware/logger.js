const logger = (store) => (next) => (action) => {
    console.log('____action____', action);
    next(action);
}

export default logger;