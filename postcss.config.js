import postcssPxToRem from 'postcss-pxtorem'

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
  }
  return {
    plugins,
  }
}