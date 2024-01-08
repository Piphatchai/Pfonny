export default function Header() {
  return (
    <div className="max-w-[1366px] mx-auto">
      <div className="flex space-x-10 text-lg pt-10 font-medium justify-end text-white items-center">
        <div className="cursor-pointer">HOME</div>
        <div className="cursor-pointer">ABOUT</div>
        <div className="cursor-pointer">COURSES</div>
        <div className="cursor-pointer">CONTACT</div>
        <div className="text-blue-500 bg-white rounded-lg cursor-pointer px-4 py-1">Join us</div>
      </div>
    </div>
  )
}