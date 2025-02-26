import { post, request } from './request';

// TODO: use webpack define plugin and set env vars in heroku
const url = process.env.NODE_ENV === 'production'
  ? 'https://focaai-api.herokuapp.com'
  : 'http://localhost:4000';

export const uploadImage = (image) => {
  const endpoint = `${url}/v2/frame`;
  return post(endpoint, {
    image,
    meta: {
      teacher: 'mr. teacher',
      course: 'Big Data',
      module: 'Introduction',
      class: {
        title: 'Aula maneira',
        date: new Date().get,
      },
    },
  }).then((data) => {
    console.log('=======predictions=======');
    console.log(data);
    console.log('=========================');
  }).catch((err) => {
    console.error(err);
  });
};

export const fetchDashboard = () => {
  const endpoint = `${url}/v2/dashboard`;
  return request(endpoint);
};
