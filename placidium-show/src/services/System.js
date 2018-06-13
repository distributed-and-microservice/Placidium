import request from '../utils/request';

export async function queryAll() {
  return request('http://localhost:8080/system');
}

export async function saveSystem(payload) {
  return request(`http://localhost:8080/system/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(payload),
  });
}
