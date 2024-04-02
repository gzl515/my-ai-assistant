// import jwt from 'jsonwebtoken';

export const getToday = function () {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const day = today.getDate()
  const formattedMonth = month < 10 ? `0${month}` : month
  const formattedDay = day < 10 ? `0${day}` : day
  return `${year}-${formattedMonth}-${formattedDay}`
}

export const generJWT = function () {
  const [id, secretKey] = process.env.TARO_APP_ZHIPU_KEY.split('.')
  const payload = {
    api_key: id,
    exp: 10000,
    timestamp: new Date().getTime()
  };

  // 生成JWT token
  // const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

  // // 输出生成的token
  // console.log('Generated JWT token:', token);

}