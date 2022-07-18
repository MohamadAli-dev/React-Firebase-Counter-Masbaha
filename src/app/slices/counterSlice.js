import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    counters:{
    "سبحان الله": 0,
    "الحمدلله": 0,
    "لا إله إلا الله": 0,
    "الله أكبر": 0,
    "رب اغفر لي": 0,
    "استغفر الله": 0,
    "لا حول ولا قوة إلا بالله": 0,
    "اللهمَّ إنك عفوٌّ تُحبُّ العفوَ فاعفُ عنِّي": 0,
    "اللهم صل وسلم وبارك على سيدنا محمد": 0,
    "سبحان الله وبحمده سبحان الله العظيم": 0,
    "سبحان الله والحمد لله ولا إله إلا الله والله أكبر": 0,
    "أستغفر الله الذى لا إله إلا هو الحي القيوم وأتوب إليه": 0,
    "لا اله الا انت سبحانك إني كنت من الظالمين": 0,
    "سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته": 0,
    "لا إله إلا الله وحده لا شريك لهُ ، لهُ الملك ، ولهُ الحمدُ ، وهو على كل شيء قدير": 0,}
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            return { counters:{...state.counters, [action.payload]: state.counters[action.payload] + 1 }}
        },
        reset: (state, action) => {
            return {counters:{ ...state.counters, [action.payload]: 0 }}
        },
        resetAll: (state) => initialState
        
    }
})

export const { increment, reset, resetAll } = counterSlice.actions;

export default counterSlice.reducer