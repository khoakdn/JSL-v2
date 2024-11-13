
export const TOPIC=()=>[
    ASIDE(
        NAV({class: 'sidebar'},
            H2('Docs'),
            A({href: '#quick-start'}, 'Habla oubla'),
            A({href: '#api'}, 'Boo ba doo ba')
        )
    ), // Main content area with different sections
    SECTION({class: 'content'},
        H1('DUMMY doc'),
        P('Explore the complete API reference for JSL, including tag functions and attributes.')
    )
];