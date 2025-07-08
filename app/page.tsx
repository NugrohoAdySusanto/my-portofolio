import Header from "./components/Header"
import Footer from "./components/Footer"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Home Section */}
      <section className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="text-blue-600">Nugroho Ady Susanto</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                IT professional with hands-on experience in IT Infrastructure Support - Analyst & IT Support, and focus on careers in IT Infrastructure, IT Support, Network Engineering and System Administrator.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <Button asChild size="lg">
                  <a href="/projects">View My Work</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/about">About Me</a>
                </Button>
              </div>
              <div className="flex justify-center lg:justify-start space-x-6">
                <a href="https://github.com/NugrohoAdySusanto" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/nugroho-ady-susanto/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:nugrohoadysusanto455@gmail.com?subject=Job Opportunity Inquiry&body=Hello%20Nugroho%20Ady%20Susanto%0A%0AI%20hope%20you%20are%20doing%20well.%0A%0AI%20am%20[Your%20Name],%20[Your%20Current%20or%20Previous%20Title/Position].%20I%20am%20contacting%20you%20because%20I%20am%20interested%20in%20discussing%20a%20possible%20new%20job%20opportunity%20that%20I%20feel%20could%20be%20relevant%20and%20interesting%20to%20you.%0A%0ABased%20on%20your%20experience%20and%20expertise%20in%20IT,%20I%20believe%20you%20could%20be%20a%20great%20fit%20for%20a%20role%20that%20is%20currently%20available%20at%20[name%20of%20your%20company/team].%20The%20position%20includes%20[brief%20description%20of%20role%20or%20exciting%20challenge].%0A%0AIf%20you%20are%20open%20to%20exploring%20this%20opportunity%20further,%20I%20am%20more%20than%20happy%20to%20arrange%20a%20time%20for%20a%20brief%20discussion%20-%20either%20online%20or%20in%20person.%0A%0AThank%20you%20for%20your%20time,%20and%20I%20look%20forward%20to%20hearing%20from%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="/Nugroho Adi_kiri.jpg"
                    alt="Nugroho Ady Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
