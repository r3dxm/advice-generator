import axios from "axios";
import { useEffect, useState } from "react";

type data = {
  id: number,
  advice: string
}

type slip = {
  slip: data
}


function App() {
  const [data, setData] = useState<slip>();
  const getAdvice = async () => {
    setData({slip:{id: 0, advice: "Loading..."}});
    await axios.get('https://api.adviceslip.com/advice').then((response) => {
      setData(response.data);
    })
  }

  useEffect(() => {
    getAdvice();
  }, [])
  return (
    <div className="w-[350px] h-[300px] bg-dark-grayish-blue flex flex-col items-center justify-center rounded-lg p-5 relative desktop:w-[475px] desktop:p-10">
      {data ? <h1 className="text-neon-green text-[12px] tracking-[3px] text-center mt-[-30px]">ADVICE #{data.slip.id}</h1> : null}
      {data ? <p className="w-[300px] h-[150px] text-light-cyan text-[22px] text-center flex items-center justify-center desktop:w-[400px] desktop:text-[24px]">"{data.slip.advice}"</p> : "Loading..."}
      <div className="flex">
        <hr/>
        <img className="desktop:hidden" src="pattern-divider-mobile.svg" alt="divider"/>
        <img className="hidden desktop:block" src="pattern-divider-desktop.svg" alt="divider"/>
        <hr/>
      </div>
      <button className="w-[65px] h-[65px] flex items-center justify-center bg-neon-green rounded-full absolute bottom-[-32.5px] active:shadow-[0px_0px_35px_hsla(150,100%,66%,0.7)]">
        <img onClick={getAdvice} className="" src="icon-dice.svg" alt="get new advice"/>
      </button>
    </div>
  )
}

export default App
