"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Timer } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const featuredEvents = [
    {
      id: 1,
      title: "NBA Finals 2024",
      date: "June 15, 2024",
      location: "Madison Square Garden, NY",
      image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1000&auto=format&fit=crop",
      price: "$150",
    },
    {
      id: 2,
      title: "UEFA Champions League Final",
      date: "May 25, 2024",
      location: "Wembley Stadium, London",
      image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1000&auto=format&fit=crop",
      price: "$200",
    },
    {
      id: 3,
      title: "Formula 1 Grand Prix",
      date: "July 7, 2024",
      location: "Silverstone Circuit, UK",
      image: "https://images.unsplash.com/photo-1504817343863-5092a923803e?q=80&w=1000&auto=format&fit=crop",
      price: "$300",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50" />
          <img
            src="https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?q=80&w=1000&auto=format&fit=crop"
            alt="Sports Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Get Your Game Face On
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Score the best seats to your favorite sports events
          </p>
          <Link href="/events">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              Browse Events
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Timer className="w-4 h-4 mr-2" />
                      <span>Starting from {event.price}</span>
                    </div>
                  </div>
                  <Link href={`/events/${event.id}`}>
                    <Button className="w-full mt-4">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}