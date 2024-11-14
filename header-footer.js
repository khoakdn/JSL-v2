export const DEFHEADER=(...args)=>HEADER(
    NAV({class: 'navbar'},
        DIV({class: 'navbar-logo'}, A({href: 'index.html'}, 'JSL Logo')),
        INPUT({type: 'text', placeholder: 'Search...', class: 'search-bar'}),
        DIV({class: 'navbar-links'},
            A({href: 'docs.html'}, 'Docs'),
            // ...args,
            A({href: '#'}, 'Playground'),
            IMG({src: 'github-icon.png', alt: 'GitHub', class: 'icon'})
        )
    )
);