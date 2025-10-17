"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { name: "Products", href: "/products" },
    { name: "Solutions", href: "/solutions" },
    { name: "Resources", href: "/resources" },
  ]

  return (
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-3 ">
      {/* Left: Logo */}
      <div className="flex items-center gap-2 ml-15">
        <img src="/logo.png" alt="Logo" className="w-8 h-8" />
        <span className="font-semibold">
            Andalan Smart School by{" "}
            <span style={{ color: "#0F4C81" }}>sYx</span>
            <span style={{ color: "#44D62C" }}>paY</span>
        </span>
      </div>

      {/* Middle: Segmented Nav */}
      <div className="flex items-center rounded-full bg-muted p-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={`rounded-full ${
                  isActive
                    ? "bg-white border border-gray-300"
                    : ""
                }`}
              >
                {item.name}
              </Button>
            </Link>
          )
        })}
      </div>

      {/* Right: Action Buttons */}
      <div className="flex items-center gap-3">
        <Link href="">
          <Button
            variant="outline"
            className="rounded-full hover:bg-blue-50"
            style={{ borderColor: "#0F4C81", color: "#0F4C81" }}
          >
            Contact Sales
          </Button>
        </Link>

        <Link href="">
          <Button
            variant="outline"
            className="rounded-full"
            style={{
              backgroundColor: "#C3F498",
              color: "#2F584F",
              borderColor: "#C3F498",
            }}
          >
            Schedule Demo
          </Button>
        </Link>
      </div>
    </nav>
  )
}
