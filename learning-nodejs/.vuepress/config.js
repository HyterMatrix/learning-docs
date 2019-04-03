module.exports = {
    title: 'nodeJS学习文档',
    description: 'nodeJS学习记录文档',
    themeConfig: {
        nav: [
            { text: '博客', link: 'https://hyter.me/' },
            { text: '文档', link: '/' },
        ],
        sidebar: [{
            title: '示例分组',
            collapsable: false,
            children: [
                '',
            ]
        }],
        lastUpdated: '上次更新',
        sidebarDepth: 2,
    },
    markdown:{
        lineNumbers: true
    },
    base:'/learning-nodejs/',
};
