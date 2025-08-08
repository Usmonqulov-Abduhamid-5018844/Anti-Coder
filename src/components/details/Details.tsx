import React, { useState } from "react"
import logo from "../../assets/lustra.png"

const IconChevronUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M7 14l5-5 5 5"/></svg>
)
const IconChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M7 10l5 5 5-5"/></svg>
)
const IconCart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6.21 5l-.38-1.41A1 1 0 0 0 4.86 3H3v2h1.27l2.3 8.59A2 2 0 0 0 8.26 15h8.43a2 2 0 0 0 1.95-1.58l1.42-6.33A1 1 0 0 0 18.72 5H6.21Z"/>
  </svg>
)
const IconHeart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.54 0 3.04.81 3.85 2.09C11.16 4.81 12.66 4 14.2 4 16.7 4 18.7 6 18.7 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
)
const IconBars = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M5 9h4v12H5zM10 3h4v18h-4zM15 13h4v8h-4z"/></svg>
)

type GalleryItem = { src: string; alt: string }

const galleryItems: GalleryItem[] = [
  { src: logo, alt: "Светильник — вид спереди" },
  { src: logo, alt: "Светильник — ракурс 1" },
  { src: logo, alt: "Светильник — ракурс 2" },
  { src: logo, alt: "Светильник — деталь" },
  { src: logo, alt: "Светильник — вид сверху" },
]

export default function Details() {
  const [active, setActive] = useState(0)
  const [tab, setTab] = useState<"description" | "specs" | "video" | "gallery">("description")

  const specsLeft = [
    { label: "Артикул", value: "LED LAMPS 81284" },
    { label: "Площадь освещения м²", value: "46.67" },
    { label: "Габариты, мм", value: "105x106x40" },
    { label: "Степень защиты", value: "IP67" },
  ]
  const specsRight = [
    { label: "Мощность, Вт", value: "16" },
    { label: "Цвет", value: "Золото" },
    { label: "Масса, кг", value: "0,67 кг" },
    { label: "Напряжение, Вт", value: "220" },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:py-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <section className="lg:col-span-7">
          <div className="grid grid-cols-12 gap-4">
            <aside className="col-span-2 hidden flex-col items-center gap-2 lg:flex">
              <IconChevronUp className="h-4 w-4 text-gray-400" aria-hidden="true" />
              <div className="h-[520px] w-full overflow-y-auto">
                <div className="grid gap-3">
                  {galleryItems.map((it, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Показать изображение ${i + 1}`}
                      className={[
                        "overflow-hidden rounded-md border transition",
                        active === i ? "ring-2 ring-neutral-900" : "hover:border-gray-400",
                      ].join(" ")}
                    >
                      <img
                        src={it.src || "/placeholder.svg"}
                        alt={it.alt}
                        width={88}
                        height={88}
                        className="h-20 w-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
              <IconChevronDown className="h-4 w-4 text-gray-400" aria-hidden="true" />
            </aside>
            <div className="col-span-12 lg:col-span-10">
              <div className="overflow-hidden rounded-xl border bg-white">
                <img
                  src={galleryItems[active]?.src ?? galleryItems[0].src}
                  alt={galleryItems[active]?.alt ?? galleryItems[0].alt}
                  className="h-[520px] w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="lg:col-span-5">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Встраиваемый
            <br />
            Светильник Novotech
          </h1>

          {/* Price + actions */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-gray-500 line-through">7 000₽</span>
              <span className="text-2xl font-semibold">6 399₽</span>
            </div>

            <button className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <IconCart className="mr-2 h-4 w-4" />
              В корзину
            </button>

            <button
              aria-label="В избранное"
              className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border text-neutral-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            >
              <IconHeart className="h-5 w-5" />
            </button>
            <button
              aria-label="Сравнить"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border text-neutral-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            >
              <IconBars className="h-5 w-5" />
            </button>
          </div>

          <div className="my-6 h-px w-full bg-gray-200" />

          {/* Specs grid */}
          <div className="grid gap-0 md:grid-cols-2">
            <div className="divide-y">
              {specsLeft.map((s, i) => (
                <div key={i} className="flex items-center justify-between gap-4 py-4">
                  <span className="text-sm text-gray-500">{s.label}</span>
                  <span className="text-sm font-medium">{s.value}</span>
                </div>
              ))}
            </div>
            <div className="divide-y">
              {specsRight.map((s, i) => (
                <div key={i} className="flex items-center justify-between gap-4 py-4 md:pl-6">
                  <span className="text-sm text-gray-500">{s.label}</span>
                  <span className="text-sm font-medium">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-gray-200" />
        </section>
      </div>

      {/* Tabs + description */}
      <section className="mt-8">
        {/* Tabs bar */}
        <div className="w-full border-b">
          <div className="flex h-auto items-center gap-8">
            {[
              { id: "description", label: "Описание" },
              { id: "specs", label: "Характеристики" },
              { id: "video", label: "Видео" },
              { id: "gallery", label: "Галерея" },
            ].map((t) => {
              const active = tab === (t.id as typeof tab)
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id as typeof tab)}
                  className={[
                    "rounded-none bg-transparent px-0 py-3 text-sm",
                    active ? "border-b-2 border-neutral-900 text-neutral-900" : "text-gray-500",
                  ].join(" ")}
                  aria-selected={active}
                  role="tab"
                >
                  {t.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-6 rounded-lg border bg-white shadow-sm">
          <div className="p-6">
            <div className="grid gap-8 md:grid-cols-2">
              <p className="text-sm leading-6 text-gray-600">
                Архитектурный светильник декоративного назначения Clivo для контурной подсветки проемов окон, витражей,
                входных групп зданий. Формирует четкий узкий луч в виде рамки без паразитной засветки.
              </p>
              <p className="text-sm leading-6 text-gray-600">
                Производитель оставляет за собой право вносить изменения, не ухудшающие качество изделия, в конструкцию
                отдельных деталей, узлов и параметров светильника без предварительного уведомления.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
