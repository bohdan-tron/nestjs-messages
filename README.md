## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev
```

## Available endpoints
```
GET All
/messages
http://localhost:3000/messages

GET Single
/messages/:id
http://localhost:3000/messages/:id

POST Single
/messages
http://localhost:3000/messages
Body: { "content": "string" }
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
