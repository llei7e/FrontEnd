import ClimateData from "@/components/climate/ClimateData";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Climate() {
    return (
        <div className="flex text-black">
            <Sidebar />
            <div className="flex-1">
                <Header title="Clima" username="Lucas Leite" />
                <main className="bg-white">

                    <h1>Clima dos últimos 10 dias</h1>
                    <ClimateData />
                </main>
            </div>
        </div>
    );
}