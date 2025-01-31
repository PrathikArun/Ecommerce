import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "@/components/Nav";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  if(!session){
    return (
      <div className={"bg-black-900 w-screen h-screen flex items-center"}>
        <div className="text-center w-full">
          <button onClick={()=>signIn('google')} className="bg-white text-black p-2 px-4 rounded-lg">Login with Google</button>
        </div>
      </div>
    )
  }
  return (
    <div className="bg-black-900 min-h-screen flex">
      <Nav/>
      <div className="bg-gray-800 flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">Logged in as {session.user.email}</div>

    </div>
  );
}
