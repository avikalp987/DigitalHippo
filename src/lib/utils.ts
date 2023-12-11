import { type ClassValue, clsx } from "clsx"
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
