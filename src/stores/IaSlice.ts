import type { StateCreator } from "zustand";
import { generateRecipeStream } from '../services/AI.service'


export type IaSliceType = {
    recipe:string
    isGenerating: boolean
    generateRecipe: (prompt:string) => Promise<void>
}
//por lo que estuve viendo, es por un problema de versiones con ai, la versiones 3.0 retornan texto plano y la 5.0 objetos, y por lo que entiendo usar @openrouter/ai-sdk-provider exige las versiones 5.0
export const createIaSlice: StateCreator<IaSliceType> = (set) => ({
    recipe: '',
    isGenerating: false,
    generateRecipe: async (prompt) => {
    set({ recipe: '', isGenerating: true });

    try {
        const stream = await generateRecipeStream(prompt);
        for await (const chunk of stream) {
            const token = chunk.choices[0]?.delta?.content || '';
            set((state) => ({ recipe: state.recipe + token }));
        }
        set({ isGenerating: false });
    }catch (error) {
        console.error('Error generando receta:', error);
        set({ isGenerating: false });
    }
  }
})