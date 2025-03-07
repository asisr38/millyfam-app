# MillyFam Website Development Rules

This document outlines the coding standards, best practices, and rules for developing and maintaining the MillyFam website.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Component Standards](#component-standards)
3. [TypeScript Usage](#typescript-usage)
4. [Styling Guidelines](#styling-guidelines)
5. [State Management](#state-management)
6. [API Standards](#api-standards)
7. [Performance Optimization](#performance-optimization)
8. [Accessibility](#accessibility)
9. [Git Workflow](#git-workflow)
10. [Environment Variables](#environment-variables)

## Project Structure

### Directory Organization

- **`app/`**: Contains page components following Next.js App Router conventions
  - **`components/`**: Page-specific components that are only used within app pages
  - **`api/`**: Server-side API routes
  - **`email-templates/`**: Email template generators

- **`components/`**: Shared/reusable components
  - **`ui/`**: UI components like buttons, inputs, etc.

- **`hooks/`**: Custom React hooks
- **`lib/`**: Utility functions and shared logic
- **`public/`**: Static assets

### Naming Conventions

- **Files and Directories**:
  - Component files: Use PascalCase (e.g., `Button.tsx`, `Header.tsx`)
  - Utility files: Use camelCase (e.g., `utils.ts`)
  - API routes: Use kebab-case (e.g., `contact-form.ts`)

- **Component Names**: Use PascalCase for component names (e.g., `Button`, `ContactForm`)
- **Function Names**: Use camelCase for function names (e.g., `handleSubmit`, `fetchData`)
- **Constants**: Use UPPER_SNAKE_CASE for constants (e.g., `MAX_ITEMS`, `API_URL`)

## Component Standards

### Component Structure

```tsx
// Imports
import { useState } from 'react';
import { ComponentName } from '@/components/ui';

// Types/Interfaces
interface ComponentProps {
  prop1: string;
  prop2?: number;
}

// Component
export default function MyComponent({ prop1, prop2 = 0 }: ComponentProps) {
  // State
  const [state, setState] = useState(false);
  
  // Functions
  const handleClick = () => {
    setState(!state);
  };
  
  // Render
  return (
    <div>
      {/* Component content */}
    </div>
  );
}
```

### Component Best Practices

1. **Single Responsibility**: Each component should do one thing well
2. **Props Interface**: Always define a TypeScript interface for component props
3. **Default Values**: Set default values for optional props
4. **Client Components**: Use `"use client"` directive only when necessary (for components using hooks, browser APIs, etc.)
5. **Memoization**: Use `memo`, `useMemo`, and `useCallback` for performance-critical components
6. **Code Comments**: Add comments for complex logic

## TypeScript Usage

1. **Type Everything**: All functions, components, and variables should have explicit types
2. **Avoid `any`**: Don't use the `any` type unless absolutely necessary
3. **Use Interfaces**: Prefer interfaces for object types
4. **Type Imports/Exports**: Export types when they're used across multiple files

```tsx
// Good
interface User {
  id: string;
  name: string;
  age: number;
}

// Bad
const user: any = { id: '123', name: 'John' };
```

## Styling Guidelines

### Tailwind CSS

1. **Class Order**: Follow a consistent order for Tailwind classes:
   - Layout (position, display, width, height)
   - Spacing (margin, padding)
   - Typography (font, text)
   - Visual (colors, backgrounds, borders)
   - Interactions (hover, focus)

2. **Responsive Design**: Use mobile-first approach
   ```html
   <div className="text-sm md:text-base lg:text-lg">Content</div>
   ```

3. **Dark Mode**: Support both light and dark modes
   ```html
   <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">Content</div>
   ```

4. **Custom Theming**: Use CSS variables for custom theming in `globals.css`

### Component Styling

1. **Avoid Inline Styles**: Don't use inline styles (`style={}`)
2. **Class Composition**: Use `clsx` or `tailwind-merge` for conditional classes
3. **UI Components**: Use Radix UI primitives with Tailwind styling

## State Management

1. **Local State**: Use `useState` and `useReducer` for component state
2. **Shared State**: Use React Context for state shared across multiple components
3. **Form State**: Use React Hook Form for form handling

## API Standards

### API Routes

1. **Handler Organization**: Organize API route handlers by HTTP method
2. **Response Format**: Return consistent response formats
   ```ts
   // Success
   return NextResponse.json({ data: result }, { status: 200 })
   
   // Error
   return NextResponse.json({ error: "Error message" }, { status: 500 })
   ```

3. **Error Handling**: Use try/catch blocks and return appropriate error statuses
4. **Validation**: Validate incoming data with Zod or similar libraries

## Performance Optimization

1. **Component Splitting**: Split large components into smaller ones
2. **Image Optimization**: Use Next.js Image component with proper dimensions
3. **Dynamic Imports**: Use dynamic imports for large components not needed on initial load
4. **Analytics**: Use Vercel Analytics for performance monitoring

## Accessibility

1. **Semantic HTML**: Use proper HTML elements (`button`, `nav`, etc.)
2. **ARIA Attributes**: Add ARIA attributes when necessary
3. **Keyboard Navigation**: Ensure keyboard navigation works
4. **Color Contrast**: Maintain sufficient color contrast
5. **Focus States**: Provide visible focus states for interactive elements

## Git Workflow

1. **Branch Naming**:
   - `feature/feature-name`: For new features
   - `fix/issue-name`: For bug fixes
   - `refactor/component-name`: For code refactoring

2. **Commit Messages**: Use clear, descriptive commit messages
   ```
   feat: add contact form validation
   fix: resolve header alignment on mobile
   refactor: improve pricing component structure
   ```

3. **Pull Requests**: Keep PRs focused and small when possible

## Environment Variables

1. **Naming**: Use UPPER_SNAKE_CASE for environment variables
2. **Client-Side Variables**: Prefix with `NEXT_PUBLIC_` for client-side usage
3. **Documentation**: Document all required environment variables in the README
4. **Security**: Never commit sensitive environment variables

## Deployment

1. **Vercel Configuration**: Use Vercel for deployment with proper configuration
2. **Environment Variables**: Set environment variables in Vercel dashboard
3. **Preview Deployments**: Test preview deployments before merging to main

---

By following these rules and guidelines, we ensure that the MillyFam website remains maintainable, performs well, and provides a great user experience. 