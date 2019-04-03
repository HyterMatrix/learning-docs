module.exports = {
    title: '学习文档',
    description: '自学记录的文档',
    themeConfig: {
        nav: [
            {
                text: 'Java系列',
                items: [
                    { text: 'Java', link: '/java/' },
                    { text: 'SpringCloud', link: '/spring-boot/' },
                    { text: 'SpringBoot', link: '/spring-cloud/' },
                  ]
            },
            { text: '博客', link: 'https://hyter.me/' },
            {
                text: '备用地址',
                items: [
                    { text: '备用博客地址', link: 'https://HyterMatrix.coding.me/blog' },
                    { text: '备用文档地址', link: 'https://HyterMatrix.coding.me/learning-doce' }
                  ]
            },
            { text: '更新记录', link: '/update/' },
        ],
        sidebar: {
            '/java/': [{
                title: '笔记',
                collapsable: false,
                children:[
                '',
                '01介绍',
                '02基础知识',
                '03对象与类',
                '04继承',

                'QA']
            }],
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
            '/es6/': [{
                title: '笔记',
                collapsable: false,
                children:[
                    ''
                ]
            }],
            '/nodejs/': [{
                title: '笔记',
                collapsable: false,
                children:[
                    ''
                ]
            }],

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
    base:'/learning-doce/'
};
