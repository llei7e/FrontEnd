'use client'
import Image from "next/image"
import "../styles/styles.css"
import NavBar from "@/components/NavBar"

export default function Home() {
  return (
      <aside className="sideBar">
        <Image src={"/images/iot.png"}
        width={300}
        height={0}
        alt="Logo IoT"
        className="w-1/3 ml-auto mr-auto mb-6 rounded-lg " />
        <NavBar />
        
      </aside>      
  );
}

