import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"

export default function Sensors() {
  return (
    <div className="flex w-screen h-screen bg-white">
      <Sidebar />

      <div className="flex-1">

        <Header title={"Sensors Page"}/>

        <main>
          <h1 className="p-10 text-black text-2xl">Welcome!</h1>
        </main>
        
      </div>
    </div>
      

  );
}