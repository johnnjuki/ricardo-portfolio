import React from 'react'
import Image from "next/image";

export default function Intro() {
  return (
    <section>
      <div className="flext items-center justify-center">
        <div>
          <Image src="https://unsplash.com/photos/F6039SWvBp0" alt="Ricardo portrait" />
        </div>
      </div>
    </section>
  )
}
