
//gelen mesajları veritababnına kaydetmek ve sonra gelen mesajları herhangi bir kullanıcının görebilmesi için
//redis kullandık..
const redis = require("redis");

const getClient = () => {
	return redis.createClient({
		host: process.env.REDIS_HOST,
		port: process.env.REDIS_PORT,
		password: process.env.REDIS_PASS,
		db: 1,
	});
};

module.exports.getClient = getClient;