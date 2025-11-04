'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Calendar, MapPin, FileText, Users, Target, Presentation } from 'lucide-react'
import GridOverlay from '@/components/GridOverlay'
import AnimatedCard from '@/components/AnimatedCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function Home() {
  const shouldReduceMotion = useReducedMotion()

  const topics = [
    "Neural Information Retrieval",
    "Search and Recommendation Systems",
    "Evaluation Metrics and Methodologies",
    "Multimodal Information Retrieval",
    "Fairness and Bias in IR",
    "Explainable AI in Search",
    "Conversational Search",
    "Cross-lingual Information Retrieval"
  ]

  return (
    <div className="relative">
      {/* Simple static grid background only */}
      <GridOverlay />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="container relative z-10 py-20">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.2, duration: shouldReduceMotion ? 0 : 0.4 }}
              >
                <Badge variant="default" className="text-base px-6 py-2 mb-6 bg-primary text-primary-foreground border-2 border-primary font-bold">
                  ECIR 2026 Workshop
                </Badge>
              </motion.div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
                SynIRgy
              </h1>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Simulation and Synthetic Data for Information Retrieval
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed">
              Bringing together researchers and practitioners to explore innovative evaluation
              methods, synergies, and best practices in simulation and synthetic data for IR
            </p>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.4, duration: shouldReduceMotion ? 0 : 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <div className="flex items-center gap-2 text-foreground font-semibold text-lg">
                <Calendar className="h-6 w-6 text-primary" />
                <span>Date: TBA</span>
              </div>
              <div className="hidden sm:block text-primary font-bold">•</div>
              <div className="flex items-center gap-2 text-foreground font-semibold text-lg">
                <MapPin className="h-6 w-6 text-primary" />
                <span>Location: TBA</span>
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.6, duration: shouldReduceMotion ? 0 : 0.4 }}
              className="flex flex-wrap gap-6 justify-center pt-8"
            >
              <Button asChild size="lg" className="text-lg px-8 py-6 border-2 border-primary">
                <Link href="/call-for-papers">
                  <FileText className="mr-2 h-6 w-6" />
                  Call for Papers
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-border hover:border-primary">
                <Link href="/submission">
                  Submit Your Work
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-24 bg-background">
        <div className="container relative z-10">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Workshop Overview
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Explore innovative approaches to evaluation beyond real-world user data
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedCard delay={shouldReduceMotion ? 0 : 0.1} title="About the Workshop">
              <div className="space-y-4">
                <p className="text-foreground">
                  The increasing complexity of information access systems necessitates innovative
                  evaluation methods beyond real-world user data, which is often biased, incomplete,
                  or difficult to obtain due to privacy concerns.
                </p>
                <p className="text-foreground">
                  This workshop provides controlled and reproducible environments for training,
                  evaluating, refining, and benchmarking algorithms in information retrieval and personalization.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={shouldReduceMotion ? 0 : 0.2} title="Workshop Goals">
              <ul className="space-y-4 text-foreground">
                <li className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span>Share insights and discuss best practices in simulation and synthetic data</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span>Bring together researchers and practitioners from diverse backgrounds</span>
                </li>
                <li className="flex items-start gap-3">
                  <Presentation className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span>Produce a report summarizing key discussions and future directions</span>
                </li>
              </ul>
            </AnimatedCard>

            <AnimatedCard delay={shouldReduceMotion ? 0 : 0.3} title="Topics of Interest">
              <div className="flex flex-wrap gap-2">
                {topics.map((topic, index) => (
                  <Badge key={index} variant="secondary" className="text-sm border-2 border-border bg-secondary text-foreground">
                    {topic}
                  </Badge>
                ))}
              </div>
            </AnimatedCard>

            <AnimatedCard delay={shouldReduceMotion ? 0 : 0.4} title="Important Notice">
              <div className="space-y-4">
                <p className="text-foreground">
                  All participants must register for ECIR 2026 to attend the workshop.
                </p>
                <Button asChild variant="outline" className="w-full text-base py-3 border-2 border-border hover:border-primary">
                  <Link href="/venue">
                    View Conference Details
                  </Link>
                </Button>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden bg-secondary/30">
        <div className="container relative z-10">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Join Us at SynIRgy
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Submit your research and be part of shaping the future of simulation
              and synthetic data in Information Retrieval
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 border-2 border-primary">
                <Link href="/submission">
                  <FileText className="mr-2 h-6 w-6" />
                  Submit a Paper
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-border hover:border-primary">
                <Link href="/important-dates">
                  <Calendar className="mr-2 h-6 w-6" />
                  View Important Dates
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
