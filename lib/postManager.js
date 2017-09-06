var PostManager = function () {
    var bloggerPostTable = require('./bloggerPostTable.json');

    /*This function with real DB should be async*/
    this.getBlogById = function (id) {
        if (bloggerPostTable[id]) {
            return bloggerPostTable[id];
        }
        else {
            return {title: "Error", postText: "Blog is not found."}
        }

    }

};

exports = module.exports = new PostManager();


