import { create } from 'zustand'

export const useCounter = create(set => ({
    count: 1,
    inc: () => set(state => ({ count: state.count + 1 })),
}))
