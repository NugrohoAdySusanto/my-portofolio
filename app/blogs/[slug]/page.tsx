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
    content1: `Next.js 14 represents a significant milestone in the evolution of React-based web development. With its enhanced App Router and powerful Server Components, it's changing how we think about building modern web applications.

## What's New in Next.js 14
Next.js 14 introduces several groundbreaking features that make development faster and more efficient:`,
    content2: `## Understanding React State
React provides several built-in hooks for managing state:

## What's New in Next.js 14
Next.js 14 introduces several groundbreaking features that make development faster and more efficient:`,
    content3: `## When to Use External State Management

Consider external state management when:

1. **State is shared across many components**
2. **State updates are complex**
3. **You need time-travel debugging**
4. **State needs to persist across sessions**`,
    content4: `## Conclusion
Next.js 14 is a game-changer for React developers, offering powerful new features that streamline development and enhance performance. Whether you're building a simple blog or a complex web application, Next.js 14 provides the tools you need to create high-quality, performant applications with ease.
`,
    date: "2025-06-01",
    readTime: "30 min read",
    category: "Windows Server",
    image: "/coming-soon.jpg?height=300&width=800",
    image1: "/Blog-1.jpg??height=300&width=800",
    image2: "/Blog-1.jpg??height=300&width=800",
    image3: "/Blog-1.jpg??height=300&width=800",
    author: "Nugroho Ady",
    tags: ["Windown Server", "Proxmox",],
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
            
            <div className="mb-8">
              <div
              className="text-gray-700 leading-normal mb-8"
              dangerouslySetInnerHTML={{
                __html: blog.content1
                  // 1. Lakukan replace untuk heading SEBELUM replace newline
                  .replace(/^## (.*)/gm, '<h3 class="text-xl font-bold text-gray-900">$1</h3>')
                  .replace(/^### (.*)/gm, '<h4 class="text-lg font-semibold text-gray-900">$1</h4>')
                  // 2. Lanjutkan dengan replace lainnya
                  .replace(/\n/g, "<br>")
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\*(.*?)\*/g, "<em>$1</em>")
                  .replace(
                    /```(\w+)?\n([\s\S]*?)```/g,
                    '<pre class="bg-gray-100 rounded-lg overflow-x-auto"><code class="text-sm">$2</code></pre>',
                  )
                  .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>'),
                  // 3. Koma berlebih di sini sudah dihapus
              }}
            />
            <img
              src={blog.image1 || "/coming-soon.jpg"}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
            </div>
            
            <div className="mb-8">
              <div
              className="text-gray-700 leading-normal mb-8"
              dangerouslySetInnerHTML={{
                __html: blog.content2
                  // 1. Lakukan replace untuk heading SEBELUM replace newline
                  .replace(/^## (.*)/gm, '<h3 class="text-xl font-bold text-gray-900">$1</h3>')
                  .replace(/^### (.*)/gm, '<h4 class="text-lg font-semibold text-gray-900">$1</h4>')
                  // 2. Lanjutkan dengan replace lainnya
                  .replace(/\n/g, "<br>")
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\*(.*?)\*/g, "<em>$1</em>")
                  .replace(
                    /```(\w+)?\n([\s\S]*?)```/g,
                    '<pre class="bg-gray-100 rounded-lg overflow-x-auto"><code class="text-sm">$2</code></pre>',
                  )
                  .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>'),
                  // 3. Koma berlebih di sini sudah dihapus
              }}
            />
            <img
              src={blog.image2 || "/coming-soon.jpg"}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
            </div>
            
            <div className="mb-8">
              <div
              className="text-gray-700 leading-normal mb-8"
              dangerouslySetInnerHTML={{
                __html: blog.content3
                  // 1. Lakukan replace untuk heading SEBELUM replace newline
                  .replace(/^## (.*)/gm, '<h3 class="text-xl font-bold text-gray-900">$1</h3>')
                  .replace(/^### (.*)/gm, '<h4 class="text-lg font-semibold text-gray-900">$1</h4>')
                  // 2. Lanjutkan dengan replace lainnya
                  .replace(/\n/g, "<br>")
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\*(.*?)\*/g, "<em>$1</em>")
                  .replace(
                    /```(\w+)?\n([\s\S]*?)```/g,
                    '<pre class="bg-gray-100 rounded-lg overflow-x-auto"><code class="text-sm">$2</code></pre>',
                  )
                  .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>'),
                  // 3. Koma berlebih di sini sudah dihapus
              }}
            />
            <img
              src={blog.image3 || "/coming-soon.jpg"}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
            </div>

            <div className="mb-8">
              <div
              className="text-gray-700 leading-normal mb-8"
              dangerouslySetInnerHTML={{
                __html: blog.content4                  // 1. Lakukan replace untuk heading SEBELUM replace newline
                  .replace(/^## (.*)/gm, '<h3 class="text-xl font-bold text-gray-900">$1</h3>')
                  .replace(/^### (.*)/gm, '<h4 class="text-lg font-semibold text-gray-900">$1</h4>')
                  // 2. Lanjutkan dengan replace lainnya
                  .replace(/\n/g, "<br>")
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\*(.*?)\*/g, "<em>$1</em>")
                  .replace(
                    /```(\w+)?\n([\s\S]*?)```/g,
                    '<pre class="bg-gray-100 rounded-lg overflow-x-auto"><code class="text-sm">$2</code></pre>',
                  )
                  .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>'),
                  // 3. Koma berlebih di sini sudah dihapus
              }}
            />
            </div>
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
