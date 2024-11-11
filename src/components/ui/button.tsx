import { cn } from "../../lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                outline: "border border-primary bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                linkPrimary: "text-primary underline-offset-4 hover:underline",
                linkBlack: "text-black underline-offset-4 hover:underline hover:text-primary",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, size, variant, ...props }, ref) => {
        return (<button
            ref={ref}
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />)
    }
)

export { Button, buttonVariants }
