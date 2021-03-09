# basic-rest-api-nodejs

## Mô tả api

GET

- api/dienthoai
- note: trả về tất cả điện thoại trong database dưới dạng JSON

---

GET

- api/dienthoai/:id
- request: params: id
- note: trả về điện thoại có id trong database dưới dạng JSON

---

POST

- api/dienthoai
- request: body JSON
  {
  "name": string",
  "color": string,
  "price": number
  }
- note: cập nhập thêm điện thoại vào database
