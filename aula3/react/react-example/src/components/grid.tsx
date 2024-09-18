export function Grid(){
    return(
        <div className="grid grid-cols-3 gap-4 m-5 mt-10 text-center text-black text-xl h-8 font-bold">
            <div className="bg-slate-400 rounded-xl">Card 1
                <img src={"/img1.jpg"} alt="Imagem 1" width={800} height={150}/>
            </div>
            <div className="bg-slate-400 rounded-xl">Card 2
                <img src={"/img2.jpg"} alt="Imagem 2" width={800} height={150}/>
            </div>
            <div className="bg-slate-400 rounded-xl">Card 3
                <img src={"/img4.jpg"} alt="Imagem3 " width={900} height={400}/>
            </div>
      </div>
    );
}