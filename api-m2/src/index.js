import '@babel/polyfill';
import app from './app';
import models from './models/index';

function main() {
    const force = false;
    models.sequelize.sync({ force }).then( () => {
        app.listen(3001);
        console.log('server on port 3001');
    });
}

main();

