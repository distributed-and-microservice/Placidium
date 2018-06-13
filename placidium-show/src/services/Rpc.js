import request from '../utils/request';

export async function queryAll() {
  return request('http://localhost:8080/rpc');
}

export async function queryOne(payload) {
  return request(`http://localhost:8080/rpc/${payload}`);
}