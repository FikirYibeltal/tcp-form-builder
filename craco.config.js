// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoLessPlugin = require('craco-less')

// eslint-disable-next-line no-undef
module.exports = {
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
