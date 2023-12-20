import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price : number | string,
  options : {
    currency? :"USD" | "EUR" | "INR" | "GBP",
    notation? :Intl.NumberFormatOptions["notation"],
  } = {}
){
  const {currency = "INR" , notation = "compact"} = options
  
  const numericPrice = typeof price === "string" ? parseFloat(price) : price

  return new Intl.NumberFormat("en-US" , {
    style : "currency",
    currency : currency,
    notation : notation,
    maximumFractionDigits : 2
  }).format(numericPrice);
}


export function constructMetadata({
  title = 'DigitalHippo',
  description = 'DigitalHippo is an open-source marketplace for high-quality digital goods.',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@joshtriedcoding',
    },
    icons,
    metadataBase: new URL('https://digitalhippo-production-6a3a.up.railway.app'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}