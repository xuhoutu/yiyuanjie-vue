var list = require('./list.json');
var ban = require('./list-ban.json');
var cate = require('./list-cate.json');
var more = require('./more.json');
var goods = require('./goods.json');

module.exports = function() {
    return {
        "list": list,
        "ban": ban,
        "cate": cate,
        "more": more,
        "goods": goods
    }
}
