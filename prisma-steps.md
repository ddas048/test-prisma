### install prisma in devDependencies

```bash
pnpm i -D prisma
```

### prisma init

```bash
pnpm dlx prisma init
```

### prisma db push

in dev use this command to generate prisma client after modefying the schema

```bash
pnpm dlx prisma db push
```

### prisma db seed

add this to package.json

```json
"prisma": {
  "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
},
```

in dev use this command to seed the db

```bash
pnpm prisma db seed
```
