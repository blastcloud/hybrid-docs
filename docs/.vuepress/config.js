module.exports = {
    description: "The official documentation for the Hybrid testing framework.",
    head: [
        ['link', {rel:"manifest", href:"/manifest.json"}],
        ['meta', {name: 'twitter:card', content: 'summary'}],
        ['meta', {name: 'twitter:creator', content: '@AKWebDev'}],
        ['meta', {name: 'twitter:title', content: 'Charge up your app or SDK'}],
        ['meta', {name: 'twitter:description', content: 'Charge up your app or SDK with a testing library specifically for Symfony/HttpClientt'}],
        ['meta', {name: 'og:image', content: 'https://hybrid.guzzler.dev/img/Hybrid-logo.png'}],
        ['meta', {name: 'twitter:image', content: 'https://hybrid.guzzler.dev/img/500x500-full.png'}],
        ['meta', {name: 'twitter:image:alt', content: 'The Hybrid logo'}],
        ['link', {rel: 'apple-touch-icon', sizes: '500x500', href:'https://hybrid.guzzler.dev/img/500x500.png'}]
    ],
    themeConfig: {
        logo: '/img/hybrid-logo-no-pump.svg',
        nav: [
            { text: 'Home', link: '/'},
            {
                text: 'Ecosystem',
                items: [
                    {text: 'Guzzler', link:'https://guzzler.dev'}
                ]
            }
        ],
        sidebar: [
            {
                title: 'Guide',
                collapsable: false,
                children: [
                    ['getting-started/', 'Getting Started'],
                    ['mocking-responses/', 'Mocking Responses'],
                    ['expectations/', 'Expectations'],
                    ['assertions/', 'Assertions'],
                    ['helpers/', 'Helpers'],
                    ['extending/', 'Extending Hybrid'],
                    ['troubleshooting/', 'Troubleshooting']
                ]
            },
            {
                title: 'Miscellaneous',
                collapsable: false,
                children: [
                    ['changelog/', 'Changelog']
                ]
            }
        ],
        lastUpdated: 'Last Updated',
        repo: "blastcloud/hybrid",
        serviceWorker: {
            updatePopup: true
        }
    },
    ga: "UA-135533170-2",
    evergreen: true,
    serviceWorker: {
        updatePopup: true
    }
};
