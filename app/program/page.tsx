'use client'

import { motion } from 'framer-motion'
import { Clock, Coffee, Presentation, Users, FileText, Award } from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import SectionHeading from '@/components/SectionHeading'
import AnimatedCard from '@/components/AnimatedCard'
import GridOverlay from '@/components/GridOverlay'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function Program() {
  const schedule = [
    { time: '09:00 - 09:15', event: 'Opening & Welcome', type: 'opening', icon: Users },
    { time: '09:15 - 10:15', event: 'Keynote Talk 1', type: 'keynote', icon: Presentation },
    { time: '10:15 - 10:45', event: 'Coffee Break', type: 'break', icon: Coffee },
    { time: '10:45 - 12:00', event: 'Paper Presentations Session 1', type: 'papers', icon: FileText },
    { time: '12:00 - 13:30', event: 'Lunch Break', type: 'break', icon: Coffee },
    { time: '13:30 - 14:30', event: 'Keynote Talk 2', type: 'keynote', icon: Presentation },
    { time: '14:30 - 15:00', event: 'Coffee Break', type: 'break', icon: Coffee },
    { time: '15:00 - 16:30', event: 'Paper Presentations Session 2', type: 'papers', icon: FileText },
    { time: '16:30 - 17:30', event: 'Poster Session & Discussion', type: 'posters', icon: Users },
    { time: '17:30 - 18:00', event: 'Closing Remarks', type: 'closing', icon: Award }
  ]

  const getBadgeVariant = (type: string) => {
    switch(type) {
      case 'keynote': return 'default'
      case 'papers': return 'secondary'
      case 'break': return 'outline'
      default: return 'secondary'
    }
  }

  return (
    <div className="relative">
      <PageBanner title="Program" description="Workshop schedule and sessions for SynIRgy 2026" />
      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading subtitle="Detailed program will be announced closer to the workshop date">
            Tentative Schedule
          </SectionHeading>
          <div className="space-y-4">
            {schedule.map((item, index) => {
              const Icon = item.icon
              return (
                <AnimatedCard key={index} delay={0.05 * index} hover3d={false}>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{item.event}</h3>
                          <Badge variant={getBadgeVariant(item.type)}>{item.type}</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{item.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              )
            })}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-12 text-center">
            <Link href="/accepted-papers" className="text-primary hover:underline inline-flex items-center gap-2">
              View Accepted Papers →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
