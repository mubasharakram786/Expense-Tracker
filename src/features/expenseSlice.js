import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchExpenses = createAsyncThunk('expense/fetchExpenses',async()=>{
    try{
        const response = await axios.get('http://localhost:8000/expenses');
        return response.data
    }catch(error){
        const Error = new Error(error);
        throw Error
    }

})

const expenseSlice = createSlice({
    name:'expense',
    initialState:{
        loading:false,
        expenses:[],
        error:null
    },
    reducers:{
        addExpense:(state,action)=>{
            state.expenses.push(action.payload)
        },
        updateExpense:(state,action)=>{
            state.expenses=state.expenses.map((expense)=>{
                if(expense.id === action.payload.id){
                    return action.payload
                }
                return expense
            })

            },
        deleteExpense:(state,action)=>{
            state.expenses= state.expenses.filter(expense=> expense.id !== action.payload.id);
            
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchExpenses.pending , (state)=>{
            state.loading=true
            state.error=null
        })
        builder.addCase(fetchExpenses.fulfilled, (state,action)=>{
            state.loading=false
            state.expenses = action.payload
        })
        builder.addCase(fetchExpenses.rejected, (state,action)=>{
            state.loading=false
            state.error=action.payload.message
        })
    }
})

export default expenseSlice.reducer
export const {addExpense,updateExpense,deleteExpense} = expenseSlice.actions
