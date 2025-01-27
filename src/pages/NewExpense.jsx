import { Cross } from "../svgs";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
const NewExpense = () => {
    const [expense, setExpense] = useState({
        subject: "",
        merchant: "",
        date: "",   
        total: "",
        currency:"",
        category: "",
        description: "",
        reimburseable: false,
        report:""
    });
    const [expenseData,setExpenseData ] = useState([])
    const {subject,merchant,date,total,currency,category,description,reimburseable,report} = expense;
    const navigate = useNavigate();
    const handleChange = (e) =>{
        const {name,checked,value,type} = e.target
        setExpense({
            ...expense,
            [name]:type === 'checkbox' ? checked : value
        })
    }
    const handleCheckboxChange = (e) => {
        console.log("checking....")
        setExpense({...expense,
            [e.target.name]:e.target.checked}); // Update state with checkbox's "checked" value
      };
    const submitHandler = (e) =>{
        e.preventDefault();
        const newExpense = {
            subject:subject,
            merchant:merchant,
            date:date,
            total:total,
            currency:currency,
            category:category,
            description:description,
            reimburseable:reimburseable,
            report:report
        }
        console.log(newExpense)
        setExpenseData({...expense,newExpense});
        console.log(expenseData)
    }
  return (
    <div className="py-5 px-10">
        <div className="flex place-content-between border-b border-solid border-white">
            <h1 className="text-white font-bold text-4xl py-5">New expense</h1>
            <button type="button" className="cursor-pointer" onClick={() => navigate(-1)}>
                <img src={Cross} alt="cross icon" className="w-5 h-5 invert" />
            </button>
        </div>
        <form action="" className="py-8" onSubmit={submitHandler}>
            <div className="flex gap-10  py-5 items-center">
                <label htmlFor="subject" className="text-white text-lg font-bold w-35">Subject*</label>
                <input onChange={handleChange} type="text" name="subject" id="subject" value={subject} className=" h-10 w-100 border-none  rounded-sm bg-383838 outline-none px-4" />
            </div>
            <div className="flex gap-10  py-5 items-center">
                <label htmlFor="merchant" className="text-white text-lg font-bold w-35">Merchant*</label>
                <input onChange={handleChange} type="text" name="merchant" value={merchant} id="merchant" className=" h-10 w-100 border-none  rounded-sm bg-383838 outline-none px-4" />
            </div>
            <div className="flex gap-10  py-5 items-center">
                <label htmlFor="date" className="text-white text-lg font-bold w-35">Date</label>
                <input onChange={handleChange} type="date" name="date" value={date} id="date" className=" h-10 w-100 border-none  rounded-sm bg-383838 outline-none px-4" />
            </div>
            <div className="flex gap-10  py-5 items-center">
                <label htmlFor="total" className="text-white text-lg font-bold w-35">Total</label>
                <input onChange={handleChange} type="number" value={total} name="total" id="total" className=" h-10 w-100 border-none  rounded-sm bg-383838 outline-none px-4" />
                <select onChange={handleChange} name="currency" value={currency} id="currency" className=" border-none  h-10 rounded-sm text-white bg-383838 w-35 pl-4 outline-none pr-2">
                    <option >Currency</option>
                    <option value="euro">Euro</option>
                    <option value="usd">USD</option>
                    <option value="gbp">GBP</option>
                </select>
            </div>
            <div className="flex gap-10">
                <label htmlFor="" className="w-35"></label>
                <input onChange={handleChange} type="checkbox" checked={reimburseable} name="reimburseable" className="w-5 h-5 bg-383838" id="" />
                <label htmlFor="">Reimburseable</label>
            </div>
            <div className="flex gap-10  py-5 items-center">
                <label htmlFor="subject" className="text-white text-lg font-bold w-35">Category*</label>
                <select onChange={handleChange} name="category" value={category} id="category" className=" border-none  h-10 rounded-sm text-white bg-383838 w-100 pl-4 outline-none font-bold">
                    <option value="type">Type</option>
                    <option value="trip">Trip</option>
                    <option value="services">Services</option>
                    <option value="catering">Catering</option>
                </select>
            </div>
            <div className="flex gap-10  py-5 items-start">
                <label htmlFor="subject" className="text-white text-lg font-bold w-35">Description</label>
                <textarea onChange={handleChange} className="  w-100 border-none  rounded-sm bg-383838 outline-none px-4" name="description" id="" cols="30" rows="5"></textarea>
            </div>
            <div className="flex gap-10  py-5 items-center">
                <label htmlFor="employee" className="text-white text-lg font-bold w-35">Employee*</label>
                <input type="text" name="employee" id="employee" className=" h-10 w-100 border-none  rounded-sm bg-383838 outline-none px-4" />
            </div>
            <div className="flex gap-10">
                <label htmlFor="" className="w-35">Add to report</label>
                <div className="flex items-center gap-5">
                <input checked={report === 'yes'} onChange={handleChange} value={'yes'} type="radio" name="report" className="w-5 h-5 bg-383838" id="yes" />
                <label htmlFor="yes" className="text-white font-medium text-lg">Yes</label>
                </div>
                <div className="flex items-center gap-5">
                <input checked={report === 'no'} value={'no'} onChange={handleChange} type="radio"  name="report" className="w-5 h-5 bg-383838" id="no" />
                <label htmlFor="no" className="text-white font-medium text-lg">No</label>
                </div>
            </div>
            <div className="flex justify-end gap-3">
                <button className="text-white bg-gray-500 py-2 px-5 rounded-sm">Save draft</button>
                <button className="text-white bg-green-500 py-2 px-5 rounded-sm" >Save </button>
            </div>
        </form>
    </div>
  )
}

export default NewExpense