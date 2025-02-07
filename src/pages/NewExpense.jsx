import { useForm } from "react-hook-form";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { Cross } from "../svgs";
const NewExpense = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate();
    const submitHandler = (data) =>{
        console.log(data)
    }

  return (
    <div className="py-5 px-10">
        <div className="flex place-content-between border-b border-solid border-white">
            <h1 className="text-white font-bold text-4xl py-5">New expense</h1>
            <button type="button" className="cursor-pointer" onClick={() => navigate(-1)}>
                <img src={Cross} alt="cross icon" className="w-5 h-5 invert" />
            </button>
        </div>
        <form action="" className="py-8" onSubmit={handleSubmit(submitHandler)}>
            <div className="flex gap-10  py-5 items-center">
                <label htmlFor="subject" className="text-white text-lg font-bold w-35">Subject*</label>
                <div className="flex flex-col">
                <input 
                type="text"
                 {...register  ("subject" , {required:"Subject is Required." })}
                id="subject"
                className=" h-10 w-100 border-none  rounded-sm bg-383838 outline-none px-4" />

                {errors.subject && <p className="text-sm text-red-200">{errors.subject.message}</p> }
                </div>
            </div>
            <div className="flex gap-10  py-5 items-center">
                <label htmlFor="merchant" className="text-white text-lg font-bold w-35">Merchant*</label>
                <div className="flex flex-col">
                <input
                 type="text"
                 {...register  ("merchant" , {required:"Merchant is Required."})}
                 id="merchant"
                 className=" h-10 w-100 border-none  rounded-sm bg-383838 outline-none px-4" />
                  {errors.merchant && <p className="text-sm text-red-200">{errors.merchant.message}</p> }
                </div>
            </div>
            <div className="flex gap-10  py-5 items-center">
                <label htmlFor="date" className="text-white text-lg font-bold w-35">Date</label>
                <div className="flex flex-col">
                <input 
                 type="date"
                 {...register  ("date" , {required:"Date is Required."})}
                    id="date"
                     className=" h-10 w-100 border-none  rounded-sm bg-383838 outline-none px-4" />
                      {errors.date && <p className="text-sm text-red-200">{errors.date.message}</p> }
                </div>
            </div>
            <div className="flex gap-10  py-5 items-flex-start">
                <label htmlFor="total" className="text-white text-lg font-bold w-35">Total</label>
                <div className="flex flex-col">
                <input  
                type="number"
                {...register  ("total" , {required:"Total Amount is Required."})}
                id="total"
                 className=" h-10 w-100 border-none  rounded-sm bg-383838 outline-none px-4" />
                    {errors.total && <p className="text-sm text-red-200">{errors.total.message}</p>}
                </div>
                <div className="flex flex-col">
                <select  name="currency" 
                 id="currency"
                 {...register ("currency" , {required:"Please select a currency."})}
                  className=" border-none  h-10 rounded-sm text-white bg-383838 w-50 pl-4 outline-none pr-2"
                  
                  >
                    <option value="">Select the currency</option>
                    <option value="euro">Euro</option>
                    <option value="usd">USD</option>
                    <option value="gbp">GBP</option>
                </select>
                    {errors.currency && <p className="text-sm text-red-200">{errors.currency.message}</p>}
                </div>
            </div>
            <div className="flex gap-10">
                <label htmlFor="" className="w-35"></label>
                <input  type="checkbox" 
                {...register("reimburseable")}
                  className="w-5 h-5 bg-383838"
                   id="" />
                <label htmlFor="">Reimburseable</label>
            </div>
            <div className="flex gap-10  py-5 items-center">
                <label htmlFor="subject" className="text-white text-lg font-bold w-35">Category*</label>
                <div className="flex flex-col">
                <select  name="category"
                  id="category"
                  {...register  ("category" , {required:"Please select a category."})}
                  className=" border-none  h-10 rounded-sm text-white bg-383838 w-100 pl-4 outline-none font-bold">
                    <option value="">Select the category</option>
                    <option value="trip">Trip</option>
                    <option value="services">Services</option>
                    <option value="catering">Catering</option>
                </select>
                    {errors.category && <p className="text-sm text-red-200">{errors.category.message}</p>}
                </div>
            </div>
            <div className="flex gap-10  py-5 items-start">
                <label htmlFor="subject" className="text-white text-lg font-bold w-35">Description</label>
                <div className="flex flex-col">
                <textarea  
                className="  w-100 border-none  rounded-sm bg-383838 outline-none px-4 py-4" 
                {...register  ("description" , {required:"Description is Required."})}
                id="" 
                cols="30" 
                rows="5">
               </textarea>
                    {errors.description && <p className="text-sm text-red-200">{errors.description.message}</p>}
                </div>
            </div>
            <div className="flex gap-10  py-5 items-center">
                <label htmlFor="employee" className="text-white text-lg font-bold w-35">Employee*</label>
                <div className="flex flex-col">
                <input 
                type="text"
                {...register  ("employee" , {required:"Employee Name is Required."})}
                  id="employee"
                   className=" h-10 w-100 border-none  rounded-sm bg-383838 outline-none px-4"
                    />
                   {errors.employee && <p className="text-sm text-red-200">{errors.employee.message}</p>} 
                </div>
            </div>
            <div className="flex gap-10">
                <label htmlFor="" className="w-35">Add to report</label>
                <div className="flex items-center gap-5">
                <input {...register("yes")}  value={'yes'} type="radio" name="report" className="w-5 h-5 bg-383838" id="yes" />
                <label htmlFor="yes" className="text-white font-medium text-lg">Yes</label>
                </div>
                <div className="flex items-center gap-5">
                <input  {...register("no")} value={'no'}  type="radio"  name="report" className="w-5 h-5 bg-383838" id="no" />
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