'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, FileText, Users, Target, Presentation } from 'lucide-react'
import NetworkGraph from '@/components/NetworkGraph'
import ParticleBackground from '@/components/ParticleBackground'
import GridOverlay from '@/components/GridOverlay'
import AnimatedCard from '@/components/AnimatedCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function Home() {
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
      {/* Background Effects */}
      <NetworkGraph />
      <ParticleBackground />
      <GridOverlay />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge variant="outline" className="text-sm px-4 py-2 mb-4">
                  ECIR 2026 Workshop
                </Badge>
              </motion.div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="text-gradient">SynIRgy</span>
              </h1>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                Simulation and Synthetic Data for Information Retrieval
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bringing together researchers and practitioners to explore innovative evaluation
              methods, synergies, and best practices in simulation and synthetic data for IR
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-5 w-5" />
                <span>Date: TBA</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Location: TBA</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center pt-8"
            >
              <Button asChild size="lg" className="glow-effect">
                <Link href="/call-for-papers">
                  <FileText className="mr-2 h-5 w-5" />
                  Call for Papers
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/submission">
                  Submit Your Work
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="relative py-24">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Workshop Overview</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore innovative approaches to evaluation beyond real-world user data
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedCard delay={0.1} title="About the Workshop">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  The increasing complexity of information access systems necessitates innovative
                  evaluation methods beyond real-world user data, which is often biased, incomplete,
                  or difficult to obtain due to privacy concerns.
                </p>
                <p className="text-muted-foreground">
                  This workshop provides controlled and reproducible environments for training,
                  evaluating, refining, and benchmarking algorithms in information retrieval and personalization.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2} title="Workshop Goals">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Share insights and discuss best practices in simulation and synthetic data</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Bring together researchers and practitioners from diverse backgrounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <Presentation className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Produce a report summarizing key discussions and future directions</span>
                </li>
              </ul>
            </AnimatedCard>

            <AnimatedCard delay={0.3} title="Topics of Interest">
              <div className="flex flex-wrap gap-2">
                {topics.map((topic, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {topic}
                  </Badge>
                ))}
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4} title="Important Notice">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  All participants must register for ECIR 2026 to attend the workshop.
                </p>
                <Button asChild variant="outline" className="w-full">
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
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Join Us at SynIRgy</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Submit your research and be part of shaping the future of simulation
              and synthetic data in Information Retrieval
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="glow-effect">
                <Link href="/submission">
                  <FileText className="mr-2 h-5 w-5" />
                  Submit a Paper
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/important-dates">
                  <Calendar className="mr-2 h-5 w-5" />
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
