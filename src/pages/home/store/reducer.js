

const { fromJS } = require('immutable');
const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
            src: 'https://upload-images.jianshu.io/upload_images/17361518-aa846bdda4c5232c?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: '新闻',
            src: 'https://upload-images.jianshu.io/upload_images/6001242-9cb72b210cd31bcf.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 3,
            title: '电视剧',
            src: 'https://upload-images.jianshu.io/upload_images/7289752-e2c35279dddf7fe9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 4,
            title: '社会热点',
            src: 'https://upload-images.jianshu.io/upload_images/17361518-aa846bdda4c5232c?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 5,
            title: '新闻',
            src: 'https://upload-images.jianshu.io/upload_images/6001242-9cb72b210cd31bcf.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 6,
            title: '电视剧',
            src: 'https://upload-images.jianshu.io/upload_images/7289752-e2c35279dddf7fe9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
    ]
})

const reducer = (state = defaultState, action) => {
    return state;
}

export default reducer