import isPc from '@/helpers/isPc'
import { create } from 'zustand'

interface ModelStore {
    env: '' | 'WEAPP' | 'WEB'
    setEnv: (lang: 'WEAPP' | 'WEB') => void
    checkIfPc: () => boolean
}

export const useRunModel = create<ModelStore>((set, get) => ({
    env: '', // 
    setEnv: (env) => set(() => ({ env })),
    checkIfPc: () => {
        return isPc() && get().env === 'WEB'
    }
}))
