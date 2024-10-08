import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import UserCard from "@/components/UserCard";

export default function Users() {
  return (
    <div className="flex w-screen h-screen bg-white">
      <Sidebar />

      <div className="flex-1">

        <Header title={"User Page"} username="Lucas"/>

        <main>
          <UserCard />
        </main>
        
      </div>
    </div>
      

  );
}