'use client'

export default function GridOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Simple static grid - high contrast blue */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.08) 2px, transparent 2px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.08) 2px, transparent 2px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}
