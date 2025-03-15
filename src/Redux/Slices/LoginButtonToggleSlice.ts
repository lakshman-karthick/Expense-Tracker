import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface LoginButtonToggle{
    value: number
}

const initialState : LoginButtonToggle = {
    value: 0
}

export const LoginButtonToggleSlice = createSlice({
    name: 'LoginButtonToggle',
    initialState,
    reducers:{
        toggle: (state, action: PayloadAction<number>)=>{
            state.value = action.payload; 
        }
    }
});

export const {toggle} = LoginButtonToggleSlice.actions;
export default LoginButtonToggleSlice.reducer;