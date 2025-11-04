'use client'

import { User } from 'lucide-react'
import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import AnimatedCard from '@/components/AnimatedCard'
import GridOverlay from '@/components/GridOverlay'

export default function Speakers() {
  const speakers = [
    { name: 'TBA', affiliation: 'TBA', title: 'TBA', bio: 'Details to be announced' },
    { name: 'TBA', affiliation: 'TBA', title: 'TBA', bio: 'Details to be announced' }
  ]

  return (
    <div className="relative">
      <GridOverlay />
      <PageHero title="Keynote Speakers" description="Distinguished speakers sharing insights on simulation and synthetic data for IR" />
      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading subtitle="Details will be updated as speakers are confirmed">
            Invited Speakers
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {speakers.map((speaker, index) => (
              <AnimatedCard key={index} delay={0.1 * (index + 1)}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <User className="h-16 w-16 text-primary/50" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{speaker.name}</h3>
                    <p className="text-muted-foreground mb-1">{speaker.affiliation}</p>
                    <p className="text-sm text-muted-foreground italic">{speaker.title}</p>
                  </div>
                  <p className="text-muted-foreground">{speaker.bio}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
