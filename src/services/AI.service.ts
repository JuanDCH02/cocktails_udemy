
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
    baseURL: import.meta.env.VITE_OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1',
    defaultHeaders: {
      'HTTP-Referer': 'https://github.com/OpenRouterTeam/openrouter-examples',
    },
    dangerouslyAllowBrowser: true,
});

export async function generateRecipeStream(prompt: string) {
    const stream = await openai.chat.completions.create({
        model: 'openai/gpt-3.5-turbo', 
        messages: [
            //configuracion de la respuesta de la ia
            {role:'system', content:`Eres un bartender profesional con años de experiencia en coctelería clásica y moderna. 
            Hablas con simpatía, conocés combinaciones de sabores y describís cómo preparar cada trago con detalle y precisión`},
            //parametro del usuario
            { role: 'user', content: prompt }],
        stream: true,
    });

  return stream;
}