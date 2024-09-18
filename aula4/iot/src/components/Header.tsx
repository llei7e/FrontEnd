'use client'
import "../styles/styles.css"
import Image from "next/image"

interface HeaderProps{
    title?:string;
    username?:string;
}

export default function Header({title, username}:HeaderProps) {

  return (
    <header className="header">
        <div className="header-left">
            {title}
        </div>
        <div className="header-right username">
            {username && 
            <>
            <span>Bem-Vindo, {username}!</span>
            <Image src={"/images/user.png"}
            width={100}
            height={0}
            alt="User Profile"
            className="photo"></Image>
            </>
            }
        </div>
    </header>
  );
}

