import http from '../http-common';

class ExpenseDataService {
  getAll() {
    return http.get('/expense/total');
  }

  get(id) {
    return http.get(`/expense/${id}`);
  }

  create(data) {
    return http.post('/expense/create', data);
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
