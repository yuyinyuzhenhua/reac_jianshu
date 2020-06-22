

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
    ],
    articleList: [
        {
            id: 1,
            title: '姑娘，你要明白，能让你在婆家立足的，永远不是坚强和忍耐',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/16293134-b4654bc59de778e0?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            desc: ' 愿我的故事细水长流，敬你的孤独择日而终。关注微光，看尽人生百态 母亲和子女之间，是一种血缘关系，是无论两人有怎样的矛盾，都会因为血缘这根纽带，最...',
        },
        {
            id: 2,
            title: '非虚构故事||神奇的大公鸡（下）',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/15992237-0f8b7cb161a15ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            desc: '去找小花鸭（童话） 焦小桥 一群白鹅和一群鸭子去河里游泳，顺便去对面的河岸上玩。山光秃秃的，小草没有发芽，花儿也没有开。它们觉得没有趣，就又回到...'
        }
    ],
    recommendList: [
        {
            id: 1,
            imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
        },
        {
            id: 2,
            imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
        },
        {
            id: 3,
            imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
        },
        {
            id: 4,
            imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
        }
    ]
})

const reducer = (state = defaultState, action) => {
    return state;
}

export default reducer