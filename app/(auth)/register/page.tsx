import { Metadata } from "next"
import Image from "next/image"
import AuthForm from "@/components/AuthForm"
import blub from "@/assets/absurd_design_bulb.png"
import { Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "Sign up! | BetterPomodoro",
  description: "Sign up for BetterPomodoro!",
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative h-screen max-h-screen flex-col items-center justify-center grid max-w-none lg:grid-cols-3 lg:px-0">

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
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 min-w-[350px] max-w-[600px] ">
            <AuthForm mode="register"/>
          </div>
        </div>
      </div>
    </>
  )
}