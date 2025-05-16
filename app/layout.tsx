import type { Metadata } from "next"
import { IBM_Plex_Mono, Josefin_Sans } from "next/font/google"
import "./globals.css"
import Sidebar from "./components/molecules/sidebar"
// import Header from "@/components/header"

const ibm = IBM_Plex_Mono({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-ibm"
})

const josefin = Josefin_Sans({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-josefin"
})

export const metadata: Metadata = {
  title: "Anne-Flore Bernard",
  description: "Portfolio de développeuse fullstack créative."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${ibm.variable} ${josefin.variable}`}>
        {/* <Header /> */}
        <Sidebar/>
        {children}
      </body>
    </html>
  )
}
