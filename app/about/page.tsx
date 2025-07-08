import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Phone, MapPin } from "lucide-react"

export default function AboutPage() {
  const skills = [
    "Cisco",
    "Mikrotik",
    "Fortigate",
    "Aruba",
    "Ruijie",
    "Sangfor",
    "Cato",
    "vSphere",
    "Proxmox",
    "Windows & Linux Server",
    "VPN Server",
    "Web Server",
    "Mail Server",
    "CCTV, NVR & DRV",
    "Python",
    "PowerShell",
    "Tailwind CSS",
    "JavaScript",
    "Next.js",
    "MS Entra ID & Intune",
  ]

  //Certification
  const certification = [
    {
      title: "CCNA Network Engineer",
      publisher: "Digital Talent Scholarship",
      published: "2024",
    },
    {
      title: "Microsoft Azure Security, Compliance, and Identity Fundamentals",
      publisher: "Mereka",
      published: "2024",
    },
    {
      title: "Technical Support Fundamentals",
      publisher: "Coursera",
      published: "2023",
    },
  ]

  // Work Experience
  const experience = [
    {
      title: "IT Infrastructure Support - Analyst",
      company: "PT ids Medical System Indonesia",
      period: "Feb 2024 - Mei 2025",
      description: "Manage IT infrastructure, provide support to all employees, collaborate & coordinate on idsMED projects. Ensure devices and users complaince with SOP & DIT policies, manage company assets, provide training & educate to all employees.",
    },
    {
      title: "IT Support",
      company: "CV Printerust Media",
      period: "Dec 2022 - Dec 2023",
      description: "Managing IT infrastructure as well as printing machine, provide daily support, creating frontend websites, leading, monitoring, and reporting team work to company owners.",
    },
  ]

  // Education
  const education = [
    {
      title: "Informatics Engineering",
      institution: "Budi Luhur University",
      period: "2023 - Present",
      description: "Informatics Engineering student with a strong interest in IT, currently learning and developing skills in Infrastructure, Networking, Cybersecurity, System Admin, Programming and IoT",
    },
    {
      title: "Multimedia",
      institution: "Vocational High School State 19 Jakarta",
      period: "2019 - 2022",
      description: "Possess strong knowledge in IT, with a focus on Hardware & Software, Networking, Front-End Web Development, Graphic Design, and Video Editing.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* About Section */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
              <div className="space-y-4 text-base text-gray-600 mb-8">
                  <p>
                    I am Nugroho Ady Susanto, an IT professional who has experience as a IT Infrastructure Analyst at PT idsMED, responsible for managing IT infrastructure, providing support for head office and branches and collaborating and leading on idsMED projects.
                  </p>
                  <p>
                    I am currently studying Informatics Engineering at Budi Luhur University. My focus is on IT infrastructure, daily support, networking and system administrator.
                  </p>
                  <p>
                    I am a person who can adapt quickly, can work well with others, and have effective communication skills to collaborate with other teams, departments and vendor. In addition, I have strong problem-solving abilities and like to keep up with technology to stay relevant in today's industry.
                  </p>
                </div>
            </div>

            {/* Profile Image */}
            <div className="mb-8 w-80 h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img
                src="Nugroho Adi_kiri.jpg"
                alt="Nugroho Ady Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Text Content */}
              <div>
                {/* Download CV Button */}
                <div className="mb-8">
                  <a
                    href="/Curriculum Vitae - Nugroho Ady Susanto.pdf"
                    download
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download CV
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Get my latest resume in PDF format</p>
                </div>

                {/* Contact Information */}
                <div className="space-y-3 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-5 w-5 mr-3" />
                    <span>nugrohoadysusanto455@gmail.com</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>+62 896 0106 1642</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-3" />
                    <span>South Jakarta</span>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Certifications */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-6">Certification</h3>
                  <div className="space-y-4">
                    {certification.map((exp, index) => (
                      <div key={index} className="border-l-2 border-blue-200 pl-4">
                        <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                        <p className="text-blue-600 font-medium">{exp.publisher}</p>
                        <p className="text-sm text-gray-500 mb-2">{exp.published}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Image and Experience */}
              <div className="space-y-8">

                {/* Experience */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Work Experience</h3>
                  <div className="space-y-6">
                    {experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-blue-200 pl-4">
                        <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                        <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                        <p className="text-gray-600">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Education</h3>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-blue-200 pl-4">
                        <h4 className="font-semibold text-gray-900">{edu.title}</h4>
                        <p className="text-blue-600 font-medium">{edu.institution}</p>
                        <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
                        <p className="text-gray-600">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
