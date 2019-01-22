let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(':memory:');

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS bookmarks (id integer primary key AUTOINCREMENT, url TEXT)");
    db.run("INSERT INTO bookmarks (url) VALUES (?)", "http://sivalabs.in");
});

let createBookmark = function(url, callback) {
    console.log(`inserting ${url}`)
    db.run("insert into bookmarks(url) values(?)", url)
    callback()
}

let getAllBookmarks = function (callback) {
    db.all("SELECT * FROM bookmarks", function(err, rows){
        callback(rows);
    });
}

let getBookmarkById = function(id, callback) {
    db.get("SELECT * FROM bookmarks where id=?", id, function(err, row){
        callback(row);
    });
}

let deleteBookmark = function(id) {
    db.run("delete from bookmarks where id=?", id)
}

module.exports = {
    createBookmark,
    getAllBookmarks,
    getBookmarkById,
    deleteBookmark
};
