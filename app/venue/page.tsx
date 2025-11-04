'use client'

import { MapPin, Mail, Plane, Train, Hotel, ExternalLink } from 'lucide-react'
import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import AnimatedCard from '@/components/AnimatedCard'
import GridOverlay from '@/components/GridOverlay'
import Link from 'next/link'

export default function Venue() {
  return (
    <div className="relative">
      <GridOverlay />
      <PageHero title="Venue & Contact" description="Location details and how to reach the SynIRgy Workshop" />
      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading>Workshop Venue</SectionHeading>
          <AnimatedCard delay={0.1}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground mb-2">The SynIRgy Workshop will be held in conjunction with ECIR 2026.</p>
                  <p className="text-muted-foreground"><strong>Venue:</strong> TBA</p>
                  <p className="text-muted-foreground"><strong>Address:</strong> TBA</p>
                </div>
              </div>
              <div className="w-full h-64 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <MapPin className="h-16 w-16 text-primary/30" />
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>
      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading>Getting There & Accommodation</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedCard delay={0.1}>
              <div className="text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10 text-primary w-16 h-16 mx-auto flex items-center justify-center">
                  <Plane className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold">By Air</h3>
                <p className="text-sm text-muted-foreground">Transportation details will be available soon</p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.2}>
              <div className="text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10 text-primary w-16 h-16 mx-auto flex items-center justify-center">
                  <Train className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold">By Train</h3>
                <p className="text-sm text-muted-foreground">Transportation details will be available soon</p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.3}>
              <div className="text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10 text-primary w-16 h-16 mx-auto flex items-center justify-center">
                  <Hotel className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold">Hotels</h3>
                <p className="text-sm text-muted-foreground">Accommodation options will be listed soon</p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading>Contact Information</SectionHeading>
          <AnimatedCard delay={0.1}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a href="mailto:workshop@example.com" className="text-primary hover:underline">workshop@example.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ExternalLink className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">ECIR 2026 Conference</h3>
                  <p className="text-muted-foreground mb-2">For conference registration and main venue information, please visit the official ECIR 2026 website.</p>
                  <Link href="/organizers" className="text-primary hover:underline">View Workshop Organizers →</Link>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  )
}
