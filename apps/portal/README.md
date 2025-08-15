# Portal App

## Database Setup

This app uses the shared `@ivalo/db` package for database operations with Supabase and Drizzle ORM.

### Environment Variables

Create a `.env.local` file in the portal app directory with:

```bash
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key

# Database Connection String (for server-side operations)
DB_CONNECTION_STRING=postgresql://username:password@host:port/database

# Optional: Supabase Service Role Key (for admin operations)
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Usage

```typescript
import { supabase, db, questions, questionCategories } from "@ivalo/db";

// Client-side operations (Supabase)
const { data, error } = await supabase.auth.signInWithPassword({
  email: "user@example.com",
  password: "password",
});

// Server-side operations (Drizzle)
const allQuestions = await db.select().from(questions);
const categories = await db.select().from(questionCategories);
```

### Database Schema

The app includes a questions schema with:

- **Question Categories**: Organized question groupings
- **Questions**: Individual assessment questions
- **Question Options**: Multiple choice options with scoring
