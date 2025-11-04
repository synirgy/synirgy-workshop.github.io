'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface AnimatedCardProps {
  title?: string
  description?: string
  children?: React.ReactNode
  className?: string
  delay?: number
  hover3d?: boolean
}

export default function AnimatedCard({
  title,
  description,
  children,
  className,
  delay = 0,
  hover3d = true,
}: AnimatedCardProps) {
  const shouldReduceMotion = useReducedMotion()

  // Minimal animations that respect user preferences
  const hoverAnimation = shouldReduceMotion
    ? undefined
    : (hover3d ? { y: -3 } : undefined)

  const initialAnimation = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 20 }

  return (
    <motion.div
      initial={initialAnimation}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : delay }}
      whileHover={hoverAnimation}
      className={cn("h-full", className)}
    >
      <Card className="h-full border-2 border-border bg-card hover:border-primary transition-colors duration-200">
        {(title || description) && (
          <CardHeader>
            {title && <CardTitle className="text-2xl">{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        )}
        {children && (
          <CardContent>
            {children}
          </CardContent>
        )}
      </Card>
    </motion.div>
  )
}
