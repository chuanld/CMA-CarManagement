import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",


        success: "border-transparent bg-success text-success-foreground hover:bg-success/90",
        warning: "border-transparent bg-warning text-warning-foreground hover:bg-warning/90",
        info: "border-transparent bg-info text-info-foreground hover:bg-info/90",
        muted: "border-transparent bg-muted text-muted-foreground hover:bg-muted/90",
        accent: "border-transparent bg-accent text-accent-foreground hover:bg-accent/90",
        outlineSecondary: "border text-secondary-foreground hover:bg-secondary hover:text-secondary",

        // Custom theme tones
        champagne: "bg-[#d9b95c] text-[#14161b] hover:bg-[#c5a851]",
        navy: "bg-[#14161b] text-white hover:bg-[#1c2030]",

        sage: "bg-[#c9d6b8] text-[#2e3b2d] hover:bg-[#b9c6a7]", // xanh lá xám nhạt
        blush: "bg-[#f4c2c2] text-[#5a2e2e] hover:bg-[#f0b0b0]", // hồng phấn nhạt
        sky: "bg-[#cde3f8] text-[#1f2f45] hover:bg-[#bdd7f3]", // xanh trời pastel
        sand: "bg-[#e9dcc9] text-[#4a3c2a] hover:bg-[#deceb6]", // be vàng kem
        lavender: "bg-[#e3d6f8] text-[#3b2e5f] hover:bg-[#d7c7f3]", // tím pastel dịu
        mint: "bg-[#c8ede2] text-[#234c3f] hover:bg-[#b6e4d6]", // xanh ngọc pastel
        graysoft: "bg-[#e4e6eb] text-[#2f3136] hover:bg-[#d8dadf]", // xám mềm dịu

        isSale: "bg-[#e85c41] text-white hover:bg-[#d14e35]",   // đỏ cam sang trọng
        isRent: "bg-[#2ba5a5] text-white hover:bg-[#249595]",   // teal thanh lịch
        both: "bg-[#a24bb5] text-white hover:bg-[#9143a3]",     // tím magenta hiện đại
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
