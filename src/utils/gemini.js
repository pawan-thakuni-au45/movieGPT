
// import { GoogleGenAI } from "@google/genai";
import { GEMINI_KEY } from "./constant";

//  const genai = new GoogleGenAI({
//   apiKey: GEMINI_KEY,
//   dangerouslyAllowBrowser: true, // required for frontend
// });
// console.log("KEY:", GEMINI_KEY);

//   import { GoogleGenerativeAI } from "@google/generative-ai";
//    const genai = new GoogleGenerativeAI(GEMINI_KEY);
//    const model = genai.getGenerativeModel({ model: "gemini-2.0-flash" });

// export default genai

import { GoogleGenAI } from "@google/genai";

 const genai = new GoogleGenAI({ apiKey: GEMINI_KEY });
 export default genai