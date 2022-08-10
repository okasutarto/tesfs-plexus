## Endpoints

List of Available Endpoints:

- `GET /data`
- `PUT /data/:id`
- `GET /weapons`
- `POST /oAuth`
- `GET /categories`
- `POST /products`
- `GET /products/:productId`
- `PUT /products/:productId`
- `DELETE /products/:productId`

### GET /products

#### Description

- Get all the products data

#### Request

headers:
{
"access_token": "string"
}

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "message": "Ok",
    "data": [
      {
        "id": 3,
        "name": "Adidas",
        "description": "Adidas Ultraboost 4.0 DNA",
        "price": 3300000,
        "imgUrl": "https://www.shooos.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/d/adidas-ultraboost-4-0-dna-w-core-black-core-black-ftwr-white-fy91231.jpg",
        "categoryId": 1,
        "authorId": 2,
        "createdAt": "2022-06-04T18:27:48.438Z",
        "updatedAt": "2022-06-05T05:44:34.665Z",
        "Category": {
          "id": 1,
          "name": "Sneakers",
          "createdAt": "2022-06-04T18:27:48.426Z",
          "updatedAt": "2022-06-04T18:27:48.426Z"
        },
        "User": {
          "id": 2,
          "username": "staff1",
          "email": "staff1@gmail.com",
          "password": "$2a$10$A2MPzsyqrOT.H29QkKQ5KOYhJ80RV8hofBL9MW75WWqcPZLFI1pk2",
          "role": "Staff",
          "phoneNumber": "38618-384-3051",
          "address": "2 Sheridan Drive",
          "createdAt": "2022-06-04T18:27:48.147Z",
          "updatedAt": "2022-06-04T18:27:48.147Z"
        }
      },
      {
        "id": 4,
        "name": "Timberland",
        "description": "Timberland Women Classic Boat 2 Eye Boatshoe",
        "price": 1900000,
        "imgUrl": "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/8/29/b36d6f13-783b-4976-a114-b6c46f45bb47.jpg",
        "categoryId": 1,
        "authorId": 3,
        "createdAt": "2022-06-04T18:27:48.438Z",
        "updatedAt": "2022-06-05T04:45:18.255Z",
        "Category": {
          "id": 1,
          "name": "Sneakers",
          "createdAt": "2022-06-04T18:27:48.426Z",
          "updatedAt": "2022-06-04T18:27:48.426Z"
        },
        "User": {
          "id": 3,
          "username": "staff2",
          "email": "staff2@gmail.com",
          "password": "$2a$10$zGemGLOcH6GUcwH2xJCDHu1TXk1quKC/yU1qlNHl5mzjILE3VCjJC",
          "role": "Staff",
          "phoneNumber": "3458-384-3051",
          "address": "2 Sheridan Drive",
          "createdAt": "2022-06-04T18:27:48.279Z",
          "updatedAt": "2022-06-04T18:27:48.279Z"
        }
      },
      {
        "id": 5,
        "name": "Saint Laurent",
        "description": "Saint Laurent Monogram Espadrilles In Lambskin White",
        "price": 5680000,
        "imgUrl": "https://images.tokopedia.net/img/cache/500-square/hDjmkQ/2021/3/25/b5b388bd-9ad9-4311-8fb1-279622181815.jpg",
        "categoryId": 3,
        "authorId": 4,
        "createdAt": "2022-06-04T18:27:48.438Z",
        "updatedAt": "2022-06-04T18:27:48.438Z",
        "Category": {
          "id": 3,
          "name": "Slip On",
          "createdAt": "2022-06-04T18:27:48.426Z",
          "updatedAt": "2022-06-04T18:27:48.426Z"
        },
        "User": {
          "id": 4,
          "username": "staff3",
          "email": "staff3@gmail.com",
          "password": "$2a$10$Pq7jLrHvFiXRoLJ5JIJ9wO.6yY0aevOt9nkHBJwB81rlckNKO.tFu",
          "role": "Staff",
          "phoneNumber": "318-3674-3051",
          "address": "2 Sheridan Drive",
          "createdAt": "2022-06-04T18:27:48.409Z",
          "updatedAt": "2022-06-04T18:27:48.409Z"
        }
      },
      {
        "id": 6,
        "name": "Asics",
        "description": "Asics GEL KAYANO 28 PLATINUM",
        "price": 2400000,
        "imgUrl": "https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/1/10/f6adea4d-cb1c-4539-88a8-1caab3434b71.jpg",
        "categoryId": 2,
        "authorId": 2,
        "createdAt": "2022-06-04T18:27:48.438Z",
        "updatedAt": "2022-06-04T18:27:48.438Z",
        "Category": {
          "id": 2,
          "name": "Running",
          "createdAt": "2022-06-04T18:27:48.426Z",
          "updatedAt": "2022-06-04T18:27:48.426Z"
        },
        "User": {
          "id": 2,
          "username": "staff1",
          "email": "staff1@gmail.com",
          "password": "$2a$10$A2MPzsyqrOT.H29QkKQ5KOYhJ80RV8hofBL9MW75WWqcPZLFI1pk2",
          "role": "Staff",
          "phoneNumber": "38618-384-3051",
          "address": "2 Sheridan Drive",
          "createdAt": "2022-06-04T18:27:48.147Z",
          "updatedAt": "2022-06-04T18:27:48.147Z"
        }
      },
      {
        "id": 7,
        "name": "Timberland",
        "description": "Timberland Killington Chukka",
        "price": 1975000,
        "imgUrl": "https://images.tokopedia.net/img/cache/900/product-1/2019/7/26/19460825/19460825_eaa8bc6b-787d-4edd-9933-6164d82fedd1_794_794",
        "categoryId": 4,
        "authorId": 2,
        "createdAt": "2022-06-04T18:27:48.438Z",
        "updatedAt": "2022-06-04T18:27:48.438Z",
        "Category": {
          "id": 4,
          "name": "Boots",
          "createdAt": "2022-06-04T18:27:48.426Z",
          "updatedAt": "2022-06-04T18:27:48.426Z"
        },
        "User": {
          "id": 2,
          "username": "staff1",
          "email": "staff1@gmail.com",
          "password": "$2a$10$A2MPzsyqrOT.H29QkKQ5KOYhJ80RV8hofBL9MW75WWqcPZLFI1pk2",
          "role": "Staff",
          "phoneNumber": "38618-384-3051",
          "address": "2 Sheridan Drive",
          "createdAt": "2022-06-04T18:27:48.147Z",
          "updatedAt": "2022-06-04T18:27:48.147Z"
        }
      },
      {
        "id": 8,
        "name": "Puma",
        "description": " Puma X Aka Boku Future Rider solar power",
        "price": 1799000,
        "imgUrl": "https://cdn.fashdirect.com/webadmin/items/website/1794572/image_2_114976430853_1.jpg",
        "categoryId": 1,
        "authorId": 1,
        "createdAt": "2022-06-04T18:27:48.438Z",
        "updatedAt": "2022-06-04T18:27:48.438Z",
        "Category": {
          "id": 1,
          "name": "Sneakers",
          "createdAt": "2022-06-04T18:27:48.426Z",
          "updatedAt": "2022-06-04T18:27:48.426Z"
        },
        "User": {
          "id": 1,
          "username": "admin",
          "email": "admin@gmail.com",
          "password": "$2a$10$dncJybmMobFlxDyFyOrCce8R/eO.D3MZMB5tiulnkg8W1LO6kL3gq",
          "role": "Admin",
          "phoneNumber": "31218-384-3051",
          "address": "2 Sheridan Drive",
          "createdAt": "2022-06-04T18:27:47.992Z",
          "updatedAt": "2022-06-04T18:27:47.992Z"
        }
      },
      {
        "id": 9,
        "name": "Under Armour",
        "description": "Under Armour W Hovr Phantom 2 Runanywr",
        "price": 1300000,
        "imgUrl": "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/9/20/12020a3d-aafb-49e0-bbbb-b3e7b1285344.jpg",
        "categoryId": 2,
        "authorId": 1,
        "createdAt": "2022-06-04T18:27:48.438Z",
        "updatedAt": "2022-06-04T18:27:48.438Z",
        "Category": {
          "id": 2,
          "name": "Running",
          "createdAt": "2022-06-04T18:27:48.426Z",
          "updatedAt": "2022-06-04T18:27:48.426Z"
        },
        "User": {
          "id": 1,
          "username": "admin",
          "email": "admin@gmail.com",
          "password": "$2a$10$dncJybmMobFlxDyFyOrCce8R/eO.D3MZMB5tiulnkg8W1LO6kL3gq",
          "role": "Admin",
          "phoneNumber": "31218-384-3051",
          "address": "2 Sheridan Drive",
          "createdAt": "2022-06-04T18:27:47.992Z",
          "updatedAt": "2022-06-04T18:27:47.992Z"
        }
      },
      {
        "id": 10,
        "name": "Vans",
        "description": "Vans Slip On Vault OG 2016",
        "price": 2400000,
        "imgUrl": "https://i.pinimg.com/originals/0e/39/fa/0e39fafca3b855fedeea88247aaeeb4a.jpg",
        "categoryId": 3,
        "authorId": 4,
        "createdAt": "2022-06-04T18:27:48.438Z",
        "updatedAt": "2022-06-04T18:27:48.438Z",
        "Category": {
          "id": 3,
          "name": "Slip On",
          "createdAt": "2022-06-04T18:27:48.426Z",
          "updatedAt": "2022-06-04T18:27:48.426Z"
        },
        "User": {
          "id": 4,
          "username": "staff3",
          "email": "staff3@gmail.com",
          "password": "$2a$10$Pq7jLrHvFiXRoLJ5JIJ9wO.6yY0aevOt9nkHBJwB81rlckNKO.tFu",
          "role": "Staff",
          "phoneNumber": "318-3674-3051",
          "address": "2 Sheridan Drive",
          "createdAt": "2022-06-04T18:27:48.409Z",
          "updatedAt": "2022-06-04T18:27:48.409Z"
        }
      },
      {
        "id": 12,
        "name": "Adidas",
        "description": "asdf",
        "price": 3000000,
        "imgUrl": "https://www.shooos.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/d/adidas-ultraboost-4-0-dna-w-core-black-core-black-ftwr-white-fy91231.jpg",
        "categoryId": 1,
        "authorId": 1,
        "createdAt": "2022-06-05T04:42:53.149Z",
        "updatedAt": "2022-06-05T04:53:54.894Z",
        "Category": {
          "id": 1,
          "name": "Sneakers",
          "createdAt": "2022-06-04T18:27:48.426Z",
          "updatedAt": "2022-06-04T18:27:48.426Z"
        },
        "User": {
          "id": 1,
          "username": "admin",
          "email": "admin@gmail.com",
          "password": "$2a$10$dncJybmMobFlxDyFyOrCce8R/eO.D3MZMB5tiulnkg8W1LO6kL3gq",
          "role": "Admin",
          "phoneNumber": "31218-384-3051",
          "address": "2 Sheridan Drive",
          "createdAt": "2022-06-04T18:27:47.992Z",
          "updatedAt": "2022-06-04T18:27:47.992Z"
        }
      }
    ]
  }
  ```

_500 - Internal Server Error_

```json
{
  "statusCode": 500,
  "error": {
    "message": "Internal Server Error"
  }
}
```

### POST /products

#### Description

- Create New Product

#### Request

- Headers
  ```json
  {
    "access_token": "string"
  }
  ```
- Body
  ```json
  {
    "name": "String",
    "description": "text",
    "price": "integer",
    "imgUrl": "string",
    "categoryId": "integer",
    "authorId": "integer"
  }
  ```

#### Response

_201 - Created_

- Body
  ```json
  {
    "statusCode": 201,
    "message": "Product created successfully",
    "data": {
      "id": 13,
      "name": "New Balance",
      "description": "New Balance 327 Magnet/Team Red",
      "price": 3650000,
      "imgUrl": "https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/4/15/7f2d661d-60e7-4614-a0ae-799b20222549.jpg",
      "categoryId": 1,
      "authorId": 1,
      "updatedAt": "2022-06-05T15:44:19.410Z",
      "createdAt": "2022-06-05T15:44:19.410Z"
    }
  }
  ```

_400 - SequelizeValidationError_ or SequelizeUniqueConstraintError

- Body

  ```json
  {
    "statusCode": 400,
    "message": [
      "Name is required",
      "Description is required",
      "Please input price",
      "Minimum price is 1000000",
      "Image Url is required",
      "Validation isUrl on imgUrl failed"
    ]
  }
  ```

### GET /products/:productId

#### Description

- Get a product by its id

#### Request

- Headers:
  ```json
  {
    "access_token": "string"
  }
  ```
- params:
  ```json
  {
    "productId": "integer (required)"
  }
  ```

#### Response

_200 - OK_

- Body

  ```json
  {
    "statusCode": 200,
    "message": "Ok",
    "data": {
      "id": 3,
      "name": "Adidas",
      "description": "Adidas Ultraboost 4.0 DNA",
      "price": 3300000,
      "imgUrl": "https://www.shooos.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/d/adidas-ultraboost-4-0-dna-w-core-black-core-black-ftwr-white-fy91231.jpg",
      "categoryId": 1,
      "authorId": 2,
      "createdAt": "2022-06-04T18:27:48.438Z",
      "updatedAt": "2022-06-05T05:44:34.665Z",
      "Category": {
        "id": 1,
        "name": "Sneakers",
        "createdAt": "2022-06-04T18:27:48.426Z",
        "updatedAt": "2022-06-04T18:27:48.426Z"
      }
    }
  }
  ```

  _404 - Not Found_

  ```json
  {
    "statusCode": 404,
    "message": "Product Not Found"
  }
  ```

### PUT /products/:productId

#### Description

- Edit product value by its id

#### Request

- Headers:
  ```json
  {
    "access_token": "string"
  }
  ```
- params:
  ```json
  {
    "productId": "integer (required)"
  }
  ```
- Body:
  ```json
  {
    "name": "String",
    "description": "text",
    "price": "integer",
    "imgUrl": "string",
    "categoryId": "integer"
  }
  ```

#### Response

_200 - OK_

- Body

  ```json
  {
    "statusCode": 200,
    "message": "Ok",
    "data": [
      1,
      [
        {
          "id": 3,
          "name": "Adidas",
          "description": "Adidas Ultraboost 4.0 DNA",
          "price": 3500000,
          "imgUrl": "https://www.shooos.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/d/adidas-ultraboost-4-0-dna-w-core-black-core-black-ftwr-white-fy91231.jpg",
          "categoryId": 1,
          "authorId": 2,
          "createdAt": "2022-06-04T18:27:48.438Z",
          "updatedAt": "2022-06-05T16:04:29.086Z"
        }
      ]
    ]
  }
  ```

  _404 - Not Found_

  - Body:

  ```json
  {
    "statusCode": 404,
    "message": "Product Not Found"
  }
  ```

_400 - SequelizeValidationError_ or SequelizeUniqueConstraintError

```json
{
  "statusCode": 400,
  "message": [
    "Name is required",
    "Description is required",
    "Please input price",
    "Minimum price is 1000000",
    "Image Url is required",
    "Validation isUrl on imgUrl failed"
  ]
}
```

### DELETE /products/:productId

#### Description

- Remove a product data based on given id

#### Request

- Headers:
  ```json
  {
    "access_token": "string"
  }
  ```
- params:
  ```json
  {
    "productId": "integer (required)"
  }
  ```

#### Response

_200 - OK_

- Body

  ```json
  {
    "statusCode": 200,
    "message": "Timberland success to delete"
  }
  ```

  _404 - Not Found_

- Body
  ```json
  {
    "statusCode": 404,
    "error": {
      "message": "Product not found"
    }
  }
  ```

### POST /register

#### Description

- Remove a product data based on given id

#### Request

- Body:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string",
    "phoneNumber": "string",
    "address": "string"
  }
  ```

#### Response

_201 - "User Created Successfully"_

- Body

  ```json
  {
    "statusCode": 201,
    "message": "User created successfully",
    "data": {
      "id": 8,
      "username": "staff7",
      "email": "staff7@gmail.com",
      "password": "$2a$10$dimNpYbDzAGIIG8wlJ9SY.rRvaucovQjq1UM.0cwMTi5M8r0Cayzq",
      "role": "Admin",
      "phoneNumber": "08123456789",
      "address": "Jl. Kenangan",
      "updatedAt": "2022-06-05T16:18:16.743Z",
      "createdAt": "2022-06-05T16:18:16.743Z"
    }
  }
  ```

  _400 - SequelizeValidationError_ or SequelizeUniqueConstraintError

- Body
  ```json
  {
    "statusCode": 400,
    "message": [
      "Username is required",
      "Email is required",
      "Email already in use",
      "Please use email format ( @ )",
      "Password is required",
      "Password must be at least 5 characters long",
      "Phone Number is required",
      "Address is required"
    ]
  }
  ```

### POST /login

#### Description

- User login to access data

#### Request

- Body:
  ```json
  {
    "username": "string",
    "email": "string"
  }
  ```

#### Response

_200 - OK_

- Body

  ```json
  {
    "access_token": "string"
  }
  ```

  _401 - notEmpty_

- Body

  ```json
  {
    "statusCode": 401,
    "message": "Email or Password cannot be Empty"
  }
  ```

  _401 - USER_NOT_FOUND_

- Body

  ```json
  {
    "statusCode": 401,
    "message": "Invalid Email or Password"
  }
  ```

### GET /categories

#### Description

- get all categories data

#### Request

- Body:
  ```json
  {
    "access_token": "string"
  }
  ```

#### Response

_200 - OK_

- Body

  ```json
  {
    "statusCode": 200,
    "message": "Ok",
    "data": [
      {
        "id": 1,
        "name": "Sneakers",
        "createdAt": "2022-06-04T18:27:48.426Z",
        "updatedAt": "2022-06-04T18:27:48.426Z"
      },
      {
        "id": 2,
        "name": "Running",
        "createdAt": "2022-06-04T18:27:48.426Z",
        "updatedAt": "2022-06-04T18:27:48.426Z"
      },
      {
        "id": 3,
        "name": "Slip On",
        "createdAt": "2022-06-04T18:27:48.426Z",
        "updatedAt": "2022-06-04T18:27:48.426Z"
      },
      {
        "id": 4,
        "name": "Boots",
        "createdAt": "2022-06-04T18:27:48.426Z",
        "updatedAt": "2022-06-04T18:27:48.426Z"
      }
    ]
  }
  ```

### POST /oAuth

#### Description

- User login with google sign-in

#### Request

- Body:
  ```json
  {
    "access_token": "string",
    "email": "string"
  }
  ```

#### Response

_200 - OK_

- Body

  ```json
  {
    "statusCode": 200,
    "message": "Ok",
    "data": {
      "access_token": "string",
      "email": "string",
      "username": "string",
      "role": "string",
      "phoneNumber": "string",
      "address": "string"
    }
  }
  ```

  _400 - SequelizeValidationError_ or SequelizeUniqueConstraintError

- Body
  ```json
  {
    "statusCode": 400,
    "message": [
      "Username is required",
      "Email is required",
      "Email already in use",
      "Please use email format ( @ )",
      "Password is required",
      "Password must be at least 5 characters long",
      "Phone Number is required",
      "Address is required"
    ]
  }
  ```

### PATCH /products/:productId

#### Description

- Patch product status by Id

#### Request

- Body:
  ```json
  {
    "access_token": "string"
  }
  ```

#### Response

_200 - OK_

- Body

  ```json
  {
    "statusCode": 200,
    "message": "Ok",
    "data": [
        1,
        [
            {
                "id": 5,
                "name": "Saint Laurent",
                "description": "Saint Laurent Monogram Espadrilles In Lambskin White",
                "price": 5680000,
                "imgUrl": "https://images.tokopedia.net/img/cache/500-square/hDjmkQ/2021/3/25/b5b388bd-9ad9-4311-8fb1-279622181815.jpg",
                "categoryId": 3,
                "authorId": 4,
                "status": "Inactive",
                "createdAt": "2022-06-07T07:58:56.191Z",
                "updatedAt": "2022-06-11T14:49:17.186Z"
            }
        ]
    ],
    "patchHistory": {
        "id": 132,
        "productId": 5,
        "name": "Saint Laurent Monogram Espadrilles In Lambskin White",
        "description": "Product with id 5 status has been updated from Inactive into Inactive",
        "updatedBy": "admin",
        "updatedAt": "2022-06-11T14:49:17.215Z",
        "createdAt": "2022-06-11T14:49:17.215Z"
    }
  }
  ```

  _404 - Not Found_

- Body
  ```json
  {
    "statusCode": 404,
    "error": {
      "message": "Product not found"
    }
  }
  ```

  _403 - Forbidden_

- Body
  ```json
  {
    "statusCode": 403,
    "error": {
      "message": "Forbidden Access"
    }
  }
  ```

### GET /histories

#### Description

- get all history of created, put, and patch product

#### Request

- Body:
  ```json
  {
    "access_token": "string"
  }
  ```

  #### Response

_200 - OK_

- Body

  ```json
  {
    "statusCode": 200,
    "message": "Ok",
    "data": [
        {
            "id": 131,
            "productId": 1,
            "name": "Nike Dunk Low Retro White Black ",
            "description": "Product with id 1 status has been updated from Inactive into Archived",
            "updatedBy": "admin@gmail.com",
            "createdAt": "2022-06-11T07:47:36.453Z",
            "updatedAt": "2022-06-11T07:47:36.453Z"
        },
        {
            "id": 130,
            "productId": 1,
            "name": "Nike Dunk Low Retro White Black ",
            "description": "Product with id 1 status has been updated from Inactive into Inactive",
            "updatedBy": "admin@gmail.com",
            "createdAt": "2022-06-11T07:47:30.280Z",
            "updatedAt": "2022-06-11T07:47:30.280Z"
        },
        {
            "id": 122,
            "productId": 1,
            "name": "Nike Dunk Low Retro White Black ",
            "description": "Product with id 1 status has been updated from Active into Inactive",
            "updatedBy": "admin",
            "createdAt": "2022-06-11T07:37:18.688Z",
            "updatedAt": "2022-06-11T07:37:18.688Z"
        },
        {
            "id": 118,
            "productId": 1,
            "name": "Nike Dunk Low Retro White Black ",
            "description": "Product with id 1 status has been updated from Inactive into Active",
            "updatedBy": "admin",
            "createdAt": "2022-06-11T07:35:55.719Z",
            "updatedAt": "2022-06-11T07:35:55.719Z"
        },
        {
            "id": 116,
            "productId": 1,
            "name": "Nike Dunk Low Retro White Black ",
            "description": "Product with id 1 updated",
            "updatedBy": "admin",
            "createdAt": "2022-06-11T07:33:00.621Z",
            "updatedAt": "2022-06-11T07:33:00.621Z"
        },
        {
            "id": 114,
            "productId": 1,
            "name": "Nike Dunk Low Retro White Black ",
            "description": "Product with id 1 updated",
            "updatedBy": "admin",
            "createdAt": "2022-06-11T07:28:26.643Z",
            "updatedAt": "2022-06-11T07:28:26.643Z"
        },
        {
            "id": 113,
            "productId": 1,
            "name": "Nike Dunk Low Retro White Black ",
            "description": "Product with id 1 status has been updated from Inactive into Active",
            "updatedBy": "admin",
            "createdAt": "2022-06-11T07:28:24.706Z",
            "updatedAt": "2022-06-11T07:28:24.706Z"
        },
        {
            "id": 112,
            "productId": 1,
            "name": "Nike Dunk Low Retro White Black ",
            "description": "Product with id 1 updated",
            "updatedBy": "admin",
            "createdAt": "2022-06-11T07:28:20.710Z",
            "updatedAt": "2022-06-11T07:28:20.710Z"
        },
        {
            "id": 110,
            "productId": 1,
            "name": "Nike Dunk Low Retro White Black ",
            "description": "Product with id 1 updated",
            "updatedBy": "admin",
            "createdAt": "2022-06-11T07:27:53.841Z",
            "updatedAt": "2022-06-11T07:27:53.841Z"
        },
        {
            "id": 104,
            "productId": 1,
            "name": "Nike Dunk Low Retro White Black ",
            "description": "Product with id 1 updated",
            "updatedBy": "admin",
            "createdAt": "2022-06-11T03:36:40.036Z",
            "updatedAt": "2022-06-11T03:36:40.036Z"
        },
        {
            "id": 102,
            "productId": 9,
            "name": "Under Armour W Hovr Phantom 2 Runanywr",
            "description": "Product with id 9 status has been updated from Active into Archived",
            "updatedBy": "admin",
            "createdAt": "2022-06-11T03:35:11.683Z",
            "updatedAt": "2022-06-11T03:35:11.683Z"
        }
    ]
  }
  ```

### Global Error

#### Response

_500 - Internal Server Error_

- Body
  ```json
  {
    "statusCode": 500,
    "error": {
      "message": "Internal Server Error"
    }
  }
  ```

_403 - InvalidToken_ or JsonWebTokenError\_

- Body

  ```json
  {
    "statusCode": 403,
    "error": {
      "message": "Access Token is Invalid"
    }
  }
  ```

_401 - Forbidden_

- Body
  ```json
  {
    "statusCode": 401,
    "error": {
      "message": "Forbidden Access"
    }
  }
  ```

_401 - TokenExpiredError_

- Body
  ```json
  {
    "statusCode": 401,
    "error": {
      "message": "Token Expired"
    }
  }
  ```
