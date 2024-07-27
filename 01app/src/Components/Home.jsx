import { useState } from "react";
import { auth } from "../firebaseConfig";
import { textToimage,textTospeech,textTotext } from "../aiConfig";
import { BounceLoader } from "react-spinners";
import { IoSend } from "react-icons/io5";

const PlsLogin = ()=>{
  return(
    <div className="h-full w-full bg-neutral-900 text-white flex justify-center items-center">
      Please log in
    </div>
  )
}

const MainHome = ()=>{
  const [isLoading , setisLoading] =useState(false)
  const [result , setResult] = useState(<div className="text-white/75 md:text-3xl">Enter a prompt</div>)
  const [mode , setMode] = useState('textToimage')
  const [inp , setInp] = useState('')
  const [loader , setLoader] = useState(<BounceLoader color="#36d7b7"/>)

  async function generate() {
    setisLoading(true)
    if(mode==='textToimage'){
      let source =await textToimage(inp)
      setResult( <><img className="h-1/2 aspect-square" src={source}/>
      <a className="underline text-white/90" href={source} download={source}>Download</a></>)
      setisLoading(false)
    }
    else if(mode==='textTospeech'){
      let source =await textTospeech(inp)
      setResult( <audio src={source} controls/>)
      setisLoading(false)
    }
    else if(mode==='textTotext'){
      let text =await textTotext(inp+". answer within 70 words")
      setResult(<p className="w-[90%] md:w-[70%] h-[90%] text-white/90 flex justify-center items-center text-justify">{text}</p>)
      setisLoading(false)
    }
  }

  return(
    <div className="h-full bg-neutral-900 flex flex-col-reverse justify-evenly items-center">
      <div className="h-[80%] rounded md:w-1/2 w-[90%] bg-white/10 flex justify-center items-center flex-col">
        <div className="flex flex-col gap-y-2 rounded justify-center items-center h-[80%]">
          {isLoading ? loader : result}
        </div>
      </div>
      <div className="h-[10%] md:w-1/2 w-[90%] flex justify-center items-center flex-col">
        <div className="flex md:flex-no-wrap flex-wrap justify-between items-center w-full h-[80%]">
          <input 
          className="px-2 text-white/75 h-full w-[70%] bg-white/10 rounded" type="text" 
          placeholder="Enter a prompt [eg: 'what is mitochondria']"
          onChange={(e)=>setInp(e.target.value)}
          />
          <button 
          onClick={generate}
          className="bg-white/10 flex justify-center items-center text-2xl text-white h-full rounded w-[8%]"
          >
            <IoSend/>
          </button>
          <select 
          className="px-1 h-full text-white w-[20%]  bg-white/10 rounded-md" 
          onChange={(e)=>setMode(e.target.value)}
          >
            <option className="bg-neutral-900" value="textTotext" >
              text-to-text
            </option>
            <option className="bg-neutral-900"  value="textTospeech">
              text-to-speech
            </option>
            <option className="bg-neutral-900"  value="textToimage">
              text-to-image
            </option>
          </select>
        </div>
      </div>
    </div>
  )
}

function Home() {
    return (
      <div className="h-[90vh] w-full">
       {auth.currentUser?.getIdToken ? <MainHome/> : <PlsLogin/> }
      </div>
    )
 }
  
export default Home