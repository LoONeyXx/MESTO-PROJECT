const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = {
    plugins: [
        autoprefixer({ grid: true }),
        cssnano({ preset: 'default' })

    ]
}