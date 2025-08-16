# @ivalo/database

Shared database package for the Ivalo monorepo using Supabase and Drizzle ORM.

```
yarn nx db:push @ivalo/db
yarn nx db:seed @ivalo/db
```

## Setup

1. **Environment Variables**
   Create a `.env.local` file in your app directory with:

   ```bash
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Database Connection (for server-side operations)
   DATABASE_URL=postgresql://username:password@host:port/database

   # Optional: Supabase Service Role Key (for admin operations)
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

2. **Database Migration**

   ```bash
   # Generate migration files
   yarn db:generate

   # Apply migrations
   yarn db:migrate

   # Open Drizzle Studio
   yarn db:studio
   ```

## Usage

### In your app:

```typescript
import { db, supabase, users, createUser, getUserById } from "@ivalo/database";

// Client-side operations (Supabase)
const { data, error } = await supabase.auth.signInWithPassword({
  email: "user@example.com",
  password: "password",
});

// Server-side operations (Drizzle)
const user = await createUser({
  email: "user@example.com",
  name: "John Doe",
});

const projects = await getProjectsByUserId(user.id);
```

## Schema

The package includes a basic schema with:

- **Users**: Authentication and user management
- **Projects**: Project organization
- **Tasks**: Task management with priorities and status

## Features

- Type-safe database operations
- Shared database utilities
- Supabase client for client-side operations
- Drizzle ORM for server-side operations
- Automatic connection management
- Migration support
