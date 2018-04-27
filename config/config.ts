const dbConfig = {
    server: process.env.DB_SERVER_PROD || 'mongodb://localhost:27017/disctracker'
};

export {dbConfig};

