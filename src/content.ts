export const DocPaths = new Map<string, string>([
    ['introduction', 'introduction/introduction'],
    ['installation', 'introduction/installation'],

    ['components', 'components/overview'],
    ['async-content', 'components/async-content'],
    ['counter', 'components/counter'],
    ['observer', 'components/observer']
])

export const DocsMenu: { title: string, items: MenuItem[] }[] = [
    {
        title: 'Getting Started',
        items: [
            { title: 'Introduction', url: 'introduction' },
            { title: 'Installation', url: 'installation' }
        ]
    },
    {
        title: 'Components',
        items: [
            // { title: 'Overview', url: 'components' },
            { title: 'Async Content', url: 'async-content' },
            { title: 'Counter', url: 'counter' },
            { title: 'Observer', url: 'observer' }
        ]
    }
]

interface MenuItem {
    title: string;
    url: string;
}