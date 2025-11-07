import postcssPxToRem from 'postcss-pxtorem'
import postcssPresetEnv from 'postcss-preset-env'

export default ({ env }) => {
  const isProduction = env === 'production'
  const plugins = []

  if (isProduction) {
    plugins.push(
      postcssPxToRem({
        propList: ['*'], //Перечисление строк с названиями css свойств, которые будут подвержены PxToRem
        mediaQuery: true,
      })
    )

    plugins.push(
      postcssPresetEnv()
    )
  }
  return {
    plugins,
  }
}