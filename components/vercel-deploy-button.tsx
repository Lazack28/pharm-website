"use client"

import { Button } from "@/components/ui/button"

export function VercelDeployButton() {
  return (
    <Button
      className="bg-black hover:bg-gray-800 text-white"
      onClick={() => {
        window.open(
          "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fpharmasjut",
          "_blank",
        )
      }}
    >
      <svg
        className="h-4 w-4 mr-2"
        fill="white"
        viewBox="0 0 76 65"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
      </svg>
      Deploy to Vercel
    </Button>
  )
}
