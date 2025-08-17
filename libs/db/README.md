# @ivalo/db

Shared database package for the Ivalo monorepo using Supabase and Drizzle ORM.

```
yarn nx db:push @ivalo/db
yarn nx db:seed @ivalo/db
```

## Schema

The package includes schemas for:

- **Questions**: Schema for three separate PG tables for question management and relationships
- **Companies**: Company profile and assessment answer relationships

## Features

- Type-safe database operations
- Shared database utilities
- Supabase client for client-side operations
- Drizzle ORM for server-side operations
- Automatic connection management
- Migration support
