const conf = {};
conf.environment = 'development';
conf.sequelize = {};
conf.sequelize.username = 'root'; //database username
conf.sequelize.password = ''; //database password kosongkan jika tidak pakai password
conf.sequelize.database = 'rsp'; //isi dengan nama database
conf.sequelize.host = 'localhost';
conf.sequelize.dialect = 'mariadb';
conf.sequelize.port = 3306;
conf.sequelize.define = {
    charset: 'utf8mb4',
    dialectOptions: {
        collate: 'utf8mb4_unicode_ci'
    }
}
conf.ROUND_SALT = 8;
module.exports = conf;
