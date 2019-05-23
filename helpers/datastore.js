var redis = require("redis");

var client = null;

function init() {
    if (client == null) {
        client = redis.createClient();
    }
    console.log("Set client to value:"+client);
}

function get(hash, callback) {
    init();
    client.hgetall(hash, callback);
}

function set() {
    init();
    client.hset.apply(client, arguments);
}

module.exports = {
    get,
    set
}