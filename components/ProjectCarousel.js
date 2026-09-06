import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image';
import { useState } from 'react';

const ProjectCarousel = ({ slideImages }) => {
  // Lazily initialised so the plugin instance stays stable across renders without
  // reading a ref during render — embla needs it on the very first render.
  const [autoplay] = useState(() =>
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  if (!slideImages?.length) {
    return null;
  }

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[autoplay]}
      aria-label="Project screenshots">
      {/* CarouselContent ships a -ml-4/pl-4 gutter pair for card layouts; these
          slides are full-bleed images, so both halves are zeroed out. */}
      <CarouselContent className="ml-0 aspect-[57/31]">
        {slideImages.map((link, linkIndex) => (
          <CarouselItem key={link?.toString()} className="relative pl-0">
            <Image
              src={`https:${link}`}
              fill
              sizes="(min-width: 960px) 50vw, 90vw"
              className="object-cover"
              alt={`Project snapshot ${linkIndex + 1} of ${slideImages.length}`}
              priority={linkIndex === 0} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* The arrows default to sitting a gutter outside the frame, where they
          would land in the text column; overlaying them keeps them in the row. */}
      {slideImages.length > 1 && (
        <>
          <CarouselPrevious size="icon" className="left-3" />
          <CarouselNext size="icon" className="right-3" />
        </>
      )}
    </Carousel>
  )
}

export default ProjectCarousel
