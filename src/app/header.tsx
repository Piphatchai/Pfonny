import Link from 'next/link'
export default function Header() {
  return (
    <div className="max-w-[1366px] mx-auto">
      <div className="flex space-x-10 text-lg pt-10 font-medium justify-end text-white items-center">
        <div className="cursor-pointer"> <Link href="/">HOME</Link></div>
        <div className="cursor-pointer"><Link href="/about">ABOUT</Link></div>
        <div className="cursor-pointer"><Link href="/courses">COURSES</Link></div>
        <div className="cursor-pointer">CONTACT</div>
        <div className="text-blue-500 bg-white rounded-lg cursor-pointer px-4 py-1">Join us</div>
      </div>
    </div>
  )
}