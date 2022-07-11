/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const CracoLessPlugin = require('craco-less')
const path = require('path')
// eslint-disable-next-line no-undef
module.exports = {
    webpack: {
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
            },
        },
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#313E4F' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
}
