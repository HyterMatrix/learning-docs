module.exports = {
    title: 'Java学习文档',
    description: '自己学习java的文档',
    themeConfig: {
        nav: [
            { text: 'Java', link: '/' },
            { text: 'SpringBoot', link: '/spring-boot/' },
            { text: 'SpringCloud', link: '/spring-cloud/' },
            { text: '博客', link: 'https://hyter.me/' },
        ],
        sidebar: {
            '/spring-boot/': [{
                title: '笔记',
                collapsable: false,
                children:[
                    ''
                ]
            }],
            '/spring-cloud/': [{
                title: '笔记',
                collapsable: false,
                children:[
                    ''
                ]
            }],

            '/': [{
                title: '笔记',
                collapsable: false,
                children:[
                '',
                '01介绍',
                '02基础知识',
                '03对象与类',
                '04继承',

                'QA']
            }]
        },
        serviceWorker: {
            // updatePopup: true, // Boolean | Object, 默认值是 undefined.
            // 如果设置为 true, 默认的文本配置将是:
            updatePopup: {
               message: "有新的内容更新",
               buttonText: "刷新"
            }
        },




        lastUpdated: '上次更新',
        sidebarDepth: 2
    },
    markdown:{
        lineNumbers: true
    },
    base:'/learning-java/'
};
