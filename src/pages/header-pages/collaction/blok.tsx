import React from "react"
import { ArrowUpRight } from "lucide-react"
import house from "../../../assets/blog_images/house.png"

type BlogItem = {
  id: number
  title: string
  date: string
  image: string
}

const items: BlogItem[] = [
  {
    id: 1,
    title: "Как правильно освещать дом снаружи?",
    date: "01.01.2024",
    image: house,
  },
  {
    id: 2,
    title: "Как правильно освещать дом снаружи?",
    date: "01.01.2024",
    image: house,
  },
  {
    id: 3,
    title: "Как правильно освещать дом снаружи?",
    date: "01.01.2024",
    image: house,
  },
  {
    id: 4,
    title: "Как правильно освещать дом снаружи?",
    date: "01.01.2024",
    image: house,
  },
  {
    id: 5,
    title: "Как правильно освещать дом снаружи?",
    date: "01.01.2024",
    image: house,
  },
  {
    id: 6,
    title: "Как правильно освещать дом снаружи?",
    date: "01.01.2024",
    image: house,
  },
]

const Card = ({ item }: { item: BlogItem }) => {
  return (
    <a
      href="#"
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-xl"
      aria-label={item.title}
    >
      <div className="overflow-hidden rounded-xl">
        {/* 16:9 image with soft rounding, matching screenshot */}
        <div className="relative aspect-[16/9] w-full">
          {/* Note: you said you'll replace images yourself */}
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[17px] md:text-[18px] font-medium leading-snug text-gray-900">{item.title}</h3>

          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-900 transition-colors group-hover:bg-gray-900 group-hover:text-white"
            aria-hidden="true"
            title="Перейти"
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <p className="mt-3 text-[13px] text-gray-500">{item.date}</p>
      </div>
    </a>
  )
}

const Blok = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      {/* Heading exactly like the screenshot: big, bold */}
      <h2 className="mt-2 mb-4 text-[44px] md:text-[56px] leading-none font-bold text-gray-900">{"Блог"}</h2>

      {/* 3-column grid on desktop, with ample gaps like the screenshot */}
      <div
        role="list"
        aria-label="Записи блога"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {items.map((item) => (
          <div role="listitem" key={item.id}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default React.memo(Blok)
