# Adonis StudentApp API application (example)

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Install adonisjs cli

```bash
npm i -g @adonisjs/cli
```

Clone this repo and then run `npm install`.

Rename or move `.envbkp` to `.env`, it contain server config.

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Seed

Run the following command to seed database.

```js
adonis seed
```

### Start

Run the following command to start the app.

```js
adonis serve --dev
```

### Postman collection

[studentApp postman collection](https://www.getpostman.com/collections/b4b4b28167606f8cea2f)

### API auth

Before make a request that has been protected by auth, please provide `Authentication` header and put value as `Bearer [token]` where you can get jwt token via login API (just copy over from the token value in response)
