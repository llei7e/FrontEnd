'use client'
import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import Card from "@/components/Card"
import LineChart from "@/components/dashboard/LineChart"
import DataTable from "@/components/dashboard/DataTable"

export default function Home() {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title={"Home page"}/>
        
        <main className="bg-white w-full p-2 flex-1 flex-col flex gap-2">

          <div className="flex justify-around gap-[1vw]">
            <Card title="Card 01" measure="3.83 kw" bgcolor="bg-green-800"/>
            <Card title="Card 02" measure="380 w" bgcolor="bg-slate-800" />
            <Card title="Card 03" measure="269 w" bgcolor="bg-red-800"/>
            <Card title="Card 04" measure="231 w" bgcolor="bg-yellow-800"/>
          </div>
          <div className="flex flex-1 justify-around text-center gap-[1vw]">
            <div className="cards">
              <LineChart />
            </div>
            <div className="cards bg-gray-600">
              <DataTable />
            </div>
          </div>

        </main>
        
      </div>
    </div> 
  );
}