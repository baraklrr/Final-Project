import http from '../http-common';
import authHeader from './auth-header';

class ExpenseDataService {
  getAll() {
    return http.get('/expense/total');
  }

  get(id) {
    return http.get(`/expense/${id}`);
  }

 async create(data) {
    const auth = await authHeader();
    return http.post('/expense/create', data,{ headers: auth });
  }

  update(id, data) {
    return http.put(`/expense/${id}`, data);
  }

  delete(id) {
    return http.delete(`/expense/${id}`);
  }

  deleteAll() {
    return http.delete(`/expense`);
  }

  findByTitle(title) {
    return http.get(`/expense?title=${title}`);
  }

  exppenseSum(){
  return http.get(`/expense/sum`);
  }

  exppenseVatSum(){
    return http.get(`/expense/vatSum`);
 }

 exppenseIrsSum(){
  return http.get(`/expense/irsSum`);
}



}

export default new ExpenseDataService();
