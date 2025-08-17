# Ivalo Portal

A modern, scalable sustainability assessment platform built with cutting-edge technologies in a monorepo architecture.

## 🏗️ Project Overview

Ivalo Portal is a demo application showcasing a comprehensive sustainability assessment system for companies. The platform allows organizations to complete questionnaires, track their sustainability scores, and compare performance on a leaderboard. Built as a proof-of-concept, it demonstrates modern web development practices and scalable architecture patterns.

## 🏛️ Monorepo Architecture

This project follows a monorepo structure using **Nx** for efficient workspace management and build orchestration. The architecture promotes code sharing, consistent tooling, and streamlined development workflows.

### Project Structure

```
ivalo-portal/
├── apps/
│   └── portal/          # Next.js frontend application
├── libs/
│   ├── db/              # Database layer with Drizzle ORM
│   ├── tsconfig/        # Shared TypeScript configurations
│   └── tsup-config/     # Build configuration utilities
├── nx.json              # Nx workspace configuration
└── package.json         # Root package with workspace definitions
```

## 🚀 Technology Stack

This stack represents the latest thinking in application design and composition. The tooling choices reflect tried and tested patterns for modern application development. All code is written in Typescript, to maintain strong typechecking, and uses Node ECMAScript module (ESM) format being the official TC39 standard for packaging JavaScript modules.

### Frontend (apps/portal)

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Valtio** - State management
- **React Hook Form** - Form handling

### Database & Backend

- **Drizzle ORM** - Type-safe SQL query builder
- **PostgreSQL** - Primary database
- **Supabase** - Current database hosting (demo phase)
- **Zod** - Schema validation

### Development Tools

- **Nx** - Monorepo build system and task runner
- **Biome** - Fast linter and formatter
- **SWC** - Fast TypeScript/JavaScript compiler
- **Yarn 4** - Modern package manager with workspaces

## 🎯 Current Features

### Core Functionality

- **Home page** - Sample UI to access features
- **Company Profiles** - Profile creation data collection
- **Company Assessment** - Questionnaire UI using real data
- **Leaderboard** - Company performance comparison using real data

## 🏗️ Architecture Decisions

### Why This Stack?

1. **Next.js 15** - Server-side rendering, API routes, and excellent developer experience
2. **Drizzle ORM** - Type-safe database operations with excellent TypeScript support
3. **Monorepo with Nx** - Efficient code sharing and build optimization
4. **Tailwind CSS 4** - Rapid UI development with design system consistency
5. **Supabase** - Quick development with PostgreSQL-as-a-Service

### Demo Considerations

- **Rapid Prototyping** - Fast iteration and feature development
- **Developer Experience** - Modern tooling and hot reloading
- **Scalability Foundation** - Architecture that can grow with the business
- **Learning Platform** - Showcases best practices for team development

## 🚀 Future Roadmap

### Production API

For the demo, I chose to use 'off-the-shelf- solutions, to prototype rapidly. These choices, given the time, would ultimately be replaced, by more robust, enterprise grade solutions.

- **NestJS Backend API** - Enterprise-grade Node.js framework for internal/public API access
- **AWS RDS PostgreSQL** - Managed database service replaces Supabase for enterprise grade DB
- **Enhanced Security** - JWT authentication, role-based access control
- **API Documentation** - OpenAPI/Swagger specifications

### Infrastructure as Code

All application infrastructure would be provisioned on chosen cloud services (AWS being my cloud of preference). All resources, maintained/provisioned using Infrastructure as Code (IaC) tooling - Terraform.

- **Terraform** - Infrastructure provisioning and management
- **AWS ECS** - Container orchestration for scalability
- **API Gateway** - Request routing and rate limiting
- **CloudFront** - Global content delivery network
- **Route 53** - DNS management and health checks

### Phase 4: Enterprise Features

- **Advanced Analytics** - Business intelligence dashboards
- **Audit Logging** - Compliance and security tracking
- **Integration APIs** - Third-party system connectivity

## 🛠️ Development Setup

### Prerequisites

- Node.js >= 22.14.0
- Yarn 4.9.1+
- PostgreSQL database
- Supabase account (for demo)

### Quick Start

```bash
# Set up environment variables
cp .env.example .env

# Install dependencies
yarn install

# Start development server on localhost:3000
yarn portal:dev
```

### Available Scripts

```bash
# Development
yarn portal:dev          # Start Next.js dev server
yarn portal:build        # Build production bundle
yarn portal:start        # Start production server

# Database
yarn db:start            # Run migrations
yarn db:seed             # Seed sample data
yarn portal:studio       # Open database GUI

# Code Quality
yarn format              # Check code formatting
yarn format:fix          # Fix formatting issues
yarn all:build           # Build all packages
```

## 🔒 Security Considerations

### Current Demo State

- Basic authentication (Supabase Auth)
- Environment variable configuration
- Input validation with Zod schemas

### Production Hardening

- **Authentication** - OAuth 2.0, SAML integration
- **Authorization** - RBAC with fine-grained permissions
- **Data Encryption** - At-rest and in-transit encryption
- **API Security** - Rate limiting, CORS policies
- **Monitoring** - Security event logging and alerting

## 📊 Performance & Scalability

### Current Optimizations

- **Next.js 15** - Built-in performance optimizations
- **SWC Compilation** - Fast build times
- **Tailwind CSS 4** - Optimized CSS output
- **Drizzle ORM** - Efficient database queries

### Production Enhancements

- **CDN Integration** - Global content delivery
- **Database Indexing** - Query performance optimization
- **Caching Strategy** - Redis for session and data caching
- **Load Balancing** - Horizontal scaling with ECS
- **Monitoring** - APM and performance metrics

## 🤝 Contributing

### Development Workflow

1. **Feature Branches** - Create from main for new features
2. **Code Quality** - Run formatting and linting checks
3. **Testing** - Ensure all tests pass before merging
4. **Documentation** - Update relevant documentation

### Code Standards

- **TypeScript** - Strict type checking enabled
- **Biome** - Consistent code formatting
- **Nx** - Monorepo best practices
- **Component Design** - Reusable, composable components

## 📚 Learning Resources

### Technology Documentation

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Drizzle ORM Guide](https://orm.drizzle.team/)
- [Nx Monorepo Handbook](https://nx.dev/concepts/more-concepts/why-monorepos)
- [Tailwind CSS 4](https://tailwindcss.com/docs)

### Architecture Patterns

- [Monorepo Best Practices](https://nx.dev/concepts/more-concepts/why-monorepos)
- [Database Design Principles](https://orm.drizzle.team/learn/guides/best-practices)
- [React Performance](https://react.dev/learn/render-and-commit)

## 📄 License

This project is proprietary software. All rights reserved.

---

**Built with ❤️ using modern web technologies for a sustainable future.**
