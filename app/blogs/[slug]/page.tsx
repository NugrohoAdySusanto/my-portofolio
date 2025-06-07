"use client"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

// Mock data - in real app, this would come from a database or CMS
const blogsData = {
  "windows-server-2019-installation-guide": {
    title: "Windows Server 2019 Installation Guide In Proxmox VE",
    excerpt: "A step-by-step guide to installing Windows Server 2019 on Proxmox VE with best practices and tips.",
    content: `Next.js 14 represents a significant milestone in the evolution of React-based web development. With its enhanced App Router and powerful Server Components, it's changing how we think about building modern web applications.

## What's New in Next.js 14

Next.js 14 introduces several groundbreaking features that make development faster and more efficient:

### Server Components by Default
One of the most significant changes is that components are now Server Components by default. This means better performance, smaller bundle sizes, and improved SEO out of the box.

### Enhanced App Router
The App Router has been refined with better file-based routing, improved layouts, and more intuitive navigation patterns.

### Turbopack Integration
Next.js 14 comes with Turbopack, a Rust-based bundler that's significantly faster than Webpack for development builds.

## Getting Started

To create a new Next.js 14 project, simply run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

This will set up a new project with all the latest features and best practices.

## Key Benefits

1. **Improved Performance**: Server Components reduce client-side JavaScript
2. **Better SEO**: Server-side rendering by default
3. **Enhanced Developer Experience**: Faster builds and better error messages
4. **Modern Architecture**: Built for the future of web development

## Conclusion

Next.js 14 is a powerful framework that simplifies React development while providing enterprise-grade features. Whether you're building a simple blog or a complex web application, Next.js 14 has the tools you need to succeed.`,
    date: "2025-06-01",
    readTime: "30 min read",
    category: "Windows Server",
    image: "/coming-soon.jpg?height=300&width=800",
    author: "Nugroho Ady",
    tags: ["Windown Server", "Proxmox",],
  },
  "building-responsive-uis-tailwind": {
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Master the art of creating beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    content: `Tailwind CSS has revolutionized how we approach styling in modern web development. Its utility-first approach allows developers to build responsive, beautiful interfaces quickly and efficiently.

## Why Tailwind CSS?

Tailwind CSS offers several advantages over traditional CSS frameworks:

### Utility-First Approach
Instead of writing custom CSS, you compose designs using utility classes. This leads to more consistent designs and faster development.

### Responsive Design Made Easy
Tailwind's responsive utilities make it simple to create designs that work across all screen sizes.

### Customization Without Limits
Unlike other frameworks, Tailwind doesn't impose design decisions on you. Everything is customizable.

## Building Responsive Layouts

Here's how to create a responsive card layout:

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white rounded-lg shadow-md p-6">
    <h3 class="text-lg font-semibold mb-2">Card Title</h3>
    <p class="text-gray-600">Card content goes here...</p>
  </div>
</div>
\`\`\`

## Best Practices

1. **Use Consistent Spacing**: Stick to Tailwind's spacing scale
2. **Leverage Component Classes**: Extract common patterns into components
3. **Optimize for Performance**: Use PurgeCSS to remove unused styles
4. **Follow Design Systems**: Create consistent color and typography scales

## Advanced Techniques

### Custom Utilities
You can extend Tailwind with custom utilities for project-specific needs.

### Dark Mode Support
Tailwind makes implementing dark mode straightforward with the \`dark:\` prefix.

## Conclusion

Tailwind CSS empowers developers to create beautiful, responsive interfaces without writing custom CSS. Its utility-first approach, combined with excellent documentation and community support, makes it an excellent choice for modern web development.`,
    date: "2024-01-10",
    readTime: "7 min read",
    category: "CSS",
    image: "/coming-soon.jpg?height=300&width=800",
    author: "Nugroho Ady",
    tags: ["Tailwind CSS", "CSS", "Responsive Design", "Web Development"],
  },
  "state-management-react-guide": {
    title: "State Management in React: A Complete Guide",
    excerpt: "Explore different state management solutions in React from useState to Redux and Zustand.",
    content: `State management is one of the most crucial aspects of React development. As applications grow in complexity, choosing the right state management solution becomes increasingly important.

## Understanding React State

React provides several built-in hooks for managing state:

### useState Hook
The most basic form of state management in React:

\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

### useReducer Hook
For more complex state logic:

\`\`\`javascript
const [state, dispatch] = useReducer(reducer, initialState);
\`\`\`

## When to Use External State Management

Consider external state management when:

1. **State is shared across many components**
2. **State updates are complex**
3. **You need time-travel debugging**
4. **State needs to persist across sessions**

## Popular State Management Solutions

### Redux Toolkit
The modern way to use Redux:

\`\`\`javascript
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1
    }
  }
})
\`\`\`

### Zustand
A lightweight alternative to Redux:

\`\`\`javascript
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))
\`\`\`

### Context API
React's built-in solution for prop drilling:

\`\`\`javascript
const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Component />
    </ThemeContext.Provider>
  );
}
\`\`\`

## Choosing the Right Solution

- **Small apps**: useState and useReducer
- **Medium apps**: Context API or Zustand
- **Large apps**: Redux Toolkit or Zustand
- **Complex logic**: Redux Toolkit with middleware

## Best Practices

1. **Keep state as local as possible**
2. **Use TypeScript for better type safety**
3. **Normalize complex state structures**
4. **Implement proper error boundaries**
5. **Consider performance implications**

## Conclusion

The key to successful state management in React is choosing the right tool for the job. Start simple with built-in hooks, and gradually adopt more sophisticated solutions as your application grows in complexity.`,
    date: "2024-01-05",
    readTime: "10 min read",
    category: "React",
    image: "/coming-soon.jpg?height=300&width=800",
    author: "Nugroho Ady",
    tags: ["React", "State Management", "Redux", "Zustand", "JavaScript"],
  },
  "deploying-nextjs-vercel": {
    title: "Deploying Next.js Apps to Vercel",
    excerpt:
      "Step-by-step guide to deploy your Next.js applications to Vercel with custom domains and environment variables.",
    content: `Deploying a Next.js application to Vercel is one of the smoothest deployment experiences available for modern web applications. As the company behind Next.js, Vercel provides an optimized platform specifically designed for Next.js projects.

## Why Deploy to Vercel?

Vercel offers several advantages for Next.js deployments:

### Zero Configuration
Vercel automatically detects your Next.js project and configures the build settings appropriately.

### Preview Deployments
Every pull request gets its own preview deployment, making collaboration and review easy.

### Edge Network
Your application is deployed to a global edge network for fast loading times worldwide.

### Environment Variables
Easily manage environment variables for different environments (development, preview, production).

## Step-by-Step Deployment Guide

### 1. Prepare Your Project

Make sure your Next.js project is ready for deployment:

\`\`\`bash
# Install dependencies
npm install

# Run build to check for errors
npm run build
\`\`\`

### 2. Push to GitHub

If your project isn't already on GitHub, create a repository and push your code:

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
\`\`\`

### 3. Deploy to Vercel

There are two ways to deploy to Vercel:

#### Option 1: Using the Vercel Dashboard

1. Sign up or log in to [Vercel](https://vercel.com)
2. Click "Import Project"
3. Select "Import Git Repository" and choose your GitHub repo
4. Configure project settings (or accept defaults)
5. Click "Deploy"

#### Option 2: Using the Vercel CLI

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
\`\`\`

### 4. Configure Custom Domain

1. Go to your project dashboard on Vercel
2. Click "Settings" > "Domains"
3. Add your custom domain
4. Update your DNS settings as instructed

### 5. Set Up Environment Variables

1. Go to your project dashboard on Vercel
2. Click "Settings" > "Environment Variables"
3. Add your environment variables for each environment

## Best Practices

1. **Use .env.local for local development**
2. **Set up proper environment variables for production**
3. **Configure build caching for faster deployments**
4. **Set up automatic deployments from your main branch**
5. **Use preview deployments for testing changes**

## Troubleshooting Common Issues

### Build Failures
Check your build logs for errors and make sure all dependencies are properly installed.

### API Routes Not Working
Ensure your API routes are properly configured and environment variables are set.

### Static Generation Issues
Make sure your getStaticProps and getStaticPaths functions are working correctly.

## Conclusion

Deploying Next.js applications to Vercel provides a seamless experience with minimal configuration. With features like preview deployments, edge network, and easy environment variable management, Vercel is the ideal platform for hosting your Next.js projects.`,
    date: "2023-12-20",
    readTime: "6 min read",
    category: "Deployment",
    image: "/coming-soon.jpg?height=300&width=800",
    author: "Nugroho Ady",
    tags: ["Next.js", "Vercel", "Deployment", "DevOps", "Web Development"],
  },
  "modern-css-techniques": {
    title: "Modern CSS Techniques for Web Developers",
    excerpt: "Discover modern CSS features like Grid, Flexbox, and CSS Variables to create stunning web layouts.",
    content: `Modern CSS has evolved dramatically in recent years, providing web developers with powerful tools to create complex layouts and beautiful designs without relying on JavaScript or external libraries.

## CSS Grid Layout

CSS Grid has revolutionized how we approach web layouts:

### Basic Grid Setup

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
\`\`\`

### Advanced Grid Techniques

\`\`\`css
.dashboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "sidebar main main main"
    "sidebar footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

## Flexbox

Flexbox is perfect for one-dimensional layouts:

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

## CSS Variables (Custom Properties)

CSS Variables enable dynamic and maintainable stylesheets:

\`\`\`css
:root {
  --primary-color: #3490dc;
  --secondary-color: #ffed4a;
  --font-size-base: 16px;
}

.button {
  background-color: var(--primary-color);
  font-size: var(--font-size-base);
}

.button.secondary {
  background-color: var(--secondary-color);
}
\`\`\`

## CSS Animations and Transitions

Modern CSS makes animations simple:

\`\`\`css
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.element {
  animation: fadeIn 1s ease-in-out;
}
\`\`\`

## CSS Logical Properties

Logical properties make internationalization easier:

\`\`\`css
.container {
  margin-inline: 20px;
  padding-block: 10px;
}
\`\`\`

## Container Queries

The future of responsive design:

\`\`\`css
@container (min-width: 700px) {
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
\`\`\`

## Best Practices

1. **Use a logical approach** to layout design
2. **Embrace modern features** but provide fallbacks
3. **Organize CSS with methodologies** like BEM or CUBE CSS
4. **Leverage browser dev tools** for debugging
5. **Keep performance in mind** when using animations

## Conclusion

Modern CSS provides powerful tools that reduce the need for JavaScript and external libraries. By mastering Grid, Flexbox, CSS Variables, and other modern features, you can create sophisticated, responsive layouts while maintaining clean, maintainable code.`,
    date: "2023-12-15",
    readTime: "9 min read",
    category: "CSS",
    image: "/coming-soon.jpg?height=300&width=800",
    author: "Nugroho Ady",
    tags: ["CSS", "Web Design", "Flexbox", "CSS Grid", "Frontend"],
  },
  "typescript-best-practices-react": {
    title: "TypeScript Best Practices for React Developers",
    excerpt: "Learn essential TypeScript patterns and best practices to write better React applications.",
    content: `TypeScript has become the standard for building robust React applications. When used correctly, it provides type safety, better developer experience, and fewer runtime errors.

## Setting Up TypeScript with React

Start with a properly configured project:

\`\`\`bash
# Create a new React project with TypeScript
npx create-react-app my-app --template typescript

# Or add TypeScript to an existing project
npm install --save typescript @types/node @types/react @types/react-dom
\`\`\`

## Typing Component Props

Always define prop types for your components:

\`\`\`typescript
type ButtonProps = {
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
};

const ButtonComponent = ({ onClick, variant = 'primary', children }: ButtonProps) => {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
\`\`\`

## Typing Hooks

### useState

\`\`\`typescript
const [user, setUser] = useState<User | null>(null)
\`\`\`

### useReducer

\`\`\`typescript
type State = {
  count: number
  isLoading: boolean
}

type Action = { type: "increment" } | { type: "decrement" } | { type: "setLoading"; payload: boolean }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 }
    case "decrement":
      return { ...state, count: state.count - 1 }
    case "setLoading":
      return { ...state, isLoading: action.payload }
  }
}

// Usage
const [state, dispatch] = useReducer(reducer, { count: 0, isLoading: false })
\`\`\`

## Event Handling

Type your event handlers properly:

\`\`\`typescript
// Form events
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  // form handling logic
}

// Input changes
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value)
}

// Button clicks
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  // click handling logic
}
\`\`\`

## Common Patterns

### Extending HTML Element Props

\`\`\`typescript
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary"
}

const ButtonExtended = ({ variant, className, ...rest }: ButtonProps) => {
  return <button className={\`btn btn-\${variant} \${className || ""}\`} {...rest} />
}
\`\`\`

### Generic Components

\`\`\`typescript
type SelectProps<T> = {
  items: T[]
  getLabel: (item: T) => string
  getValue: (item: T) => string | number
  onChange: (value: string) => void
}

function SelectComponent<T>({ items, getLabel, getValue, onChange }: SelectProps<T>) {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {items.map((item) => (
        <option key={getValue(item)} value={getValue(item)}>
          {getLabel(item)}
        </option>
      ))}
    </select>
  )
}
\`\`\`

## Best Practices

1. **Use TypeScript's strictest settings** in tsconfig.json
2. **Create reusable type definitions** in separate files
3. **Leverage discriminated unions** for complex state
4. **Use type inference** when possible
5. **Avoid using 'any'** - use 'unknown' instead when needed
6. **Create utility types** for common patterns

## Conclusion

TypeScript significantly improves the development experience with React when used correctly. By following these best practices, you'll create more robust applications with fewer bugs and better maintainability.`,
    date: "2023-12-28",
    readTime: "8 min read",
    category: "TypeScript",
    image: "/coming-soon.jpg?height=300&width=800",
    author: "Nugroho Ady",
    tags: ["TypeScript", "React", "JavaScript", "Web Development", "Frontend"],
  },
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const blog = blogsData[params.slug as keyof typeof blogsData]

  if (!blog) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Blog Detail */}
      <article className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/blogs" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blogs
          </Link>

          {/* Blog Header */}
          <header className="mb-8">
            <div className="mb-4">
              <Badge variant="outline" className="mb-4">
                {blog.category}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{blog.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{blog.excerpt}</p>

            {/* Blog Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {blog.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {blog.readTime}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Share Button 
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share Article
            </Button>*/}
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={blog.image || "/coming-soon.jpg"}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: blog.content
                  .replace(/\n/g, "<br />")
                  .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>')
                  .replace(/### (.*)/g, '<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">$1</h3>')
                  .replace(
                    /```(\w+)?\n([\s\S]*?)```/g,
                    '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code class="text-sm">$2</code></pre>',
                  )
                  .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>')
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\*(.*?)\*/g, "<em>$1</em>"),
              }}
            />
          </div>

          {/* Navigation */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex justify-between items-center">
              <Link href="/blogs" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Blogs
              </Link>
              {/* Uncomment if you want to add a share button
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button> */}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
