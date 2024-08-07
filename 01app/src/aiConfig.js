import { GoogleGenerativeAI } from "@google/generative-ai"
import { HfInference } from '@huggingface/inference'


const hf = new HfInference('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')
const genAI = new GoogleGenerativeAI("AIzaSyB0NhgGXtuTXHjuim3WrjCamcRucvVMOQk");

export const textTotext =async (inp) =>{
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const result = await model.generateContent(inp);
  const response =result.response;
  const text = response.text();
  return text
}

export const textTospeech = async (inp)=>{
  let res =await hf.textToSpeech({
    model: 'suno/bark',
    inputs:inp
  })
  const source = URL.createObjectURL(res)
  return source
}

export const textToimage = async (prom) =>{
  try {
    let res = await hf.textToImage({
      inputs: prom,
      model: 'stabilityai/stable-diffusion-xl-base-1.0',
      parameters: {
        negative_prompt: "blurry",
      }
    })
  return URL.createObjectURL(res)

  } catch (error) {
    console.log(error);
    return;
  }

}

