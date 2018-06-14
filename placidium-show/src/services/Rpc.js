import request from '../utils/request';

export async function queryAll() {
  return request('http://localhost:8080/rpc');
}

export async function queryOne(payload) {
  return request(`http://localhost:8080/rpc/${payload}`);
}

export async function updateOne(payload) {
  return request(`http://localhost:8080/rpc`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(payload),
  });
}