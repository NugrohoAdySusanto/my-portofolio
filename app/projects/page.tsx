import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      slug: "cooming-soon",
      title: "Coming Soon",
      description: "This project is under development. Stay tuned for updates!",
      image: "/coming-soon.jpg?height=200&width=300",
      technologies: ["Soon", ],
      //github: "#",
      //demo: "#",
    },
    {
      slug: "server-installation",
      title: "Server Installation",
      description: "Perform DELL server Installation, and configure ESXi, vCenter, and vSphere.",
      image: "/Project-2.jpg?height=200&width=300",
      technologies: ["Dell", "ESXi", "vCenter", "vSphere", "VMware",],
      //github: "#",
      //demo: "#",
    },
    {
      slug: "network-Installation-and-Configuration",
      title: "Network Installation and Configuration",
      description: "Installation and configuration for a small business using Ubiquiti switches and APs.",
      image: "/Project-1.jpg?height=200&width=300",
      technologies: ["Ubiquiti", "Unifi AP",],
      //github: "#",
      //demo: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Projects Section */}
      <section className="pt-24 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Projects</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The following projects demonstrate my technical proficiency and practical experience in IT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link href={`/projects/${project.slug}`} key={index}>
                <Card style={{ height: "410px" }} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video bg-gray-200">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {/*<div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github}>
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>*/}
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
