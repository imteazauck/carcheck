import { FC } from 'react'
import { Card, CardContent } from './Card' // Adjusted import path

interface Feature {
  title: string
  description: string
}

const features: Feature[] = [
  {
    title: 'Mileage Anomalies',
    description: 'Flags major discrepancies in recorded mileage.'
  },
  {
    title: 'Colour History',
    description: 'Shows any past colour changes the vehicle has had.'
  },
  // …add others
]

const Features: FC = () => (
  <div className="grid gap-6 md:grid-cols-3 p-6">
    {features.map(f => (
      <Card
        key={f.title}
        className="transform transition hover:scale-105 group"
      >
        <CardContent>
          <h3 className="font-semibold">{f.title}</h3>
          <p className="mt-2 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all text-sm">
            {f.description}
          </p>
        </CardContent>
      </Card>
    ))}
  </div>
)

export default Features
