import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-gray-400 mb-6">I'm always interested in new opportunities and exciting projects.</p>
          <a href="mailto:nugrohoadysusanto455@gmail.com?subject=Job Opportunity Inquiry&body=Hello%20Nugroho%20Ady%20Susanto%0A%0AI%20hope%20you%20are%20doing%20well.%0A%0AI%20am%20[Your%20Name],%20[Your%20Current%20or%20Previous%20Title/Position].%20I%20am%20contacting%20you%20because%20I%20am%20interested%20in%20discussing%20a%20possible%20new%20job%20opportunity%20that%20I%20feel%20could%20be%20relevant%20and%20interesting%20to%20you.%0A%0ABased%20on%20your%20experience%20and%20expertise%20in%20IT,%20I%20believe%20you%20could%20be%20a%20great%20fit%20for%20a%20role%20that%20is%20currently%20available%20at%20[name%20of%20your%20company/team].%20The%20position%20includes%20[brief%20description%20of%20role%20or%20exciting%20challenge].%0A%0AIf%20you%20are%20open%20to%20exploring%20this%20opportunity%20further,%20I%20am%20more%20than%20happy%20to%20arrange%20a%20time%20for%20a%20brief%20discussion%20-%20either%20online%20or%20in%20person.%0A%0AThank%20you%20for%20your%20time,%20and%20I%20look%20forward%20to%20hearing%20from%20you.">
            <Button
              className="bg-white text-black border border-black hover:bg-black hover:text-white"
              variant="outline"
              size="lg"
            >
              <Mail className="h-4 w-4 mr-2" />
              Get In Touch
            </Button>
          </a>

          <div className="flex justify-center space-x-6 mt-8">
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

          <div className="border-t border-gray-800 mt-8 pt-8">
            <p className="text-gray-400">© 2025 Nugroho Ady. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
