import React from 'react'
import Image from 'next/image'
import { MapPin, Clock, User } from 'lucide-react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from "@payload-config"



export default async function StadiumBookingPage({ params }: { params: Promise<{ id: string }> }) {
  const stadiumId = await params.then(({ id }) => id)
  const payload = await getPayloadHMR({ config })
  const stadium = await payload.findByID({
    collection: "stadiums",
    id: stadiumId,
    depth: 1
  })
  const STADIUM_LAT = stadium.location.coordinates?.[1] || 40.73061
  const STADIUM_LON = stadium.location.coordinates?.[0] || -73.93524
  const stadiumImages = [
    "https://picsum.photos/1000/1000?random=1",
    "https://picsum.photos/1000/1000?random=2",
    "https://picsum.photos/1000/1000?random=3",
    "https://picsum.photos/1000/1000?random=4",
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{stadium.name}</h1>
            <div className="flex items-center text-muted-foreground">
              <User className="mr-2 h-4 w-4" />
              {/* @ts-ignore */}
              <span>Owned by {stadium.owner.name}</span>
            </div>
          </div>

          <Carousel className="w-full max-w-3xl mx-auto mb-8">
            <CarouselContent>
              {stadiumImages.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Image
                      src={src}
                      alt={`Stadium view ${index + 1}`}
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full h-[400px]"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              <div className="flex items-center mb-2">
                <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                <span>{stadium.location.address}</span>
              </div>
              <div
                className="rounded-lg overflow-hidden h-[200px] cursor-pointer"
                role="button"
                aria-label="Open in Google Maps"
              >
                <iframe
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${STADIUM_LON - 0.01},${STADIUM_LAT - 0.01},${STADIUM_LON + 0.01},${STADIUM_LAT + 0.01}&layer=mapnik&marker=${STADIUM_LAT},${STADIUM_LON}`}
                  width="100%"
                  height="100%"
                  title="Stadium Location"
                ></iframe>
              </div>
              <Link href={`https://www.google.com/maps/search/?api=1&query=${STADIUM_LAT},${STADIUM_LON}`} className="text-sm text-muted-foreground mt-2">Open in Google map</Link>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Pricing</h2>
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-muted-foreground" />
                      <span>Per Hour</span>
                    </div>
                    <div className="flex items-center font-semibold">
                      <span>{stadium.hourlyRate} OMR.</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-muted">
          <Button className="w-full" size="lg">Book Now</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
