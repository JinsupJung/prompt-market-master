import Link from "next/link"
import Image from 'next/image';

export default function Home() {
  return (
    <div> 
    <Image
      src="/create-prompt.png"
      width={1800}
      height={1500}
      alt="Picture of the prompt"
    />
    </div>
  )
}
