// import { clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// // Utility function to merge Tailwind + conditional classes
// export function cn(...inputs) {
//     return twMerge(clsx(inputs));
// }


import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

