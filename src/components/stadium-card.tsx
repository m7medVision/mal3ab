"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
interface StadiumCardProps {
  name: string
  location: string
  price: number
  images: string[]
}
export function StadiumCardComponent({ name, location, price, images }: StadiumCardProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="relative h-48">
        <Image
          src={images[currentImage]}
          alt={`Stadium view ${currentImage + 1}`}
          className="w-full h-full object-cover"
          width={400}
          height={400}
        />
        <div className="absolute inset-0 flex items-center justify-between p-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-black/50 text-white hover:bg-black/70"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-black/50 text-white hover:bg-black/70"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded">
          <span className="font-bold">{price} OMR.</span>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{name}</CardTitle>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="mr-1 h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Button className="w-full">Book the stadium</Button>
      </CardContent>
    </Card>
  )
}
