'use client'

import Link from 'next/link'
import { ArrowDown, ArrowUpRight, Leaf } from 'lucide-react'

export const Component = () => {
  return (
    <section className="aero-hero relative flex min-h-[calc(100svh-72px)] w-full items-center justify-center overflow-hidden">
      <div className="aero-hero-grid absolute inset-0 z-10 size-full" aria-hidden="true">
        <div className="grid h-full w-full grid-cols-12 divide-x divide-white/15">
          <div className="col-span-1" /><div className="col-span-3" /><div className="col-span-4" /><div className="col-span-3" /><div className="col-span-1" />
        </div>
      </div>

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=2200&q=85)",
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,17,10,.38),rgba(4,17,10,.62))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(126,255,170,.22),transparent_42%)]" />
      </div>

      <div className="relative z-30 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-medium tracking-[.14em] text-white/85 uppercase shadow-[0_8px_30px_rgba(0,0,0,.12)] backdrop-blur-xl">
          <Leaf className="size-3.5 text-[#e1fcad]" /> AI-powered carbon intelligence
        </div>

        <h1 className="aero-hero-title max-w-4xl text-balance font-normal leading-[.92] tracking-[-.065em] text-white text-4xl sm:text-6xl md:text-8xl">
          Carbon intelligence, measured in every <span className="text-[#e1fcad]">snap.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-balance text-base font-light leading-7 text-white/82 md:text-xl md:leading-8">
          Snap2Green turns bills, receipts and travel records into transparent carbon insights so people and businesses can understand their footprint and take meaningful action.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/dashboard" aria-label="Open Snap2Green dashboard" className="group flex h-auto cursor-pointer items-center justify-center gap-0 rounded-full">
            <span className="rounded-full bg-[#e1fcad] px-6 py-3.5 font-medium text-[#102218] duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad]">Scan your footprint</span>
            <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#e1fcad] text-[#102218] duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad]">
              <ArrowUpRight className="absolute size-5 transition-all duration-500 group-hover:translate-x-10" />
              <ArrowUpRight className="absolute size-5 -translate-x-10 transition-all duration-500 group-hover:translate-x-0" />
            </span>
          </Link>
          <Link href="/features" className="rounded-full border border-white/20 bg-white/8 px-6 py-3.5 text-sm text-white/90 backdrop-blur-xl transition hover:bg-white/14 hover:text-white">
            Explore the system
          </Link>
        </div>

        <a href="#parallax-story" className="mt-16 flex w-fit items-center gap-2 text-xs text-white/55 transition hover:text-white/90" aria-label="Scroll to how Snap2Green works">
          Scroll to explore <ArrowDown className="size-3.5" />
        </a>
      </div>
    </section>
  )
}

export default Component
