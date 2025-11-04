'use client'

import { User, Mail, Users } from 'lucide-react'
import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import AnimatedCard from '@/components/AnimatedCard'
import GridOverlay from '@/components/GridOverlay'
import { Badge } from '@/components/ui/badge'

export default function Organizers() {
  const chairs = [
    { name: 'TBA', affiliation: 'TBA', email: 'TBA', role: 'Workshop Chair' },
    { name: 'TBA', affiliation: 'TBA', email: 'TBA', role: 'Workshop Chair' }
  ]

  const pc = ['PC Member 1, Affiliation', 'PC Member 2, Affiliation', 'PC Member 3, Affiliation', 'PC Member 4, Affiliation', 'PC Member 5, Affiliation', 'PC Member 6, Affiliation', 'PC Member 7, Affiliation', 'PC Member 8, Affiliation']

  return (
    <div className="relative">
      <GridOverlay />
      <PageHero title="Organizers" description="Workshop chairs and program committee members" />
      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading>Workshop Chairs</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {chairs.map((chair, index) => (
              <AnimatedCard key={index} delay={0.1 * (index + 1)}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <User className="h-12 w-12 text-primary/50" />
                  </div>
                  <div>
                    <Badge className="mb-2">{chair.role}</Badge>
                    <h3 className="text-xl font-bold mb-1">{chair.name}</h3>
                    <p className="text-muted-foreground mb-2">{chair.affiliation}</p>
                    <a href={`mailto:${chair.email}`} className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      {chair.email}
                    </a>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading>Program Committee</SectionHeading>
          <AnimatedCard>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {pc.map((member, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{member}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground italic mt-6">More PC members to be announced...</p>
          </AnimatedCard>
        </div>
      </section>
    </div>
  )
}
