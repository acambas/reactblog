const Promise = require('bluebird');

var mockData = [
    {
        id: '1',
        title : 'idemooo',
        subTitle : 'some subtitle',
        html: '<div>afasf iasfiasb ifbbasif</div>',
        imageUrl: 'http://teravertical.com/wp-content/uploads/2015/11/blogging-productivity.jpg',
        date: new Date()
    },
    {
        id: '2',
        title : 'idemooo',
        subTitle : 'some subtitle',
        html: '<div>afasf iasfiasb ifbbasif</div>',
        imageUrl: 'http://teravertical.com/wp-content/uploads/2015/11/blogging-productivity.jpg',
        date: new Date()
    }
];



const getById = (id) => {
    return new Promise(function(resolve, reject){
        var result = mockData.find(function(post){
            if(post.id === id){
                return post;
            }
        });
        resolve(result);
    })
};


const getPosts = (page, count) => {
    return new Promise(function(resolve, reject){
        resolve(mockData);
    });
};

module.exports.getById = getById;
module.exports.getPosts = getPosts;