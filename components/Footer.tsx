import { Network, Github, Linkedin, Mail } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="container relative py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Network className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">SynIRgy Workshop</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Simulation and Synthetic Data for Information Retrieval
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/call-for-papers" className="text-muted-foreground hover:text-primary transition-colors">
                Call for Papers
              </Link>
              <Link href="/important-dates" className="text-muted-foreground hover:text-primary transition-colors">
                Important Dates
              </Link>
              <Link href="/submission" className="text-muted-foreground hover:text-primary transition-colors">
                Submission
              </Link>
              <Link href="/venue" className="text-muted-foreground hover:text-primary transition-colors">
                Venue & Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Part of{' '}
              <a
                href="https://ecir2026.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ECIR 2026
              </a>
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} SynIRgy Workshop. All rights reserved.
          </p>
          <p className="text-xs">
            Built with Next.js and shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
