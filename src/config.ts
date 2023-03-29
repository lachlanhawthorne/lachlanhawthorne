import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
}

export const SITE = {
    // Your site's detail?
    name: 'Portfolio',
    title: 'Lachlan Hawthorne',
    description: 'My design and development portfolio',
    url: 'https://lachlanhawthorne.dev',
    githubUrl: 'https://github.com/lachlanhawthorne/dev',
    listDrafts: true
    // description ?
}

export const PAGE_SIZE = 8