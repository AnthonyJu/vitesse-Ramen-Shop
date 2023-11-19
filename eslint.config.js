import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-plugin'
import anthony_ju from '@anthony-ju/eslint-config'

export default antfu(
  {
    ...anthony_ju,
    ignorePatterns: [
      '*.scss',
      '*.yaml',
      'public/**/*',
      'src/assets/**/*',
    ],
  },
  unocss.configs.flat,
)
