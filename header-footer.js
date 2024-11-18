export const DEFHEADER=(...args)=>HEADER(
    NAV({class: 'navbar'},
        DIV({class: 'navbar-logo'}, A(IMG({src: './images/jsl3-logo.png'}), {href: 'index.html'}), 'JSL3'),
        INPUT({type: 'text', placeholder: 'Start typing...', class: 'search-bar'}),
        DIV({class: 'navbar-links'},
            A({href: 'docs.html'}, 'Docs'),
            // ...args,
            A({href: '#'}, 'Playground'),
            A({href: 'https://github.com', target: 'blank'}, IMG({src: './images/github.png', alt: 'blank', class: 'icon'}))
        )
    )
);