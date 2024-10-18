### install prisma in devDependencies

```bash
pnpm i -D prisma
```

### prisma init

```bash
pnpm dlx prisma init
```

### prisma db push

- in dev use this command to generate prisma client after modefying the schema/.env
- does not keep track of the file

```bash
pnpm dlx prisma db push
```

### prisma db seed

- add this to package.json

```json
"prisma": {
  "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
},
```

- in dev use this command to seed the db

```bash
pnpm prisma db seed
```

### prisma migrate dev

- use this to keep track of the migration in production

```bash
pnpm dlx prisma migrate dev --name <migration-name>
```

- add this to package.json to apply the migration to production for vercel

```json
"scripts": {
  "postinstall": "prisma generate && prisma migrate deploy"
},
```
