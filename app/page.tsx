import Link from "next/link"
import Image from 'next/image';

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
    <Image
      src="/create-prompt.png"
      width={1000}
      height={1500}
      alt="Picture of the prompt"
    />
    </div>
  )
}
