import Header from "../components/Header"
import Footer from "../components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

export default function BlogsPage() {
  const blogs = [
    {
      slug: "windows-server-2019-installation-guide",
      title: "Windows Server 2019 Installation Guide In Proxmox VE",
      excerpt: "A step-by-step guide to installing Windows Server 2019 on Proxmox VE with best practices and tips.",
      date: "2025-06-01",
      readTime: "10 min read",
      category: "Windows Server",
      image: "/Blog-1.jpg?height=200&width=350",
      author: "Nugroho Ady",
    },
    {
      slug: "building-responsive-uis-tailwind",
      title: "Building Responsive UIs with Tailwind CSS",
      excerpt: "Master the art of creating beautiful, responsive user interfaces using Tailwind CSS utility classes.",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "CSS",
      image: "/coming-soon.jpg?height=200&width=350",
      author: "Nugroho Ady",
    },
    {
      slug: "state-management-react-guide",
      title: "State Management in React: A Complete Guide",
      excerpt: "Explore different state management solutions in React from useState to Redux and Zustand.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "React",
      image: "/coming-soon.jpg?height=200&width=350",
      author: "Nugroho Ady",
    },
    {
      slug: "typescript-best-practices-react",
      title: "TypeScript Best Practices for React Developers",
      excerpt: "Learn essential TypeScript patterns and best practices to write better React applications.",
      date: "2023-12-28",
      readTime: "8 min read",
      category: "TypeScript",
      image: "/coming-soon.jpg?height=200&width=350",
      author: "Nugroho Ady",
    },
    {
      slug: "deploying-nextjs-vercel",
      title: "Deploying Next.js Apps to Vercel",
      excerpt:
        "Step-by-step guide to deploy your Next.js applications to Vercel with custom domains and environment variables.",
      date: "2023-12-20",
      readTime: "6 min read",
      category: "Deployment",
      image: "/coming-soon.jpg?height=200&width=350",
      author: "Nugroho Ady",
    },
    {
      slug: "modern-css-techniques",
      title: "Modern CSS Techniques for Web Developers",
      excerpt: "Discover modern CSS features like Grid, Flexbox, and CSS Variables to create stunning web layouts.",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "CSS",
      image: "/coming-soon.jpg?height=200&width=350",
      author: "Nugroho Ady",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Blogs Section */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog Posts</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I create content on various IT subjects, such as Networking, Server & System Management, Scripting, and beyond. Below are my most recent articles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <Link href={`/blogs/${blog.slug}`} key={index}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                  {/* Blog Image */}
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img
                      src={blog.image || "/coming-soon.jpg"}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{blog.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {blog.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{blog.excerpt}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(blog.date).toLocaleDateString()}
                      </div>
                      <span>By {blog.author}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
