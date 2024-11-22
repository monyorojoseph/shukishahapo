'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { MapPin, Plus, User, Users, Route, Car, XCircle, UserPlus, AlertTriangle } from 'lucide-react'
import { Textarea } from "@/components/ui/textarea"


// Simulated vehicle data - would typically come from an API
const vehicleData = {
  driver: "John Doe",
  passengerCount: 15,
  maxPassengers: 30,
  route: "Downtown - Suburb Express",
  type: "Bus",
  model: "Citymaster 2000",
  brand: "UrbanTransit",
  plateNumber: "KBX 345F"
}

export default function VehicleDetailsPage() {
  const vehicleId = vehicleData.plateNumber

  const [destination, setDestination] = useState('')
  const [otherDestination, setOtherDestination] = useState('')
  const [destinations, setDestinations] = useState<{name: string, isOther: boolean}[]>([])
  const [isAddingOther, setIsAddingOther] = useState(false)

  const [complaintType, setComplaintType] = useState('')
  const [complaintDescription, setComplaintDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (destination.trim()) {
      setDestinations([
        ...destinations, 
        { 
          name: destination.trim(), 
          isOther: false 
        }
      ])
      setDestination('')
    }
  }

  const handleAddOtherDestination = (e: React.FormEvent) => {
    e.preventDefault()
    if (otherDestination.trim()) {
      setDestinations([
        ...destinations, 
        { 
          name: otherDestination.trim(), 
          isOther: true 
        }
      ])
      setOtherDestination('')
      setIsAddingOther(false)
    }
  }

  const removeDestination = (indexToRemove: number) => {
    setDestinations(destinations.filter((_, index) => index !== indexToRemove))
  }  
  
  const handleComplaintSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (complaintType && complaintDescription) {
      // TODO: Implement actual complaint submission logic
      console.log('Complaint filed:', { type: complaintType, description: complaintDescription })
      setComplaintType('')
      setComplaintDescription('')
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-md">
      <Card className="shadow-lg">
        <CardHeader className="bg-blue-50 border-b">
          <CardTitle className="flex items-center space-x-2 text-xl font-bold text-blue-800">
            <Car className="w-6 h-6" />
            <span>Vehicle Details</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4 p-4">
          {/* Vehicle Information Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Vehicle Plate:</span>
            </div>
            <span className="font-medium">{vehicleId}</span>

            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Driver:</span>
            </div>
            <span className="font-medium">{vehicleData.driver}</span>

            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Passengers:</span>
            </div>
            <span className="font-medium">
              {vehicleData.passengerCount} / {vehicleData.maxPassengers}
            </span>

            <div className="flex items-center space-x-2">
              <Route className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Route:</span>
            </div>
            <span className="font-medium">{vehicleData.route}</span>
          </div>

          {/* Destination Input Section */}
          {!isAddingOther ? (
            <form onSubmit={handleSubmit} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Enter Your Destination
              </label>
              <div className="flex space-x-2">
                <Input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g., Central Station"
                  className="flex-grow"
                />
                <Button type="submit" variant="default" size="icon">
                  <Plus className="w-5 h-5" />
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="icon"
                  onClick={() => setIsAddingOther(true)}
                >
                  <UserPlus className="w-5 h-5" />
                </Button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleAddOtherDestination} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Add Destination for Others
              </label>
              <div className="flex space-x-2">
                <Input
                  value={otherDestination}
                  onChange={(e) => setOtherDestination(e.target.value)}
                  placeholder="Others' Destination"
                  className="flex-grow"
                />
                <Button type="submit" variant="default" size="icon">
                  <Plus className="w-5 h-5" />
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="icon"
                  onClick={() => setIsAddingOther(false)}
                >
                  <XCircle className="w-5 h-5" />
                </Button>
              </div>
            </form>
          )}

          {/* Destinations List */}
          <div className="border-t pt-4">
            <h3 className="text-sm font-semibold mb-2 text-gray-700">
              Current Destinations
            </h3>
            {destinations.length > 0 ? (
              <ul className="space-y-2">
                {destinations.map((dest, index) => (
                  <li 
                    key={index} 
                    className={`flex justify-between items-center p-2 rounded ${
                      dest.isOther ? 'bg-yellow-100' : 'bg-gray-100'
                    }`}
                  >
                    <span>{dest.name}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeDestination(index)}
                    >
                      <XCircle className="w-5 h-5 text-red-500" />
                    </Button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm">No destinations added yet.</p>
            )}
          </div>

          {/* Complaint Section */}
          <div className="border-t pt-4">
            <form onSubmit={handleComplaintSubmit} className="space-y-3">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h3 className="text-sm font-semibold text-gray-700">File a Complaint</h3>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Complaint Type
                </label>
                <select
                  value={complaintType}
                  onChange={(e) => setComplaintType(e.target.value)}
                  className="w-full p-2 border rounded text-sm"
                >
                  <option value="">Select Complaint Type</option>
                  <option value="driver">Driver Behavior</option>
                  <option value="vehicle">Vehicle Condition</option>
                  <option value="route">Route Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Complaint Description
                </label>
                <Textarea
                  value={complaintDescription}
                  onChange={(e) => setComplaintDescription(e.target.value)}
                  placeholder="Provide details about your complaint"
                  className="w-full"
                  rows={3}
                />
              </div>

              <Button type="submit" variant="destructive" className="w-full">
                Submit Complaint
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
