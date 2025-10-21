import { defineConfig } from 'vitepress'
import { getPosts } from './theme/serverUtils'


//每页的文章数量
const pageSize = 10

// const isProd = process.env.NODE_ENV === 'production'

const isProd = true

export default defineConfig({
    title: 'Aspasht',
    base: '/',
    cacheDir: './node_modules/vitepress_cache',
    description: 'aspasht,blog,blog-theme',
    ignoreDeadLinks: true,
    themeConfig: {
        posts: await getPosts(pageSize),
        website: 'https://github.com/airene/vitepress-blog-pure', //copyright link
        // 评论的仓库地址 https://giscus.app/ 请按照这个官方初始化后覆盖
        // comment: {
        //     repo: 'airene/vitepress-blog-pure',
        //     repoId: 'MDEwOlJlcG9zaXRvcnkzODIyMjY5Nzg',
        //     categoryId: 'DIC_kwDOFshSIs4CpZga'
        // },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Category', link: '/pages/category' },
            { text: 'Archives', link: '/pages/archives' },
            { text: 'Tags', link: '/pages/tags' },
            { text: 'About', link: '/pages/about' }
            // { text: 'Airene', link: 'http://airene.net' }  -- External link test
        ],
        search: {
            provider: 'local'
        },
        //outline:[2,3],
        outline: {
            label: 'summary'
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/aspasht' }]
    } as any,

    srcExclude: isProd
        ? [
              '**/trash/**/*.md', 
              '**/draft/**/*.md', 
              '**/private-notes/*.md',
              'README.md'
          ]
        : ['README.md'],
    vite: {
        //build: { minify: false }
        server: { port: 5000 }
    }
    /*
      optimizeDeps: {
          keepNames: true
      }
      */
})
