import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import AuthForm from "@/components/AuthForm"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
// import { UserAuthForm } from "@/app/examples/authentication/components/user-auth-form"

export const metadata: Metadata = {
  title: "Sign in!",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <>

  
    <div className="relative h-screen max-h-screen w-screen flex-col items-center justify-center flex Pastel bg-gradient-to-tr from-violet-500 to-orange-300">
      
    <div className="min-w-[350px] md:min-w-[600px]">
      <AuthForm mode="signin"/>
    </div>
    </div>

    </>
  )
}