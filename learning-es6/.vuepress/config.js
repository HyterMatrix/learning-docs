module.exports = {
    title: 'ES6学习文档',
    description: 'ES6学习文档',
    themeConfig: {
        nav: [
            { text: '博客', link: 'https://hyter.me/' },
            { text: '文档', link: '/' },
        ],
        sidebar: [{
            title: '文档',
            collapsable: false,
            children: [
                '',
                'let',
                'destructuring',
            ]
        }],
        lastUpdated: '上次更新',
        sidebarDepth: 2,
    },
    markdown:{
        lineNumbers: true
    },
    base:'/learning-es6/',
};
