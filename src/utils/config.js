function getCurrentEnvUrl (urlMap) {
  Object.keys(urlMap).map(type => {
    if (!['dev', 'pro'].includes(type)) {
      throw new Error(`find error type [${type}] for api config`)
    }
  })

  // const href = window.location.href;
  // if (href.indexOf('develop') !== -1) {
  //   return urlMap['dev']
  // }
  return urlMap['pro']
}

export const baseURL = getCurrentEnvUrl({
  dev: 'http://develop.e-wolf.top/backend/api',
  pro: 'http://develop.e-wolf.top/backend/api'
})