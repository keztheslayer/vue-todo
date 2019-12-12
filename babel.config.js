module.exports = {
    presets : [
        [
            '@babel/preset-env', {
                targets : {
                    browsers : [
                        '> 1% in RU',
                        'Chrome >= 49',
                        'Firefox >= 52',
                        'Safari >= 10',
                        'Edge >= 12',
                        'Explorer >= 11',
                        'not op_mini all',
                    ],
                    node : 'current',
                },
                useBuiltIns : 'entry',
                debug       : false,
                modules     : false,
            },
        ],
    ],
    plugins : [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-regenerator',
        '@babel/plugin-transform-destructuring',
    ],
    env : {
        test : {
            presets : [
                '@babel/preset-env',
            ],
            plugins : [
                '@babel/plugin-transform-modules-commonjs',
                'dynamic-import-node',
                '@babel/plugin-transform-runtime',
            ],
        },
    },
};
