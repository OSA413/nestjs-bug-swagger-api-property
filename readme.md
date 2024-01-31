Steps to reproduce:

1. `docker-compose up -d`
2. `npm i`
3. `npm start`

You should see
```
Error: A circular dependency has been detected (property key: "id"). Please, make sure that each side of a bidirectional relationships are using lazy  ("type: () => ClassType").
```