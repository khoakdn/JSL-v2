export const TOPIC=()=>[
    SECTION({class: 'content'},
        H1('Quick Start'),
        H2({id: 'whatis-jsl'}, 'What is JSL?'),
        P('Welcome to JSL! This guide will get you set up and running in just a few steps, so you can start building efficient web applications.'),
        
        H2({id: 'why-jsl'}, 'Step 1: Installation'),
        P('Add JSL to your project by linking the library through a CDN:'),
        DIV({class: 'example'}, "<script src=https://cdn.example.com/jsl.min.js></script>"),

        H2({id: 'basic-syntax'}, 'Basic Syntax'),
        P('Each HTML element has a corresponding tag-function. Here’s an example:'),
        DIV({class: 'example'}, "jsl=DIV({class: 'container'}, P('This is a paragraph inside a div.'));"),

        H2({id: 'examples'}, 'Examples'),
        P('Here are some examples to help you get started with JSL:'),
        DIV({class: 'example'}, "jsl=UL(LI('Item 1'), LI('Item 2'), LI('Item 3'));"),

        H2({id: 'api'}, 'API Reference'),
        P('Explore the complete API reference for JSL, including tag functions and attributes.')
    ),
    ASIDE(
        NAV({class: 'sidebar'},
            H2('On this page'),
            A({href: '#whatis-jsl'}, 'What is JSL?'),
            A({href: '#installation'}, 'Installation'),
            A({href: '#basic-syntax'}, 'Basic Syntax'),
            A({href: '#examples'}, 'Examples'),
            A({href: '#api'}, 'API Reference')
        )
    ) // Main content area with different sections
];