"use strict";
const fakeDienThoai = [
  {
    id: 1,
    name: "Iphone X",
    color: "Black",
    price: 30000000,
  },
  {
    id: 2,
    name: "Samsung S9",
    color: "White",
    price: 24000000,
  },
  {
    id: 3,
    name: "Oppo F5",
    color: "Red",
    price: 7000000,
  },
];
function getDienThoai(id) {
  return fakeDienThoai.find((e) => e.id == id);
}
module.exports = (router) => {
  router.get("/dienthoai/:id", (request, response) => {
    response.send(getDienThoai(request.params.id));
  });
  router.get("/dienthoai", (request, response) => {
    response.send(fakeDienThoai);
  });
  router.post("/dienthoai", (request, response) => {
    fakeDienThoai.push({
      id: fakeDienThoai.length + 1,
      name: request.body.name,
      color: request.body.color,
      price: request.body.price,
    });
    response.send({
      message: "Them dien thoai thanh cong",
      id: fakeDienThoai.length,
    });
  });
};
