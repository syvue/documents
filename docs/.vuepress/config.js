module.exports = {
    title: 'VuePress快速入门', // 标题
    description: 'VuePress教程', //项目描述 
    base:'/documents/',
    head: [                 //配置图标
        ['link',{
            rel:'icon',
            href: `/img/favicon.ico`
        }]
    ],
    themeConfig: {
        nav: [     //配置导航路由
            { text: '首页', link: '/'},   //首页导航
            { text: 'vuepress', link: '/pages/vuepress/'}, //一层目录导航
            { text:'前端技术',              //多层目录导航
              items:[
                 {text:'HTML',link: '/pages/html/'}, 
                 {text:'CSS',link: '/pages/css/'} 
              ]
            }
        ],
        sidebar: [  //侧边栏配置
            {
                title:'VuePress',   
                collapsable: true,
                children: ['/pages/vuepress']
            },
            {
                title:'HTML',
                collapsable:true,
                children: ['/pages/html']
            },
            {
                title:'CSS',
                collapsable:true,
                children:['/pages/css']
            }
        ],
        sidebarDepth: 1,
        repo:'syvue/documents'
    }
}