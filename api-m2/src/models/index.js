import Sequelize from 'sequelize';
require('dotenv').config();
const {
    DB_NAME, DB_USER, DB_PASSWORD, DB_HOST,
  } = process.env;

//db connection
const sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: 'postgres',
        logging: false
    }
);

//modelo Publications
const Publications= sequelize.define('Publications', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    tittle:{
        type: Sequelize.STRING(180),
        allowNull: false,
    },
    shortDescription:{
        type: Sequelize.STRING(250),
        allowNull: false,
    },
    longDescription:{
        type: Sequelize.STRING(2500),
        allowNull: false,
    },
    ubication:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    stock:{
        type: Sequelize.INTEGER,
    },
    postalCode:{
        type: Sequelize.INTEGER,
    },
    latitudLongitud:{
        type: Sequelize.STRING,
    },
    image:{
        type: Sequelize.STRING,
    },
}, {
    tableName: 'publications'
});

const models = {
    Publications
  };
models.sequelize=sequelize;
  
export default models;

