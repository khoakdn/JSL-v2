export const TOPIC=()=>[
    // ASIDE(
    //     NAV({class: 'sidebar'},
    //         H2('Docs'),
    //         A({href: '#quick-start'}, 'Quick Start'),
    //         A({href: '#installation'}, 'Installation'),
    //         A({href: '#basic-syntax'}, 'Basic Syntax'),
    //         A({href: '#examples'}, 'Examples'),
    //         A({href: '#api'}, 'API Reference')
    //     )
    // ), // Main content area with different sections
    SECTION({class: 'content'},
        H1('JSL Documentation'),
        H2({id: 'quick-start'}, 'Quick Start'),
        P('JSL allows you to create HTML content with JavaScript tag functions.'),
        DIV({class: 'example'}, "jsl=DIV('Hello, World!');"),
        
        H2({id: 'installation'}, 'Installation'),
        P('Include the JSL script file in your HTML:'),
        DIV({class: 'example'}),

        H2({id: 'basic-syntax'}, 'Basic Syntax'),
        P('Each HTML element has a corresponding tag-function. Here’s an example:'),
        DIV({class: 'example'}, "jsl=DIV({class: 'container'}, P('This is a paragraph inside a div.'));"),

        H2({id: 'examples'}, 'Examples'),
        P('Here are some examples to help you get started with JSL:'),
        DIV({class: 'example'}, "jsl=UL(LI('Item 1'), LI('Item 2'), LI('Item 3'));"),

        H2({id: 'api'}, 'API Reference'),
        P('Explore the complete API reference for JSL, including tag functions and attributes.')
    )
];