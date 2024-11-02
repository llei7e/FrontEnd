import "@/styles/styles.css"
import Login1 from "@/components/Login1"

export default function Login() {

    return (
        <main className="w-[100vw] h-screen bg-gray-200 flex justify-center items-center font-sans">
            <div className="w-[50vw] h-[70vh] bg-white rounded-3xl drop-shadow-lg flex flex-col justify-center items-center">
                
                <h1 className="text-[7vh] font-bold mb-[10vh] border-b-2 text-gray-800 border-gray-400 ">Login</h1>
                
                <Login1 />           

            </div>

        </main>
    );
}