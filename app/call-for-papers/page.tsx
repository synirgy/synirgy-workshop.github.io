'use client'

import { motion } from 'framer-motion'
import { FileText, Users, Target, CheckCircle, BookOpen, Lightbulb, Database, Brain, Globe, Zap } from 'lucide-react'
import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import AnimatedCard from '@/components/AnimatedCard'
import GridOverlay from '@/components/GridOverlay'
import ParticleBackground from '@/components/ParticleBackground'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function CallForPapers() {
  const topics = [
    {
      icon: Database,
      title: "Synthetic Data Generation",
      description: "Methods for creating realistic synthetic datasets, user models, and query logs for IR evaluation"
    },
    {
      icon: Users,
      title: "User Simulation",
      description: "Simulating user behavior, search sessions, and interaction patterns for system evaluation"
    },
    {
      icon: Target,
      title: "Evaluation Methodologies",
      description: "Novel metrics, evaluation frameworks, and benchmarking approaches using simulation"
    },
    {
      icon: Brain,
      title: "LLM-Based Simulation",
      description: "Using large language models for generating queries, documents, and relevance judgments"
    },
    {
      icon: Lightbulb,
      title: "Best Practices",
      description: "Guidelines, lessons learned, and recommendations for simulation in IR research"
    },
    {
      icon: Globe,
      title: "Real-World Applications",
      description: "Case studies and deployment experiences using synthetic data and simulation"
    },
    {
      icon: Zap,
      title: "Efficiency & Scalability",
      description: "Scalable simulation methods and efficient synthetic data generation techniques"
    },
    {
      icon: BookOpen,
      title: "Ethical Considerations",
      description: "Privacy, bias, and fairness implications of using synthetic data in IR systems"
    }
  ]

  const submissionTypes = [
    {
      type: "Full Papers",
      pages: "8 pages",
      description: "Presenting completed work with comprehensive evaluation and analysis",
      color: "primary"
    },
    {
      type: "Short Papers",
      pages: "4 pages",
      description: "Work-in-progress, preliminary results, or focused contributions",
      color: "secondary"
    },
    {
      type: "Position Papers",
      pages: "4 pages",
      description: "Discussing new ideas, challenges, or future research directions",
      color: "secondary"
    }
  ]

  const guidelines = [
    "Submissions must be written in English",
    "Follow the CEUR Workshop Proceedings format",
    "Submit in PDF format via the workshop submission system",
    "All papers undergo single-blind peer review",
    "Page limits exclude references",
    "At least one author must register and present the paper"
  ]

  return (
    <div className="relative">
      <GridOverlay />
      <ParticleBackground />

      <PageHero
        title="Call for Papers"
        description="Submit your research on simulation and synthetic data for Information Retrieval"
      />

      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading subtitle="Join us in advancing the field of simulation and synthetic data for IR">
            Workshop Scope
          </SectionHeading>

          <AnimatedCard delay={0.1}>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                The increasing complexity of information access systems necessitates innovative evaluation
                methods beyond real-world user data, which is often biased, incomplete, or difficult to obtain
                due to privacy concerns. Simulation and synthetic data methods provide controlled and
                reproducible environments for training, evaluating, refining, and benchmarking algorithms
                in information retrieval and personalization.
              </p>
              <p className="text-muted-foreground">
                This workshop aims to bring together researchers and practitioners to share insights, discuss
                best practices, and address pressing open problems by exploring synergies in the use of
                synthetic data and simulation for Information Retrieval.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="outline">Methodological Advances</Badge>
                <Badge variant="outline">Ethical Considerations</Badge>
                <Badge variant="outline">Practical Applications</Badge>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading subtitle="We welcome contributions on, but not limited to">
            Topics of Interest
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <AnimatedCard
                key={index}
                delay={0.1 * (index + 1)}
                hover3d={true}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <topic.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground">{topic.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading>
            Submission Types
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {submissionTypes.map((item, index) => (
              <AnimatedCard key={index} delay={0.1 * (index + 1)}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-xl">{item.type}</h3>
                    <Badge>{item.pages}</Badge>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm"
          >
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Page limits exclude references. All submissions should follow the
              CEUR Workshop Proceedings format.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container relative z-10">
          <SectionHeading>
            Submission Guidelines
          </SectionHeading>

          <AnimatedCard delay={0.1}>
            <ul className="space-y-4">
              {guidelines.map((guideline, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{guideline}</span>
                </li>
              ))}
            </ul>
          </AnimatedCard>

          <AnimatedCard delay={0.2} className="mt-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-xl flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Review Process
              </h3>
              <p className="text-muted-foreground">
                All submissions will be reviewed by at least two members of the program committee.
                Reviews will assess the paper&apos;s contribution, technical quality, clarity, and relevance
                to the workshop. Accepted papers will be published in the workshop proceedings.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </section>

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
              <span className="text-gradient">Ready to Submit?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Submit your research and be part of shaping the future of simulation and synthetic data in IR
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="glow-effect">
                <Link href="/submission">
                  <FileText className="mr-2 h-5 w-5" />
                  Submission Guidelines
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/important-dates">
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
