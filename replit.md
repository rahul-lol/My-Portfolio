# Replit Project Documentation

## Overview

This is a full-stack personal portfolio website for Rahul Gopi, a Computer Science Engineering student. The application features a modern, responsive design built with React and TypeScript on the frontend, Express.js on the backend, and uses PostgreSQL with Drizzle ORM for data persistence. The portfolio showcases personal information, projects, skills, and includes a contact form functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for smooth page transitions and animations
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with Vite integration in development mode

## Key Components

### Frontend Components
1. **Navigation**: Fixed navigation bar with mobile-responsive hamburger menu
2. **Pages**: Home, About, Projects, Resume, Contact - all with smooth animations
3. **UI Components**: Comprehensive shadcn/ui component library including forms, buttons, dialogs, and more
4. **Animations**: AnimatedSection component for scroll-triggered animations
5. **Project Cards**: Reusable components for showcasing portfolio projects

### Backend Components
1. **Route Handlers**: Contact form processing and resume download endpoints
2. **Storage Layer**: Abstracted storage interface with in-memory implementation
3. **Database Schema**: User management with Drizzle ORM
4. **Static File Serving**: Integrated with Vite for development, static serving for production

### Database Schema
- **Users Table**: Basic user management with username and password fields
- **Schema Location**: `shared/schema.ts` for type safety across frontend and backend
- **Migrations**: Drizzle-kit for database schema management

## Data Flow

1. **Client Requests**: React frontend makes API calls using TanStack Query
2. **Server Processing**: Express.js handles API endpoints with proper error handling
3. **Database Operations**: Drizzle ORM manages database interactions
4. **Response Handling**: JSON responses with proper error codes and messages
5. **State Management**: TanStack Query caches server responses and manages loading states

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form with Zod validation
- **UI Framework**: Radix UI components with shadcn/ui styling
- **Animations**: Framer Motion for smooth transitions
- **Utilities**: date-fns for date manipulation, clsx for conditional classes

### Backend Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session**: connect-pg-simple for session management
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build**: Vite with React plugin and Replit-specific plugins
- **TypeScript**: Full TypeScript support with strict mode
- **Linting**: ESLint configuration for code quality
- **Database**: Drizzle-kit for migrations and schema management

## Deployment Strategy

### Development
- **Local Development**: `npm run dev` starts both frontend and backend with hot reload
- **Database**: Uses DATABASE_URL environment variable for PostgreSQL connection
- **Asset Handling**: Vite dev server handles static assets and HMR

### Production Build
- **Frontend**: Vite builds optimized bundle to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations run with `npm run db:push`
- **Deployment**: Single Node.js process serves both API and static files

### Configuration
- **Environment**: Requires DATABASE_URL for PostgreSQL connection
- **Static Files**: Production serves built frontend from `dist/public`
- **Session Storage**: Uses PostgreSQL for session persistence
- **File Uploads**: Resume download functionality with proper file handling

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 08, 2025. Initial setup