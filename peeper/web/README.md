# Leveldev

Leveldev is a prototype blog.

### Installation

```bash
docker compose build
```

```bash
docker compose run web bin/rails db:migrate RAILS_ENV=development
```

```bash
docker compose up
```

### Dependences if necessary

```bash
docker compose run web bundle add rack-cors
docker compose run client yarn add apisauce
docker compose run client yarn add @mdi/font
docker compose up --build
```

### License

[MIT](https://choosealicense.com/licenses/mit/)
