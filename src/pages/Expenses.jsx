import React from "react";
import { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { deleteExpense, fetchExpenses } from "../features/expenseSlice";
import axios from 'axios'

const Expenses = () => {
  const {expenses} = useSelector(state=> state.expense)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [data,setData] = useState([])

  // Dummy data

  useEffect(()=>{
    dispatch(fetchExpenses())
  },[dispatch])


  useEffect(()=>{
    if(expenses){
      setData(expenses)
    }
  })

const deleteHandler = (id) =>{
  axios.delete(`http://localhost:8000/expenses/${id}`).then(res=>{
    dispatch(deleteExpense(id))
    dispatch(fetchExpenses())
  }).catch(err=> console.log(err))
}

  return (
    <>
      <table class="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th className="text-white p-2 border border-gray-400">Subject</th>
            <th className="text-white p-2 border border-gray-400">merchant</th>
            <th className="text-white p-2 border border-gray-400">date</th>
            <th className="text-white p-2 border border-gray-400">total</th>
            <th className="text-white p-2 border border-gray-400">currency</th>
            <th className="text-white p-2 border border-gray-400">reimburseable</th>
            <th className="text-white p-2 border border-gray-400">category</th>
            <th className="text-white p-2 border border-gray-400">description</th>
            <th className="text-white p-2 border border-gray-400">employee</th>
            <th className="text-white p-2 border border-gray-400">report</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.map(expense=>{
              return <tr>
                <td className="text-white p-2 border border-gray-400">{expense.subject}</td>
                <td className="text-white p-2 border border-gray-400">{expense.merchant}</td>
                <td className="text-white p-2 border border-gray-400">{expense.date}</td>
                <td className="text-white p-2 border border-gray-400">{expense.total}</td>
                <td className="text-white p-2 border border-gray-400">{expense.currency}</td>
                <td className="text-white p-2 border border-gray-400">{expense.reimburseable ? 'yes' : 'no' }</td>
                <td className="text-white p-2 border border-gray-400">{expense.category}</td>
                <td className="text-white p-2 border border-gray-400">{expense.description}</td>
                <td className="text-white p-2 border border-gray-400">{expense.employee}</td>
                <td className="text-white p-2 border border-gray-400">{expense.addToReport}</td>
                <td className="text-white p-2 border border-gray-400">
                  <button className="text-blue-300  font-medium cursor-pointer px-3"
                  onClick={()=>navigate('/new-expense/'+expense.id)}>Edit</button>
                </td>
                <td className="text-white p-2 border border-gray-400">
                <button className=" text-red-500 font-medium cursor-pointer px-3"
                onClick={()=>deleteHandler(expense.id)}>Delete</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  );
};

export default Expenses;
