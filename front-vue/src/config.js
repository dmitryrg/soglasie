// объединяю переменную и постоянную части конфига
export default Object.assign(
  {},
  // переменная часть
  process.env.NODE_ENV === 'development' // 'production'
    ? {
        serverStatic: 'http://localhost:8080',
        serverApi: 'http://localhost:3001/api',
        serverPug: 'http://localhost:3001'
      }
    : {
        serverStatic: 'http://vue.limestudio.ru',
        // serverStatic: 'http://vue.limestudio.ru/private',
        serverApi: 'https://api.limestudio.ru/apiservervue/api',
        serverPug: 'https://api.limestudio.ru/apiservervue'
      },
  // постоянная часть
  {
    defaultImage: '/avatars/default.png',
    cssImagesDir: '/css-images',
    pictureDir: '/avatars',
    possibleAmountOnPage: [10, 20, 50, 100]
  }
)
