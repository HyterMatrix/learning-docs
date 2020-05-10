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
                text: '后端编程',
                items: [
                    { text: 'Java', items: [
                            { text: '- Java基础', link: '/java/java-basics/' },
                            { text: '- Spring', link: '/java/spring/' },
                            { text: '- SpringBoot', link: '/java/spring-boot/' },
                            { text: '- SpringCloud', link: '/java/spring-cloud/' },
                        ]
                    },
                    { text: 'Python', items: [
                            { text: '- Python基础', link: '/python/python-basics/' },
                            { text: '- Python模块', link: '/python/python-model/' },
                            // { text: '- Python代码段', link: '/python/python-code-block/' },
                            { text: '- Django', link: '/python/django-2.x/' },
                            { text: '- Scarpy', link: '/python/python-scarpy/' },
                        ]
                    },
                    { text: 'PHP', items: [
                            { text: '- PHP基础', link: '/php/php-basics/' },
                            { text: '- PHP模块', link: '/php/php-model/' },
                            { text: '- PHP代码段', link: '/php/php-code-block/'}
                        ]
                    },
                    { text: 'Go', items: [
                        { text: '- Go基础', link: '/go/go-basics/' },
                        { text: '- Go模块', link: '/go/go-model/' },
                    ]
                    },
                ]
            },
            {
                text: '前端编程',
                items:  [
                    {
                        text: 'JavaScrpt', items: [
                            { text: '- JavaScrpt基础', link: '/javascrpt/javascrpt-basics/' },
                            { text: '- ES6', link: '/javascrpt/es6/' },
                            { text: '- nodeJS基础', link: '/javascrpt/nodejs-basics/' },
                        ]
                    },
                    {
                        text: 'nodeJS', items: [
                            { text: '- nodeJS基础', link: '/nodejs/nodejs-basics/' },
                        ]
                    },
                    {
                        text: 'Electron', items: [
                            { text: '- Electron基础', link: '/electron/' },
                        ]
                    },
                ]
            },
            {
                text: '博客',
                link: 'https://hyter.me/',
            },
            {
                text: '在线文档',
                items: [
                    { text: 'Vue', link: 'https://cn.vuejs.org/v2/api/' },
                    { text: 'Vuex', link: 'https://vuex.vuejs.org/zh/api/#vuex-store' },
                    { text: 'Axios', link: 'https://www.kancloud.cn/yunye/axios/234845' },
                    { text: 'Java开发手册', link: 'http://click.aliyun.com/m/1000019584/' },
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
            // {
            //     text: '项目',
            //     items: [
            //         { text: '', items: [
            //                 { text: '第三方公众号管理平台', link: '/java-project/' },
            //             ]
            //         },
            //       ]
            // },
            // { text: '更新记录', link: '/update/' },
        ],
        sidebar: {

            //===== JAVA START ====
            '/java/java-basics/': [{
                title: 'Java笔记',
                collapsable: false,
                children:[
                '',
                '01-getting-started',
                '02-java-basic',
                '03-java-class-and-object',
                '04-inheritance',
                '05-interface-lambda-innerclass',
                '06-api',
                'QA'
            ]
            }],
            '/java/spring/': [{
                title: '笔记',
                collapsable: false,
                children:[
                    '',
                    'spring-annotation'
                ]
            }],
            '/java/spring-boot/': [{
                title: 'SpringBoot',
                collapsable: false,
                children:[
                    '',
                    '01-spring-boot-config-file',
                    '02-spring-boot-logging',
                    '03-spring-boot-web'
                ]
            }],
            '/java/spring-cloud/': [{
                title: '笔记',
                collapsable: false,
                children:[
                    ''
                ]
            }],
            //===== JAVA END  =====
            //===== JAVASCRPT STATR  =====
            '/javascrpt/es6/': [{
                title: '笔记',
                collapsable: false,
                children:[
                    '',
                    '01-let',
                    '02-destructuring',
                    '03-string',
                    '04-string-methods',
                    '05-regex',
                    '06-number',
                    '07-function',
                    '08-array',
                    '09-object',
                    '10-object-methods',
                ]
            }],
            
            '/nodejs/nodejs-basics/': [{
                title: '笔记',
                collapsable: false,
                children:[
                    ''
                ]
            }],
            //===== JAVASCRPT END  =====

            
            '/php/php-code-block/': [
                ''
            ],
            // ===== PYTHON STATR =======
            '/python/python-basics/':[{
                title: '笔记',
                collapsable: false,
                children:[
                    '',
                '01-var',
                '02-data-type',
                '03-operator',
            ]}
        ],

            '/python/python-model/':[
                '',
                '01-os',
                '02-sys',
            ],
            '/python/python-code-block/':[
                '',
            ],
            '/python/django-2.x/':[
                '',
                '01-intro'
            ],
            // ===== PYTHON END ======




            //  ===== GO START =====
            '/go/go-basics/':[
                '',
                '02-type'
            ],
            //  ===== GO END =====


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
        sidebarDepth: 1
    },
    extendMarkdown(md){
        lineNumbers: true
    },
    base:'/learning-docs/',
    port:8000
};
