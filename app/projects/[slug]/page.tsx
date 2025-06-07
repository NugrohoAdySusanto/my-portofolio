import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock data - in real app, this would come from a database or CMS
const projectsData = {
  "network-Installation-and-Configuration": {
    title: "Network Installation and Configuration",
    description: "Installation and configuration for a small business using Ubiquiti switches and APs",
    longDescription: `In the world of small businesses, having a reliable and efficient network infrastructure is essential to support day-to-day operations. One of the best solutions for this need is to use devices from Ubiquiti, specifically Ubiquiti Switches and UniFi Access Points. Ubiquiti Switches connect devices in a local network (LAN), ensuring smooth and efficient data flow between computers, printers, and other devices. On the other hand, UniFi Access Points provide fast and secure wireless connectivity, allowing employees and customers to easily access Wi-Fi in various areas of the business, be it workspaces or public areas.

Installation and configuration of these devices require careful setup. Installation of the device is done carefully to ensure optimal network signal throughout the business area. Settings such as SSID, WPA3 for network security, and access restrictions are essential to protect data and maintain stable connectivity. Additionally, setup options such as VPN or firewall can be implemented to add another layer of security to the network, protecting critical data from outside threats.

The main advantages of using Ubiquiti devices are scalability and manageability. Small businesses can easily add devices as needs evolve without incurring major costs. With solutions that can be expanded and managed efficiently, Ubiquiti gives small businesses an affordable, reliable, and secure network that supports enterprise productivity and security in this digital age.`,
    image: "/Project-1.jpg?height=400&width=600",
    technologies: ["Ubiquiti", "Unifi AP",],
    //github: "https://github.com/johndoe/ecommerce-platform",
    //demo: "https://ecommerce-demo.vercel.app",
    features: [
      "Improving Small Business Network Performance",
      "Scalability and Flexibility",
      "Better Data Security",
      "Provides Reliable Connectivity",
    ],
    challenges: [
      "Implementing secure payment processing",
      "Managing complex state across multiple components",
      "Optimizing database queries for large product catalogs",
      "Ensuring responsive design across all screen sizes",
    ],
    dateCompleted: "February 2024",
    duration: "1 Week",
    role: "Network Engineer",
  },

  "server-installation": {
    title: "Server Installation",
    description: "Perform DELL server Installation, and configure ESXi, vCenter, and vSphere.",
    longDescription: `In this project, I was responsible for installing DELL servers and configuring VMware virtualization platforms, including ESXi, vCenter, and vSphere. The first step began with the hardware setup of the DELL server, which was chosen for its ability to handle large workloads and high reliability. These servers are installed and configured to support a robust virtualization environment, ensuring that all hardware is in working order to maximize performance and efficiency. Once the hardware was installed, I proceeded with the installation of ESXi, which is a type 1 hypervisor that runs directly on top of the server hardware, allowing for efficient creation and management of virtual machines.

Next, I configured vCenter as the management center for all ESXi hosts in this virtualization infrastructure. vCenter enables more centralized management of ESXi hosts, including performance monitoring, resource distribution settings, and integration with storage systems and networks. Using vSphere, I can provide full control over the virtual infrastructure, including dynamic resource allocation settings, centralized storage management, and virtual network settings. This project aims to optimize IT infrastructure management, improve operational efficiency, and provide flexibility for infrastructure scaling according to company needs.

However, some technical challenges are also faced during this installation and configuration process. Configuring vCenter and vSphere requires a deep understanding of VMware's virtualization architecture, virtual network management, and centralized storage. In addition, ensuring compatibility of DELL server hardware with ESXi and configuring the BIOS to support virtualization were also challenges to be solved. Other constraints involved effective management and organization of VMs to ensure optimal resource allocation and avoid performance bottlenecks, which required meticulous and deliberate organization.`,
    image: "/Project-2.jpg?height=400&width=600",
    technologies: ["Dell", "ESXi", "vCenter", "vSphere", "VMware",],
    //github: "https://github.com/johndoe/task-management",
    //demo: "https://taskmanager-demo.vercel.app",
    features: [
      "Centralized management of virtual machines",
      "Improved resource allocation and performance monitoring",
      "Scalability for future growth",
      "Enhanced security and backup options",
      "Support for multiple operating systems and applications",
      "High availability and disaster recovery capabilities",
    ],
    challenges: [
    "DELL hardware compatibility with ESXi.",
    "Configuring vCenter to centrally manage multiple ESXi hosts.",
    "Dynamic management of resources to avoid performance bottlenecks.",
    "Centralized network and storage management of the virtual environment.",
    "Handling BIOS configuration and hardware settings to support virtualization.",
    ],
    dateCompleted: "October 2024",
    duration: "1 Week",
    role: "System Administrator",
  },
  "cooming-soon": {
    title: "Cooming Soon",
    description: "",
    longDescription: ``,
    image: "/Project-3.jpg?height=400&width=600",
    technologies: ["Soon", ],
    //github: "https://github.com/johndoe/weather-dashboard",
    //demo: "https://weather-dashboard-demo.vercel.app",
    features: [
    ],
    challenges: [
    ],
    dateCompleted: "",
    duration: "",
    role: "",
  },
  "social-media-app": {
    title: "social-media-app",
    description: "A beautiful weather dashboard with location-based forecasts and interactive charts",
    longDescription: `This weather dashboard provides users with comprehensive weather information in a beautiful and intuitive interface. Built with React and integrated with multiple weather APIs, it offers accurate forecasts and detailed weather data.

The application features location-based weather detection, allowing users to get weather information for their current location or search for any city worldwide. The dashboard displays current conditions, hourly forecasts, and extended 7-day forecasts with detailed meteorological data.

Interactive charts powered by Chart.js provide visual representations of temperature trends, precipitation probability, and other weather metrics. The application also includes weather alerts and notifications for severe weather conditions.`,
    image: "https://images.unsplash.com/photo-1579869847557-1f67382cc158?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Chart.js", "Weather API", "Geolocation API", "CSS3"],
    github: "https://github.com/johndoe/weather-dashboard",
    demo: "https://weather-dashboard-demo.vercel.app",
    features: [
      "Current weather conditions",
      "7-day weather forecast",
      "Hourly weather predictions",
      "Interactive weather charts",
      "Location-based weather detection",
      "City search functionality",
      "Weather alerts and notifications",
      "Responsive design for mobile and desktop",
    ],
    challenges: [
      "Integrating multiple weather APIs",
      "Handling geolocation permissions and errors",
      "Creating responsive charts for different screen sizes",
      "Managing API rate limits and caching",
    ],
    dateCompleted: "November 2023",
    duration: "2 months",
    role: "Frontend Developer",
  }
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Project Detail */}
      <article className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{project.description}</p>

            {/* Project Meta */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Completed: {project.dateCompleted}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Role: {project.role}
              </div>
              <div>Duration: {project.duration}</div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Action Buttons 
            <div className="flex gap-4">
              <Button asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
            </div>*/}
          </header>

          {/* Project Image */}
          <div className="mb-8">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Project Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <div className="text-gray-600 mb-8 whitespace-pre-line">{project.longDescription}</div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Purpose</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Challenges</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <Link href="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Projects
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
