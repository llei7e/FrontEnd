'use client'
import "../styles/styles.css"

interface CardProps{
    title?:string;
    measure?:string;
    bgcolor?:string;
}

export default function Card({title, measure, bgcolor="bg-black"}:CardProps) {

  return (
    <div className={`cards ${bgcolor}`}>
        <p>{title}</p>
        <p className="number">{measure}</p>
    </div>
  );
}

