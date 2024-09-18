import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import Card from "@/components/Card"

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title={"Home page"}/>
        
        <main className="bg-white p-2 flex-1">

          <div className="flex justify-around">
            <Card title="Oven 1min" measure="3.83 k" bgcolor="bg-green-800"/>
            <Card title="Gas Frequence 1min" measure="380 " bgcolor="bg-slate-800" />
            <Card title="Guest Bedroom 1min" measure="269 " bgcolor="bg-red-800"/>
            <Card title="Office 1min" measure="231 " bgcolor="bg-yellow-800"/>
          </div>

          <div className="flex justify-around mt-4 bg-gray-500 p-3 text-center">
            <div className="w-2/5 bg-slate-400 rounded-md">opa</div>
            <div className="w-2/5 bg-slate-400 rounded-md">opa</div>
          </div>

        </main>
        
      </div>
    </div>
      

  );
}