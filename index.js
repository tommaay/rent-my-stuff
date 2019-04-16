if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const server = require('./api/server');
const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server running on port: ${port}`));
