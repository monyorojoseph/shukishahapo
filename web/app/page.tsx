'use client'

import { ForwardRefExoticComponent, RefAttributes, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {  ArrowRight, MapPin, Wallet, Bell, Wifi,  Server,  Speaker, LucideProps } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`Navigating to vehicle page for: ${vehiclePlate}`)
    router.push(`/vehicle/${vehiclePlate}`)
    setIsDialogOpen(false)
  }

  const TechFeatureCard = ({ icon: Icon, title, description }:
    { icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>; 
      title: string; description: string}
  ) => (
    <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <Icon className="h-12 w-12 mb-4 text-primary" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  )

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-50 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 lg:px-6 h-14 flex items-center">
          <div className="flex items-center justify-center">
            <MapPin className="h-6 w-6" />
            <span className="ml-2 font-bold text-lg">Shukishahapo</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full min-h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Revolutionizing Public Transport
              </h1>
              <p className="max-w-3xl text-xl text-gray-600 dark:text-gray-300">
                Simplify your commute with smart destination tracking, expense monitoring, and seamless payment integration.
              </p>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="animate-pulse hover:animate-none">
                    Start Your Journey
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Select Your Vehicle</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Enter vehicle plate number"
                      value={vehiclePlate}
                      onChange={(e) => setVehiclePlate(e.target.value)}
                      className="w-full" required
                    />
                    <Button type="submit" className="w-full">
                      Confirm Vehicle
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        <section className="w-full min-h-screen py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">How Shukishahapo Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <MapPin className="mx-auto h-16 w-16 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Select Vehicle</h3>
                <p>Choose your vehicle by plate number via web or mobile app</p>
              </div>
              <div className="text-center">
                <Bell className="mx-auto h-16 w-16 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Set Destination</h3>
                <p>Easily set your drop-off point with a single tap</p>
              </div>
              <div className="text-center">
                <Speaker className="mx-auto h-16 w-16 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Arrival Notification</h3>
                <p>Get audio alerts when approaching your destination</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full min-h-screen py-16 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Technical Innovation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TechFeatureCard 
                icon={Wifi} 
                title="Zero Data Charges" 
                description="Connect to vehicles wirelessly without using mobile data" 
              />
              <TechFeatureCard 
                icon={Server} 
                title="Embedded Vehicle Devices" 
                description="Each vehicle has a dedicated communication system" 
              />
              <TechFeatureCard 
                icon={Wallet} 
                title="Integrated Wallet" 
                description="Easily top up and track commuting expenses" 
              />
            </div>
          </div>
        </section>

        <section className="w-full min-h-screen py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Expense Tracking Made Simple</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-8">
              Monitor your commuting costs with detailed weekly, monthly, and annual reports. Manage your transportation budget effortlessly.
            </p>
            <Button size="lg">Learn More</Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 Shukishahapo. Transforming Public Transport Technology.
          </p>
        </div>
      </footer>
    </div>
  )
}
