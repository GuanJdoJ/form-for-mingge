const plugins = []

if (process.env.UNI_OPT_TREESHAKINGNG) {
  plugins.push(require('@dcloudio/vue-cli-plugin-uni-optimize/packages/babel-plugin-uni-api/index.js'))
}

if (
  (
    process.env.UNI_PLATFORM === 'app-plus' &&
    process.env.UNI_USING_V8
  ) ||
  (
    process.env.UNI_PLATFORM === 'h5' &&
    process.env.UNI_H5_BROWSER === 'builtin'
  )
) {
  const path = require('path')

  const isWin = /^win/.test(process.platform)

  const normalizePath = path => (isWin ? path.replace(/\\/g, '/') : path)

  const input = normalizePath(process.env.UNI_INPUT_DIR)
  try {
    plugins.push([
      require('@dcloudio/vue-cli-plugin-hbuilderx/packages/babel-plugin-console'),
      {
        file (file) {
          file = normalizePath(file)
          if (file.indexOf(input) === 0) {
            return path.relative(input, file)
          }
          return false
        }
      }
    ])
  } catch (e) {}
}

process.UNI_LIBRARIES = process.UNI_LIBRARIES || ['@dcloudio/uni-ui']
process.UNI_LIBRARIES.forEach(libraryName => {
  plugins.push([
    'import',
    {
      'libraryName': libraryName,
      'customName': (name) => {
        return `${libraryName}/lib/${name}/${name}`
      }
    }
  ])
})
/**
 * 按需引入element-ui组件，babel转译引入
 * babel-plugin-component
 *	Convert
 * import { Button } from 'components'
 *	to
 * var button = require('components/lib/button')
 * require('components/lib/button/style.css')
 */

plugins.push([
	"component",
	{
		"libraryName": "element-ui",
		"styleLibraryName": "theme-chalk"
	}
])
module.exports = {
  presets: [
    [
      '@vue/app',
      {
        modules: 'commonjs',
        useBuiltIns: process.env.UNI_PLATFORM === 'h5' ? 'usage' : 'entry'
      }
    ]
  ],
  plugins
}
