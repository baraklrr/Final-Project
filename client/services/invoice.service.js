import http from "../http-common";

class InvoiceDataService {
  getAll() {
    return http.get("/invoices");
  }

  get(id) {
    return http.get(`/invoices/${id}`);
  }

  create(data) {
    return http.post("/invoices", data);
  }

  update(id, data) {
    return http.put(`/invoices/${id}`, data);
  }

  delete(id) {
    return http.delete(`/invoices/${id}`);
  }

  deleteAll() {
    return http.delete(`/invoices`);
  }

  findByTitle(title) {
    return http.get(`/invoices?title=${title}`);
  }
}

export default new InvoiceDataService();