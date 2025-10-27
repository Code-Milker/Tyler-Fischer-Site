# AI and Prompting Approach for Development
As of 2025, AI tooling and prompting have transformed developer experience and productivity, but no single best practice exists. Effective methods can mitigate pitfalls like unsolicited features, code breakage, hallucinations (e.g., fabricating APIs or logic), security risks, stylistic inconsistencies, over-abstraction, and efficiency issues. Since early 2023, through web, mobile, and blockchain projects or contracts, I've developed a straightforward approach to minimize these risks while boosting productivity and maintaining a deep understanding of the repository implementation. This allows me to focus on system design while retaining granular control over the codebase. Below are the key elements of this approach:
## No Direct LLM Access to Code Repository
Separation via Browser Apps: Using browser-based AI tools like Grok or Claude ensures the LLM has no direct access to the code repository. This requires developers to manually copy code into the repo, serving as a natural review barrier before implementation.
Context Provisioning: A custom macro copies all open buffers or files to the clipboard, separated by comments with filenames and counts. This enables the LLM to quickly receive application context.
## Prompting with File Types and Context
Include Full Requirements: Clearly define business logic, acceptance criteria, and technical constraints (e.g., "Form requires email validation per RFC 5322, password with minimum 8 characters including one number and one special character, and error handling for failed API calls").
Reference Existing Code for Consistency: Provide relevant code files (e.g., similar components, services, or controllers) as boilerplate to ensure the AI aligns with the project’s coding style, naming conventions, and structure (e.g., "Match the style of `LoginForm.tsx` for imports and component layout").
Specify Dependencies: Include related modules, such as HTTP clients, authentication services, or global state and styles, to anchor the AI’s output in the project’s architecture and prevent fabricated dependencies.
Define Output Structure: Explicitly specify file formats, function signatures, or return types (e.g., "Generate a React component in `EmailAlertForm.tsx` and a Bun server handler in `alertController.ts`"). Request the AI to ask for clarification if context is missing to avoid uninformed code generation.
## Verify LLM Response
Handle Incorrect Output: If the AI generates incorrect code, restart with refined prompts to correct the course.
Refine Correct Output: If the output is mostly correct, either manually fix the issue or prompt the LLM to address specific issues.
## Example: Building a Form and Endpoint in React and Bun
**Real Prompt Example**
Below is a practical prompt for generating a new React form and Bun server endpoint for an email alert subscription feature, with each section labeled by its role to ensure clarity and consistency. The form differs from the login form by collecting an email (which autofills the username field) and a checklist of subscription preferences (newsletters, product updates, promotions). Zod is used for validation, and Tailwind CSS is consistent with `LoginForm.tsx` and the global `tailwind.config.js`.
**Prompt**:
Hello Grok, I need you to generate a React form and a Bun server endpoint for an email alert subscription feature, styled and structured like our existing login functionality but with a distinct email field that autofills the username and a checklist of subscription preferences. Use Zod for schema validation in both the frontend and backend, and ensure Tailwind CSS styling is consistent with `LoginForm.tsx` and our global `tailwind.config.js`. Below are the details, with sections labeled for clarity.
## Requirements
Email Field: Must follow RFC 5322 format, validated using Zod schema. Display inline error message for invalid format. The email value should autofill the username field (e.g., for "user@example.com", default to "user").
Username Field: Must be 3-20 characters, alphanumeric only, validated using Zod schema. Display inline error message for invalid format. Prefilled with the email's local part but editable by the user.
Subscription Preferences Field: A checklist allowing users to select multiple options (e.g., Newsletters, Product Updates, Promotions), validated using Zod schema to ensure at least one option is selected. Display inline error message if no options are selected.
Form Behavior: On successful submission, redirect to "/dashboard". On failed submission, show the API error message above the form.
Endpoint Validation: Use Zod to validate email, username, and subscription preferences in the Bun endpoint, ensuring username is unique in the database and at least one subscription preference is selected. Return appropriate error messages for invalid inputs.
Security: Use HTTPS for API calls and ensure no sensitive data is logged.
Styling: Use Tailwind CSS classes consistent with `LoginForm.tsx` and the color palette/themes defined in `tailwind.config.js`.
## Boilerplate
```typescript
// src/components/LoginForm.tsx: Use the following as a template for the React component’s structure, imports, and styling.
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import apiClient from '../services/apiClient';
const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email format' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
});
const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    try {
      const validatedData = loginSchema.parse(formData);
      await apiClient.post('/auth/login', validatedData);
      navigate('/dashboard');
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors = err.errors.reduce((acc, curr) => ({
          ...acc,
          [curr.path[0]]: curr.message,
        }), {});
        setErrors(fieldErrors);
      } else {
        setErrors({ general: 'Login failed. Please try again.' });
      }
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {errors.general && <p className="text-red-500 mb-4">{errors.general}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
```
```typescript
// src/api/authController.ts: Use the following as a template for the Bun server endpoint’s structure and style.
import { z } from 'zod';
import { db } from '../db';
import { hashPassword } from '../services/authService';
const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email format' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
});
Bun.serve({
  fetch: async (req) => {
    const url = new URL(req.url);
    if (req.method === 'POST' && url.pathname === '/auth/login') {
      try {
        const body = await req.json();
        const { email, password } = loginSchema.parse(body);
        const user = await db.user.findUnique({ where: { email } });
        if (!user) {
          return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
          });
        }
        const isValid = await hashPassword.verify(password, user.passwordHash);
        if (!isValid) {
          return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
          });
        }
        return new Response(JSON.stringify({ message: 'Login successful' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (err) {
        if (err instanceof z.ZodError) {
          return new Response(JSON.stringify({ error: err.errors[0].message }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }
        return new Response(JSON.stringify({ error: 'Server error' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }
    return new Response("Not Found", { status: 404 });
  },
});
```
## Dependencies
```typescript
// src/services/apiClient.ts: HTTP client (fetch-based, configured for HTTPS).
export const apiClient = {
  post: async (url: string, data: any) => {
    const response = await fetch(`https://api.example.com${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  },
};
```
```typescript
// src/services/authService.ts: Authentication service (handles password hashing).
import { hash, verify } from 'bcrypt';
export const hashPassword = {
  hash: async (password: string) => hash(password, 10),
  verify: async (password: string, hash: string) => verify(password, hash),
};
```
```prisma
// prisma/schema.prisma: Database Prisma ORM with a `user` table (schema includes `email: string`, `username: string`, `subscriptions: Json` for preferences).
model User {
  id Int @id @default(autoincrement())
  email String @unique
  username String @unique
  passwordHash String
  subscriptions Json
}
```
```javascript
// tailwind.config.js: Tailwind CSS Configuration for global styling.
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // blue-500
        primaryHover: '#2563EB', // blue-600
        textPrimary: '#374151', // gray-700
        error: '#EF4444', // red-500
      },
    },
  },
  plugins: [],
};
```
## Output Structure
- Generate two files:
  - `EmailAlertForm.tsx`: A React component for the email alert subscription form, matching the style and structure of `LoginForm.tsx`, using Zod for validation, and including email (autofilling username) and a checklist for subscription preferences (Newsletters, Product Updates, Promotions).
  - `alertController.ts`: A Bun server endpoint, matching the style of `authController.ts`, using Zod for validation of email, username, and subscription preferences.
Ensure the form uses Tailwind CSS consistent with `LoginForm.tsx` and `tailwind.config.js` (e.g., use `primary`, `primaryHover`, `textPrimary`, `error` colors).
If any context is missing (e.g., additional validation rules or DB schema details), please ask for clarification instead of generating uninformed code.
## Planned Enhancements for Enforcement
These enhancements aim to automate consistency checks and enforce best practices, reducing manual oversight and offloading work from the llm to a lsp or library while also improving code quality, maintainability, and scalability. Benefits include faster onboarding for teams, fewer bugs in AI-generated code, and easier integration with CI/CD pipelines for automated testing and validation.
**Custom ESLint Rules Examples**: all repo interfaces are derived from Zod validators, uniform response and error handling for all functions (go approach res, err), required parameter decorators which sets all params to a zod schema that will automatically parse on call.
**Effect-Less TypeScript Library**: Develop a lightweight library to enforce semantics via type inference, requiring declarations of state, actions, side effects, Template, and any context-specific code abstraction. This enforce uniform code output, enables programmatic test generation and enforces code structure through the libraries grammar, leading to robust applications, reduced runtime errors.
**Purpose**: A stricter language or grammar enhances codebase uniformity, improves readability, and supports intrinsic validation through tests. This results in higher productivity and fewer costly refactors.
**Prototypes**: See [MooMoo.js Repo](https://github.com/Code-Milker/moomoo.js) and [ESLint custom rules Repo](https://github.com/Code-Milker/effect-less).
## Final Note
This is a general approach that I use, but there are times when command-line agents or editor extensions can be explored to stay up to date with trends, or for tasks that don't require a restricted approach. My recommendation is based on what has worked for me in large code bases or production environments.
