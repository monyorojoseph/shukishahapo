'use client'

import { useState, FormEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { MapPin, Plus, User, Users, Route, Car, XCircle, UserPlus, AlertTriangle, Bus, BadgeCheck } from 'lucide-react'
import { Textarea } from "@/components/ui/textarea"

interface VehicleData {
  driver: string
  passengerCount: number
  maxPassengers: number
  route: string
  type: string
  model: string
  brand: string
  plateNumber: string
}

interface Destination {
  name: string
  isOther: boolean
}

type ComplaintType = 'driver' | 'vehicle' | 'route' | 'other' | ''

const vehicleData: VehicleData = {
  driver: "John Doe",
  passengerCount: 15,
  maxPassengers: 30,
  route: "Downtown - Suburb Express",
  type: "Bus",
  model: "Citymaster 2000",
  brand: "UrbanTransit",
  plateNumber: "KBX 345F"
}

interface VehicleInfoItem {
  icon: React.ElementType
  label: string
  value: string
}

export default function VehicleDetailsPage() {
  const [destination, setDestination] = useState<string>('')
  const [otherDestination, setOtherDestination] = useState<string>('')
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [isAddingOther, setIsAddingOther] = useState<boolean>(false)
  const [complaintType, setComplaintType] = useState<ComplaintType>('')
  const [complaintDescription, setComplaintDescription] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (destination.trim()) {
      setDestinations([...destinations, { name: destination.trim(), isOther: false }])
      setDestination('')
    }
  }

  const handleAddOtherDestination = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (otherDestination.trim()) {
      setDestinations([...destinations, { name: otherDestination.trim(), isOther: true }])
      setOtherDestination('')
      setIsAddingOther(false)
    }
  }

  const removeDestination = (indexToRemove: number) => {
    setDestinations(destinations.filter((_, index) => index !== indexToRemove))
  }

  const handleComplaintSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (complaintType && complaintDescription) {
      console.log('Complaint filed:', { type: complaintType, description: complaintDescription })
      setComplaintType('')
      setComplaintDescription('')
    }
  }

  const vehicleInfoItems: VehicleInfoItem[] = [
    { icon: MapPin, label: "Plate", value: vehicleData.plateNumber },
    { icon: User, label: "Driver", value: vehicleData.driver },
    { icon: Users, label: "Capacity", value: `${vehicleData.passengerCount}/${vehicleData.maxPassengers}` },
    { icon: Route, label: "Route", value: vehicleData.route },
    { icon: BadgeCheck, label: "Model", value: vehicleData.model },
    { icon: Car, label: "Brand", value: vehicleData.brand }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center rounded-full px-6 py-2 bg-blue-50 dark:bg-gray-800 border border-blue-200 dark:border-gray-700 mb-4">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Vehicle Information
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Vehicle Details & Tracking
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Vehicle Info Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-750 border-b">
                <CardTitle className="flex items-center space-x-2">
                  <Bus className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <span>Vehicle Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {vehicleInfoItems.map((item, index) => (
                    <div key={index} className="col-span-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <item.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{item.label}</span>
                      </div>
                      <p className="text-gray-900 dark:text-white font-medium pl-6">{item.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Destinations Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-750 border-b">
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <span>Destination Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {!isAddingOther ? (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="flex space-x-2">
                      <Input
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="Enter your destination"
                        className="flex-grow"
                      />
                      <Button type="submit" size="icon" className="bg-purple-600 hover:bg-purple-700">
                        <Plus className="w-4 h-4" />
                      </Button>
                      <Button 
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => setIsAddingOther(true)}
                      >
                        <UserPlus className="w-4 h-4" />
                      </Button>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleAddOtherDestination} className="space-y-3">
                    <div className="flex space-x-2">
                      <Input
                        value={otherDestination}
                        onChange={(e) => setOtherDestination(e.target.value)}
                        placeholder="Add destination for others"
                        className="flex-grow"
                      />
                      <Button type="submit" size="icon" className="bg-purple-600 hover:bg-purple-700">
                        <Plus className="w-4 h-4" />
                      </Button>
                      <Button 
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => setIsAddingOther(false)}
                      >
                        <XCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </form>
                )}

                <div className="mt-4">
                  <h3 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">Current Destinations</h3>
                  {destinations.length > 0 ? (
                    <div className="space-y-2">
                      {destinations.map((dest, index) => (
                        <div
                          key={index}
                          className={`flex justify-between items-center p-3 rounded-lg ${
                            dest.isOther ? 'bg-yellow-50 dark:bg-yellow-900/20' : 'bg-gray-50 dark:bg-gray-800'
                          }`}
                        >
                          <span className="text-sm font-medium">{dest.name}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeDestination(index)}
                            className="hover:bg-red-100 hover:text-red-600"
                          >
                            <XCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                      No destinations added yet
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Complaint Form Card */}
            <Card className="md:col-span-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-750 border-b">
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  <span>Report an Issue</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleComplaintSubmit} className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Issue Type
                    </label>
                    <select
                      value={complaintType}
                      onChange={(e) => setComplaintType(e.target.value as ComplaintType)}
                      className="w-full p-2 border rounded-lg text-sm bg-white dark:bg-gray-800 dark:border-gray-700"
                    >
                      <option value="">Select Issue Type</option>
                      <option value="driver">Driver Behavior</option>
                      <option value="vehicle">Vehicle Condition</option>
                      <option value="route">Route Issue</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-3 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Description
                    </label>
                    <Textarea
                      value={complaintDescription}
                      onChange={(e) => setComplaintDescription(e.target.value)}
                      placeholder="Please provide details about the issue..."
                      className="w-full min-h-[100px]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Button 
                      type="submit" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      disabled={!complaintType || !complaintDescription}
                    >
                      Submit Report
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
