# DigiSync - Digital Marketing Agency Landing Page

## Overview

DigiSync is a full-service digital marketing agency landing page built as a modern web application. The project showcases comprehensive digital marketing services including Google Ads, Facebook Ads management, web development, software testing, RPA automation, and AI integration. The application features a conversion-optimized design with lead capture forms, service showcases, pricing tiers, testimonials, and FAQ sections.

The stack uses React with TypeScript on the frontend, Express.js on the backend, and is configured to work with PostgreSQL through Drizzle ORM for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server with HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing (replacing React Router)
- TanStack Query (React Query) for server state management and API communication

**UI Component System**
- Shadcn/ui component library with Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom configuration
- Custom design system based on marketing/landing page best practices (Webflow/HubSpot inspired)
- Typography: Poppins for headings (bold, attention-grabbing), Inter for body text (clean, readable)
- Color scheme: Professional blue primary (#2563EB), trust green secondary (#10B981), attention orange accent (#F59E0B)

**Component Architecture**
- Modular section-based components (HeroSection, ServicesSection, PricingSection, etc.)
- Form handling with React Hook Form and Zod validation
- Toast notifications for user feedback
- Responsive design optimized for conversion

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for REST API endpoints
- Custom error handling middleware
- Request/response logging middleware for debugging
- JSON body parsing and URL-encoded form support

**API Structure**
- RESTful endpoints for lead management:
  - POST `/api/leads` - Create new lead with validation
  - GET `/api/leads` - Retrieve all leads
- Zod schema validation using drizzle-zod for type-safe request validation
- Structured error responses with HTTP status codes

**Development vs Production**
- Vite middleware integration in development mode
- Static file serving in production
- Conditional middleware based on NODE_ENV
- Replit-specific development tools (cartographer, dev banner) conditionally loaded

### Data Storage Solutions

**Database Schema**
- PostgreSQL configured through Drizzle ORM
- Leads table schema:
  - `id` (UUID primary key, auto-generated)
  - `name` (text, required)
  - `email` (text, required)
  - `service` (text, required)
  - `message` (text, optional)
  - `createdAt` (timestamp, auto-generated)

**ORM Configuration**
- Drizzle Kit for schema migrations
- Type-safe database queries with Drizzle ORM
- Neon serverless PostgreSQL driver for database connectivity
- Schema synchronization via `db:push` command

**In-Memory Fallback**
- MemStorage class implements IStorage interface
- Used for development/testing when database is unavailable
- Map-based storage with UUID generation for mock data

### External Dependencies

**UI & Styling**
- Radix UI components (@radix-ui/*) - Accessible UI primitives
- Tailwind CSS - Utility-first CSS framework
- Lucide React - Icon library
- React Icons (Simple Icons) - Brand/social icons
- class-variance-authority - Component variant management
- Embla Carousel - Carousel/slider functionality

**Forms & Validation**
- React Hook Form - Form state management
- Zod - Schema validation
- @hookform/resolvers - React Hook Form + Zod integration
- drizzle-zod - Drizzle schema to Zod conversion

**Database & Backend**
- @neondatabase/serverless - Neon PostgreSQL serverless driver
- Drizzle ORM - Type-safe ORM
- Express.js - Web framework
- date-fns - Date manipulation utilities

**Development Tools**
- Vite - Build tool and dev server
- esbuild - Production bundler for server code
- tsx - TypeScript execution for development
- @replit/vite-plugin-* - Replit-specific development enhancements

**State & Data Fetching**
- @tanstack/react-query - Server state management, caching, and synchronization
- Custom API client with fetch wrapper for type-safe requests

### Design Decisions

**Monorepo Structure**
- Shared schema types between client and server via `/shared` directory
- Path aliases configured for clean imports (@/, @shared/, @assets/)
- Unified TypeScript configuration for consistency

**Form Submission Flow**
- Multiple lead capture points (hero, contact section, newsletter)
- Client-side validation with Zod schemas
- Server-side validation with same schemas for security
- Toast feedback for user experience
- Optimistic UI updates with React Query mutations

**Styling Strategy**
- Design guidelines document for brand consistency
- Tailwind custom configuration for design tokens
- CSS variables for theme values (light/dark mode ready)
- Utility classes for hover/active states (hover-elevate, active-elevate-2)
- Border radius standardization (9px lg, 6px md, 3px sm)

**Performance Considerations**
- Font preloading (Google Fonts for Inter and Poppins)
- Asset optimization through Vite
- React Query caching with infinite stale time for static data
- Code splitting via dynamic imports for Replit plugins