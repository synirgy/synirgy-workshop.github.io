'use client'

import { motion } from 'framer-motion'
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover3d ? { y: -5, scale: 1.02 } : undefined}
      className={cn("h-full", className)}
    >
      <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
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
