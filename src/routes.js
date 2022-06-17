const { addBookHandler, getBookHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler } = require('./handler');
const routes = [
  // Menambahkan buku
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  // Menampilkan Seluruh Buku
  {
    method: 'GET',
    path: '/books',
    handler: getBookHandler,
  },
  // Menampilkan detail buku berdasarkan id
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  // Mengubah data buku berdasarkan id
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  // Menghapus data buku berdasarkan id
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
