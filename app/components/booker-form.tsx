"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronUp, MapPin, User, Minus, Plus, Search } from "lucide-react"

interface BookerFormProps {
  className?: string
}

interface Room {
  id: number
  adults: number
}

export function BookerForm({ className = "" }: BookerFormProps) {
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const [isRoomOpen, setIsRoomOpen] = useState(false)
  const [rooms, setRooms] = useState<Room[]>([{ id: 1, adults: 1 }])
  const [travelType, setTravelType] = useState<"business" | "private">("business")
  const [isFormVisible, setIsFormVisible] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleLocation = () => {
    setIsLocationOpen(!isLocationOpen)
    if (isRoomOpen) setIsRoomOpen(false)
  }

  const toggleRoom = () => {
    setIsRoomOpen(!isRoomOpen)
    if (isLocationOpen) setIsLocationOpen(false)
  }

  const decrementAdults = (roomId: number) => {
    // If this is not the first room and adults is 1, remove the entire room
    if (roomId !== 1 && rooms.find((room) => room.id === roomId)?.adults === 1) {
      removeRoom(roomId)
    } else {
      // Otherwise, just decrement adults if > 1
      setRooms(
        rooms.map((room) => (room.id === roomId && room.adults > 1 ? { ...room, adults: room.adults - 1 } : room)),
      )
    }
  }

  const removeRoom = (roomId: number) => {
    if (rooms.length > 1) {
      setRooms(rooms.filter((room) => room.id !== roomId))
    }
  }

  const incrementAdults = (roomId: number) => {
    setRooms(
      rooms.map((room) => (room.id === roomId && room.adults < 10 ? { ...room, adults: room.adults + 1 } : room)),
    )
  }

  const addRoom = () => {
    const newRoomId = Math.max(...rooms.map((room) => room.id), 0) + 1
    setRooms([...rooms, { id: newRoomId, adults: 1 }])
  }

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible)
  }

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside both the form and the button
      if (
        isFormVisible &&
        formRef.current &&
        !formRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsFormVisible(false)
      }
    }

    // Add event listener when the form is visible
    if (isFormVisible) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isFormVisible])

  // Calculate total adults across all rooms
  const totalAdults = rooms.reduce((sum, room) => sum + room.adults, 0)

  // Determine if we should use singular or plural form
  const personText = totalAdults > 1 ? "Personen" : "Person"

  return (
    <div className={`w-full h-full text-[10px] font-sans text-[#032B30] ${className} relative`}>
      {/* Search Button */}
      <div
        className={`absolute left-0 right-0 transition-all duration-300 ease-in-out ${
          isFormVisible
            ? "opacity-0 translate-y-4 pointer-events-none"
            : "opacity-100 translate-y-0 top-1/2 -translate-y-1/2"
        }`}
      >
        <button
          ref={buttonRef}
          onClick={toggleForm}
          className="w-full bg-white rounded-full shadow-md flex items-center justify-between p-3 focus:outline-none transform scale-70"
          aria-label="Search for hotel"
          style={{ transform: "scale(0.7)" }}
        >
          <span className="text-[#032B30] text-base font-medium pl-4">JETZT HOTEL SUCHEN</span>
          <div className="bg-[#08C5CF] w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:bg-[#016F74] active:bg-[#005A5E] group">
            <Search className="w-6 h-6 text-[#0B2932] group-hover:text-white" />
          </div>
        </button>
      </div>

      {/* Booker Form */}
      <div
        ref={formRef}
        className={`absolute left-0 right-0 top-0 bg-[#F6F4EF] p-4 rounded-t-lg transition-all duration-300 ease-in-out scrollbar-hide ${
          isFormVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
        }`}
        style={{ maxHeight: "100%", overflowY: "auto" }}
      >
        <div className="w-full">
          {/* Location Tab */}
          <div className="bg-white rounded-lg shadow-sm mb-3 overflow-hidden">
            <button
              onClick={toggleLocation}
              className="w-full flex items-center justify-between p-3 text-left text-[#032B30] focus:outline-none"
              aria-expanded={isLocationOpen}
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#4B6872]" />
                <span className="font-medium">Amsterdam</span>
              </div>
              {isLocationOpen ? (
                <ChevronUp className="w-4 h-4 text-[#4B6872]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#4B6872]" />
              )}
            </button>

            {isLocationOpen && (
              <div className="p-3 border-t border-gray-100">
                <div className="relative">
                  <label className="absolute top-1 left-2 text-[8px] text-[#4B6872]">Label</label>
                  <select className="w-full border border-gray-300 rounded-md p-2 pt-4 appearance-none text-[9px] text-[#032B30] focus:outline-none">
                    <option>Amsterdam</option>
                    <option>Berlin-Mitte</option>
                    <option>Hamburg-Altstadt</option>
                    <option>Frankfurt-Westend</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-[#4B6872] absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            )}
          </div>

          {/* Room Tab */}
          <div className="bg-white rounded-lg shadow-sm mb-3 overflow-hidden">
            <button
              onClick={toggleRoom}
              className="w-full flex items-center justify-between p-3 text-left text-[#032B30] focus:outline-none"
              aria-expanded={isRoomOpen}
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#4B6872]" />
                <span className="font-medium">
                  {totalAdults} {personText}, {rooms.length} Zimmer
                </span>
              </div>
              {isRoomOpen ? (
                <ChevronUp className="w-4 h-4 text-[#4B6872]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#4B6872]" />
              )}
            </button>

            {isRoomOpen && (
              <div className="p-3 border-t border-gray-100">
                {rooms.map((room, index) => (
                  <div key={room.id} className="mb-3">
                    <div className="font-medium mb-1 text-[#032B30]">Zimmer {room.id}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#032B30]">Erwachsene</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => decrementAdults(room.id)}
                          disabled={room.id === 1 && room.adults <= 1}
                          className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50 focus:outline-none"
                        >
                          <Minus className="w-3 h-3 text-[#4B6872]" />
                        </button>
                        <span className="w-4 text-center text-[#032B30]">{room.adults}</span>
                        <button
                          onClick={() => incrementAdults(room.id)}
                          disabled={room.adults >= 10}
                          className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50 focus:outline-none"
                        >
                          <Plus className="w-3 h-3 text-[#4B6872]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add Room Button */}
                <button
                  onClick={addRoom}
                  className="w-full mt-2 py-1.5 border border-[#4B6872] text-[#4B6872] rounded text-[9px] flex items-center justify-center gap-1 focus:outline-none"
                >
                  <Plus className="w-3 h-3" />
                  zimmer hinzufügen
                </button>
              </div>
            )}
          </div>

          {/* Travel Reason */}
          <div className="mt-4">
            <div className="font-medium mb-2 text-[#032B30]">Reisegrund</div>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative w-4 h-4 flex items-center justify-center">
                  <input
                    type="radio"
                    name="travelType"
                    checked={travelType === "private"}
                    onChange={() => setTravelType("private")}
                    className="opacity-0 absolute w-full h-full cursor-pointer"
                  />
                  <div
                    className={`w-4 h-4 rounded-full border ${travelType === "private" ? "border-[#4B6872]" : "border-gray-300"}`}
                  >
                    {travelType === "private" && (
                      <div className="w-2 h-2 rounded-full bg-[#4B6872] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    )}
                  </div>
                </div>
                <span className="text-[#032B30]">Privatreise</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative w-4 h-4 flex items-center justify-center">
                  <input
                    type="radio"
                    name="travelType"
                    checked={travelType === "business"}
                    onChange={() => setTravelType("business")}
                    className="opacity-0 absolute w-full h-full cursor-pointer"
                  />
                  <div
                    className={`w-4 h-4 rounded-full border ${travelType === "business" ? "border-[#4B6872]" : "border-gray-300"}`}
                  >
                    {travelType === "business" && (
                      <div className="w-2 h-2 rounded-full bg-[#4B6872] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    )}
                  </div>
                </div>
                <span className="text-[#032B30]">Geschäftsreise</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
