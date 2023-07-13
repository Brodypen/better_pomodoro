import { Metadata } from "next"
import AuthForm from "@/components/AuthForm"


export const metadata: Metadata = {
  title: "Sign in! | BetterPomodoro",
  description: "Sign in for BetterPomodoro!",
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