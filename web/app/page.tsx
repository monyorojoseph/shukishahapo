'use client'

import { ForwardRefExoticComponent, RefAttributes, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight, MapPin, Wallet, Bell, Wifi, Server, Speaker, LucideProps } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, '', '');
    }
  };

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
    <div className="relative bg-gray-50 dark:bg-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 lg:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center justify-center cursor-pointer" onClick={() => scrollToSection("hero")}>
            <MapPin className="h-6 w-6" />
            <span className="ml-2 font-bold text-lg">Shukishahapo</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection("how-it-works")} className="hover:text-primary">
              How It Works
            </button>
            <button onClick={() => scrollToSection("tech-innovation")} className="hover:text-primary">
              Features
            </button>
            <button onClick={() => scrollToSection("expense-tracking")} className="hover:text-primary">
              Expenses
            </button>
          </nav>
        </div>
      </header>

      <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
        <section id="hero" 
          className="w-full h-screen snap-start bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 flex items-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/10 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400/10 dark:bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full px-6 py-2 bg-blue-50 dark:bg-gray-800 border border-blue-200 dark:border-gray-700">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Next Generation Public Transport
                </span>
              </div>

              {/* Main heading with gradient text */}
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Revolutionizing
                </span>
                <span className="block mt-2">Public Transport</span>
              </h1>

              {/* Enhanced description */}
              <p className="max-w-3xl text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Experience seamless commuting with <span className="text-blue-600 dark:text-blue-400 font-semibold">smart tracking</span>, 
                <span className="text-purple-600 dark:text-purple-400 font-semibold"> real-time notifications</span>, and 
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold"> instant payments</span>.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 md:gap-12 my-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">50K+</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Daily Users</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">1000+</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Vehicles</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">30+</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Cities</span>
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 px-8">
                      Start Your Journey
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">Select Your Vehicle</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Input
                          type="text"
                          placeholder="Enter vehicle plate number (e.g., KBA 123Z)"
                          value={vehiclePlate}
                          onChange={(e) => setVehiclePlate(e.target.value)}
                          className="w-full h-12 text-lg"
                          required
                        />
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Enter the number plate as displayed on the vehicle
                        </p>
                      </div>
                      <Button type="submit" 
                        className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Confirm Vehicle
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" size="lg" 
                  className="border-2 px-8">
                  Learn More
                </Button>
              </div>

              {/* Trust badges */}
              <div className="pt-8 flex items-center justify-center gap-6 opacity-70">
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Instant Alerts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wallet className="h-5 w-5 text-blue-500" />
                  <span className="text-sm">Secure Payments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-purple-500" />
                  <span className="text-sm">Live Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" 
          className="w-full h-screen snap-start bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 flex items-center relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
            <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-purple-100/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full px-6 py-2 bg-blue-50 dark:bg-gray-800 border border-blue-200 dark:border-gray-700 mb-6">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Simple 4-Step Process
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                How Shukishahapo Works
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Experience seamless public transport with our innovative tracking system
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connection lines for desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 dark:from-blue-800 dark:via-purple-800 dark:to-blue-800 -translate-y-1/2 z-0"></div>

              {/* Step 1 */}
              <div className="relative group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                  <div className="text-center mb-4 relative">
                    <div className="absolute inset-0 bg-blue-100/50 dark:bg-blue-900/50 rounded-full blur-2xl transform group-hover:scale-110 transition-transform duration-300"></div>
                    <MapPin className="mx-auto h-16 w-16 text-blue-600 dark:text-blue-400 relative" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Select Vehicle</h3>
                  <p className="text-gray-600 dark:text-gray-300">Enter your vehicle plate number via our web or mobile app</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                  <div className="text-center mb-4 relative">
                    <div className="absolute inset-0 bg-purple-100/50 dark:bg-purple-900/50 rounded-full blur-2xl transform group-hover:scale-110 transition-transform duration-300"></div>
                    <Bell className="mx-auto h-16 w-16 text-purple-600 dark:text-purple-400 relative" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Set Destination</h3>
                  <p className="text-gray-600 dark:text-gray-300">Mark your drop-off point with a simple tap on the map</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                  <div className="text-center mb-4 relative">
                    <div className="absolute inset-0 bg-indigo-100/50 dark:bg-indigo-900/50 rounded-full blur-2xl transform group-hover:scale-110 transition-transform duration-300"></div>
                    <Speaker className="mx-auto h-16 w-16 text-indigo-600 dark:text-indigo-400 relative" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Get Notified</h3>
                  <p className="text-gray-600 dark:text-gray-300">Receive timely audio alerts as you approach your stop</p>
                </div>
              </div>

              {/* Step 4 - New Driver Alert Feature */}
              <div className="relative group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                  <div className="text-center mb-4 relative">
                    <div className="absolute inset-0 bg-pink-100/50 dark:bg-pink-900/50 rounded-full blur-2xl transform group-hover:scale-110 transition-transform duration-300"></div>
                    <Bell className="mx-auto h-16 w-16 text-pink-600 dark:text-pink-400 relative" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Driver Alert</h3>
                  <p className="text-gray-600 dark:text-gray-300">Automatically notifies the driver of your upcoming stop</p>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 flex items-center space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                  <Wifi className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Real-time Updates</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Live location tracking</p>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-gray-800 rounded-xl p-6 flex items-center space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                  <Server className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Smart System</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">AI-powered notifications</p>
                </div>
              </div>

              <div className="bg-pink-50 dark:bg-gray-800 rounded-xl p-6 flex items-center space-x-4">
                <div className="bg-pink-100 dark:bg-pink-900/50 p-3 rounded-lg">
                  <Wallet className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Easy Payment</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Cashless transactions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="tech-innovation" 
          className="w-full h-screen snap-start bg-gray-100 dark:bg-gray-900 flex items-center">
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

        <section id="expense-tracking" 
          className="w-full h-screen snap-start bg-white dark:bg-gray-800 flex items-center">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Expense Tracking Made Simple</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-8">
              Monitor your commuting costs with detailed weekly, monthly, and annual reports. Manage your transportation budget effortlessly.
            </p>
            <Button size="lg">Learn More</Button>
          </div>
        </section>

        <footer className="w-full snap-start bg-gray-100 dark:bg-gray-900 py-8">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 Shukishahapo. Transforming Public Transport Technology.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
