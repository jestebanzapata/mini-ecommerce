'use client'

import ThirdLayout from "@/components/molecules/Layout/ThirdLayout"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ThirdLayout>
      {children}
    </ThirdLayout>
  )
}
