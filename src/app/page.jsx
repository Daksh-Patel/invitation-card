"use client"

import { useState } from "react"
import DoorScene from "@/components/DoorScene"
import InvitationCard from "@/components/InvitationCard"

export default function Home() {
  const [step, setStep] = useState("intro")

  return (
    <main className='flex justify-center items-center h-screen overflow-hidden bg-white p-4'>
      {/* INVITATION CONTAINER */}
      <div className='w-full max-w-120 h-[97vh] bg-white relative overflow-hidden rounded-xl shadow-lg p-4'>
        {step !== "card" && <DoorScene onComplete={() => setStep("card")} />}

        {step === "card" && (
          <div className='h-full overflow-y-auto'>
            <InvitationCard />
          </div>
        )}
      </div>
    </main>
  )
}
