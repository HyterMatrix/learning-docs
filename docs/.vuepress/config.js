module.exports = {
    lang: 'zh-CN',
    title: '我的学习笔记',
    description: '千里之行，始于足下',
    head: [
        ['link', {rel: 'icon', href: 'image/favicon.ico'}]
    ],
    themeConfig: {
        home: '/',
        logo: 'image/logo.png',
        sidebarDepth: 1,
        navbar: [
            {
                text:'Java',
                children: [
                    {
                        text: 'Java基础',
                        link: '/java/java-basics/'
                    }, 
                    {
                        text: 'Spring相关',
                        children: [
                            {
                                text: 'Sping',
                                link: '/java/spring/',
                            },
                            {
                                text: 'Spring Boot',
                                link: '/java/spring-boot/',
                            },
                            {
                                text: 'Spring Cloud',
                                link: '/java/spring-cloud/',
                            },
                        ]
                    },
                   
                ],
            },
            {
                text: 'Python', 
                children: [
                    {
                        text: 'Python基础',
                        link: '/python/python-basics/'
                    },
                    {
                        text: 'Python模块',
                        link: '/python/python-model/'
                    },
                    {
                        text: 'Python专题',
                        link: '/python/python-zhuanti/'
                    },
                    {
                        text: 'Web框架',
                        children: [
                            {
                                text: 'Django2.x',
                                link: '/python/django-2.x/'
                            }
                        ]
                    }
                    
                ]
            },
            {
                text: 'Go',
                children: [
                    {
                        text: 'Go基础',
                        link: '/go/go-basics/'
                    }
                ]
            },
            {
                text: 'PHP',
                children: [
                    {
                        text: 'PHP基础',
                        link: '/php/php-basics/'
                    },
                    {
                        text: 'PHP代码',
                        link: '/php/php-code-block/'
                    }
                ]
            },
            {
                text: '前端技术',
                children: [
                    {
                        text: 'JavaScript',
                        children: [
                            {
                                text: 'es6',
                                link: '/javascript/es6/',
                            }
                        ]
                    },
                    {
                        text: 'nodeJs',
                        children: [
                            {
                                text: 'nodeJs',
                                link: '/nodejs/nodejs-basics/',
                            }
                        ]
                    },
                    {
                        text: 'Vue',
                        children: [
                            {
                                text: 'Vuejs基础',
                                link: '/vuejs/'
                            }
                            
                        ]
                    },
                    {
                        text: 'Electron',
                        children: [
                            {
                                text: 'Electron基础',
                                link: '/nodejs/nodejs-basics/',
                            },
                            {
                                text: 'Electron项目',
                                link: '/nodejs/nodejs-basics/',
                            },

                        ]
                    }
                ]
            },
            {
                text: '数据库',
                children: [
                    {
                        text: 'Mysql',
                        children: [
                            {
                                text: '基础知识',
                                link: '/',
                            },
                            {
                                text: 'Mysql5.7.x',
                                link: '/',
                            },
                            {
                                text: 'Mysql8.x',
                                link: '/',
                            }
                        ]
                    },
                    {
                        text: 'OceanBase',
                        children: [
                            {
                                text: '基础知识',
                                link: '/',
                            }
                        ]
                    }
                ]
            },
            {
                text: "开发相关",
                children: [
                    {
                        text: 'Git',
                        children: [
                            {
                                text: 'Git基础',
                                link: '/server/git/'
                            }
                        ]
                        
                    },
                    {
                        text: 'Docker',
                        link: '/server/'
                    }

                ]
            }
        ],
        // 侧边栏对象
        sidebar: {
            // java 基础知识
            '/java/java-basics/': [{
                text: 'Java基础笔记',
                children:[
                    'README.md',
                    '01-getting-started.md',
                    '02-java-basic.md',
                    '03-java-class-and-object.md',
                    '04-inheritance.md',
                    '05-interface-lambda-innerclass.md',
                    '06-api.md',
                    'QA.md'
                ]
            }],

            // spring 
            '/java/spring/':[{
                text: 'Spring学习笔记',
                children: [
                    'README.md',
                    'spring-annotation.md',
                ]
            }],

            // spring-boot
            '/java/spring-boot':[{
                text: 'SpringBoot学习笔记',
                children: [
                    'README.md',
                    '01-spring-boot-config-file.md',
                    '02-spring-boot-logging.md',
                    '03-spring-boot-web.md'
                ]
            }],

            // spring-cloud
            '/java/spring-cloud':[{
                text: 'SpringCloud学习笔记',
                children: [
                    'README.md',
                ]
            }],

            // javascript
            '/javascript/es6': [{
                text: 'ES6学习笔记',
                children: [
                    'README.md',
                    '01-let.md',
                    '02-destructuring.md',
                    '03-string.md',
                    '04-string-methods.md',
                    '05-regex.md',
                    '06-number.md',
                    '07-function.md',
                    '08-array.md',
                    '09-object.md',
                    '10-object-methods.md',
                ]
            }],
            // nodjs
            // php
            // python
            '/python/python-basics': [{
                text: 'Python基础学习笔记',
                children: [
                    'README.md',
                    '01-var.md',
                    '02-data-type.md',
                    '03-operator.md',
                ]
            }],
            // python模块
            '/python/python-model': [{
                text: 'Python模块学习',
                children: [
                    'README.md',
                    '01-os.md',
                    '02-sys.md',
                ]
            }],
            // python专题
            '/python/python-zhuanti': [{
                text: 'Python专题学习',
                children: [
                    'README.md',
                    '01-asyncio.md',
                ]
            }],
            // django-2.x
            '/python/django-2.x': [{
                text: 'Django-2.x学习笔记',
                children: [
                    'README.md',
                    '01-intro.md'
                ]
               
            }],
            // go
            '/go/go-basics/': [{
                text: 'Go基础学习笔记',
                children: [
                    'README.md',
                    '02-type.md'
                ]
            }]
        },
    },
    base: '/learning-docs/'
};