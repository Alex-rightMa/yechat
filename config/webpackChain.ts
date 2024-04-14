import Components from 'unplugin-vue-components/webpack';
import AutoImport from 'unplugin-auto-import/webpack';
import NutUIResolver from '@nutui/auto-import-resolver';
import { UnifiedWebpackPluginV5 } from "weapp-tailwindcss/webpack";

const commonChain = (chain, WeappTailwindcssDisabled) => {
  // https://github.com/antfu/unplugin-auto-import
  chain.plugin('unplugin-auto-import').use(AutoImport({
    imports: ['vue', 'pinia',],
    dts: 'types/auto-imports.d.ts',
    dirs: [
      'src/components',
      'src/stores',
    ],
    vueTemplate: true,
  }))
  // 添加组件按需引入, 自动引入 `src/components` 目录下的组件
  // https://github.com/antfu/unplugin-vue-components
  chain.plugin('unplugin-vue-components').use(Components({
    dts: 'types/components.d.ts',
    dirs: ['src/components', 'src/layouts'],
    resolvers: [
      NutUIResolver({
        importStyle: 'sass',
        taro: true
      })
    ]
  }))
  chain.merge({
    plugin: {
      install: {
        plugin: UnifiedWebpackPluginV5,
        args: [
          {
            appType: 'taro',
            disabled: WeappTailwindcssDisabled,
            injectAdditionalCssVarScope: true,
            rem2rpx: true
          }
        ]
      }
    },
    module: {
      rule: {
        mjsScript: {
          test: /\.mjs$/,
          include: [/pinia/, /unplugin-vue-components/, /unplugin-auto-import/],
          use: {
            babelLoader: {
              loader: require.resolve('babel-loader'),
            },
          },
        },
      },
    },
  })
}

export default commonChain;