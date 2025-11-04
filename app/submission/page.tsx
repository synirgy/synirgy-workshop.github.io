'use client'

import { motion } from 'framer-motion'
import { FileEdit, FileCheck, Upload, Search, Presentation, AlertCircle } from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import SectionHeading from '@/components/SectionHeading'
import AnimatedCard from '@/components/AnimatedCard'
import GridOverlay from '@/components/GridOverlay'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Submission() {
  const steps = [
    { number: 1, title: 'Prepare Your Paper', description: 'Write your paper following CEUR format guidelines', icon: FileEdit },
    { number: 2, title: 'Format & Review', description: 'Ensure formatting requirements and page limits are met', icon: FileCheck },
    { number: 3, title: 'Submit via System', description: 'Upload PDF through the workshop submission portal', icon: Upload },
    { number: 4, title: 'Peer Review', description: 'Papers reviewed by at least two PC members', icon: Search },
    { number: 5, title: 'Present at Workshop', description: 'Present accepted papers at the workshop', icon: Presentation }
  ]

  return (
    <div className="relative">
      <PageBanner title="Submission Guidelines" description="How to prepare and submit your paper to SynIRgy Workshop" />
      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading>Submission Process</SectionHeading>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 hidden md:block" />
            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary border-4 border-background flex items-center justify-center text-primary-foreground font-bold hidden md:flex">
                      {step.number}
                    </div>
                    <div className={`md:w-5/12 ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
                      <AnimatedCard delay={0.1 * index}>
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10 text-primary md:hidden">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <div className="md:hidden text-primary font-bold mb-2">Step {step.number}</div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      </AnimatedCard>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading>Formatting Requirements</SectionHeading>
          <AnimatedCard>
            <ul className="space-y-3 text-muted-foreground">
              <li>• All submissions must follow the CEUR Workshop Proceedings format</li>
              <li>• Full papers: up to 8 pages (excluding references)</li>
              <li>• Short papers: up to 4 pages (excluding references)</li>
              <li>• Position papers: up to 4 pages (excluding references)</li>
              <li>• Papers must be submitted in PDF format</li>
              <li>• All submissions must be in English</li>
            </ul>
          </AnimatedCard>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8 p-6 rounded-xl border border-primary/50 bg-primary/5">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">Ethics & Plagiarism</h4>
                <p className="text-sm text-muted-foreground">All submissions must represent original work. Plagiarism and duplicate submissions are strictly prohibited and will result in rejection.</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 text-center">
            <Button size="lg" disabled className="glow-effect">
              Submission System (Coming Soon)
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
