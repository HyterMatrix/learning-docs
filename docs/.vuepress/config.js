module.exports = {
    title: '我的学习笔记',
    description: '千里之行，始于足下',
    themeConfig: {
        // repo: 'HyterMatrix/learning-docs',
        // repoLabel: '查看源码',
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'HyterMatrix/learning-docs',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        nav: [
            {
                text: 'Java系列',
                items: [
                    { text: 'Java', link: '/java/' },
                    { text: 'Spring', link: '/spring/' },
                    { text: 'SpringBoot', link: '/spring-boot/' },
                    { text: 'SpringCloud', link: '/spring-cloud/' },
                    { text: '每周一练', link: '/python-scarpy/' },
                    { text: '文档', items: [
                            { text: '阿里巴巴Java开发手册', link: 'http://click.aliyun.com/m/1000019584/' },
                        ] 
                    },
                  ]
            },
            {
                text: 'Python系列',
                items: [
                    { text: 'Python', link: '/python/' },
                    { text: 'Python模块', link: '/python-model/' },
                    { text: 'Django', link: '/django/' },
                    { text: 'Scarpy', link: '/python-scarpy/' },
                    { text: '每周一练', link: '/python-scarpy/' },
                  ]
            },
            {
                text: '博客',
                items: [
                    { text: '博客', link: 'https://hyter.me/' },
                    { text: '备用博客地址', link: 'https://HyterMatrix.coding.me/blog' },
                    { text: '备用文档地址', link: 'https://HyterMatrix.coding.me/learning-docs' }
                  ]
            },
            {
                text: '在线文档',
                items: [
                    { text: 'Vue', link: 'https://cn.vuejs.org/v2/api/' },
                    { text: 'Vuex', link: 'https://vuex.vuejs.org/zh/api/#vuex-store' },
                    { text: 'Axios', link: 'https://www.kancloud.cn/yunye/axios/234845' }
                  ]
            },
            {
                text: '在线工具',
                items: [
                    { text: '在线服务',items:[
                        { text: 'Boot CDN', link: 'https://www.bootcdn.cn/'},
                        { text: '微信 CDN', link: 'https://qydev.weixin.qq.com/cdn/cdnjs.html'},
                        { text: '奇舞团 CDN', link: 'https://cdn.baomitu.com/'},
                    ]},
                    { text: '开源镜像', items: [
                        { text: '阿里', link: 'https://opsx.alibaba.com/' },
                        { text: '清华', link: 'https://mirrors.tuna.tsinghua.edu.cn/' },
                        { text: 'Azure', link: 'https://mirror.azure.cn/' },
                        ] 
                    },
                  ]
            },
            {
                text: '项目',
                items: [
                    { text: '', items: [
                            { text: '第三方公众号管理平台', link: '/java-project/' },
                        ] 
                    },
                  ]
            },
            // { text: '更新记录', link: '/update/' },
        ],
        sidebar: {
            '/java/': [{
                title: 'Java笔记',
                collapsable: false,
                children:[
                '',
                '01-getting-started',
                '02-java-basic',
                '03-java-class-and-object',
                '04-inheritance',
                '05-interface-lambda-innerclass',
                'QA']
            }],
            '/spring/': [{
                title: '笔记',
                collapsable: false,
                children:[
                    '',
                    'spring-annotation'
                ]
            }],
            '/spring-boot/': [{
                title: 'SpringBoot',
                collapsable: false,
                children:[
                    '',
                    '01-spring-boot-config-file'
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
    base:'/learning-docs/',
    port:8000
};
