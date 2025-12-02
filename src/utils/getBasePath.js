const BASE_PATH = '/stream-vibe'

const getBasePath = (path = '') => {
  if (path === '/') {
    return BASE_PATH + '/'
  }
  return BASE_PATH + path
}

export default getBasePath

