import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import "@/styles/styles.css"

export default function Profile() {
  return (
    <div className="flex w-screen h-screen bg-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header title={"Profile Page"} username="Lucas" />

        <div className="flex justify-center items-center w-full h-full">
            <div className="flex flex-col justify-center items-center w-[40vw] bg-white drop-shadow-lg rounded-3xl p-5 gap-4">

                <p className="text-gray-800 text-3xl mb-4 font-bold text-center border-black">Edit User</p>

                <div className="mb-8 border-gray-800 border-b-4 w-[30vw] flex justify-center">
                    <input type='text' id="name" name="name" required className="input" placeholder="Username" />
                </div>

                <div className="mb-8 border-gray-800 border-b-4 w-[30vw] flex justify-center">
                    <input type='text' id="email" name="email" required className="input" placeholder="Email" />
                </div>

                <div className="mb-8 border-gray-800 border-b-4 w-[30vw] flex justify-center">
                    <input type='password' id="password" name="password" required className="input" placeholder="Password" />
                </div>

            </div>

        </div>

      </div>
    </div>
  );
}
