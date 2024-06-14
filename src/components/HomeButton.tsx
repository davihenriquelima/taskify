import Link from "next/link";

export const HomeButton = () => {
  return (
    <div className="flex justify-end m-4">
      <Link href="/">
        <img src="/images/homeicon.png" alt="" className="w-10"/>
      </Link>
    </div>
  )
}