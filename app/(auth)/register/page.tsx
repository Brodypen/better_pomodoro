import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
// import { UserAuthForm } from "@/app/examples/authentication/components/user-auth-form"
import blub from "@/assets/absurd_design_bulb.png"
import { Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "Sign up! | BetterPomodoro",
  description: "Sign up for BetterPomodoro!",
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative h-screen max-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-3 lg:px-0">
        {/* <Link
          href="/signin"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}        >
          Login
        </Link> */}
        <div className="col-span-1 relative hidden h-full flex-col bg-muted p-10 text-black dark:border-r lg:flex">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-teal-100" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Lightbulb/>
            Better Pomodoro
          </div>
           <Image
          src={blub}
          width={720}
          height={720}
          alt="Light bulb image from absurd.design"
          className="relative z-2 m-auto"
          
        />
         
          <div className="relative z-20">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Quality is not an act, it is a habit.&rdquo;
              </p>
              <footer className="text-sm">Aristotle</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 col-span-2">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] ">
            <div className="flex flex-col space-y-2 text-center ">
              <h1 className="text-3xl font-semibold tracking-tight">
                Join Better Pomodoro!
              </h1>

              <p className="text-sm text-muted-foreground">
                A better way to Pomodoro
              </p>
            </div>
            {/* <UserAuthForm /> */}
            <p className="px-8 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="underline underline-offset-4 hover:text-primary text-blue-300"
              >
                Log in!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}