export const DEFHEADER=(...args)=>HEADER(
    NAV({class: 'navbar'},
        DIV({class: 'navbar-logo'}, 'JSL Logo'),
        DIV({class: 'navbar-links'},
            A({href: 'docs.html'}, 'Docs'),
            ...args,
            A({href: '#'}, 'API'),
            A({href: '#'}, 'Playground'),
            IMG({src: 'github-icon.png', alt: 'GitHub', class: 'icon'})
        ),
        INPUT({type: 'text', placeholder: 'Search...', class: 'search-bar'})
    )
);