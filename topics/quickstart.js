export const TOPIC=()=>[
    SECTION({class: 'content'},
        H1('Introduction'),
        H2({id: 'whatis-jsl'}, 'What is JSL?'),
        P('JSL (JavaScript Library) is a lightweight, high-performance templating framework designed specifically for web applications, offering native JavaScript syntax to simplify and accelerate HTML generation. Built to integrate seamlessly with modern JavaScript engines, JSL enables developers to produce dynamic and interactive content on both the front-end and back-end, making it a powerful tool for creating highly efficient and responsive web applications.'),
        
        H2({id: 'why-jsl'}, 'Why Choose JSL?'),
        P('Intuitive and Flexible Syntax: JSL is crafted to be easy for JavaScript developers to adopt. You can use familiar JavaScript expressions and builder patterns, reducing the need to learn new syntax and making templating straightforward.'),
        P('Performance Focused: With asynchronous content generation, server-side serial output for chunked transfers, and optimized resource usage, JSL is engineered to handle high demands with minimal resource usage and remarkable speed, both in the browser and on the server.'),
        P('Robust Features for Modern Development: JSL includes essential features for contemporary web applications, such as model-view notifications, multiple insert modes, and complete compatibility with in-browser debugging tools. JSL’s syntax flexibility allows you to mix JavaScript expressions with a builder pattern, adapting to your preferred style.'),
        P('Seamless Debugging and Development: JSL eliminates the need for separate production builds and supports full compatibility with in-browser debuggers, helping developers save time and avoid potential errors.'),

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