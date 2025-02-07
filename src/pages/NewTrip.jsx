import React from 'react'
import { Cross } from "../svgs";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
const NewTrip = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate();
    const submitHandler = (data) =>{
        console.log(data)
    }
  return (
    <div className="py-5 px-10">
        <div className="flex place-content-between border-b border-solid border-white">
            <h1 className="text-white font-bold text-4xl py-5">New Trip</h1>
            <button type="button" className="cursor-pointer" onClick={() => navigate(-1)}>
                <img src={Cross} alt="cross icon" className="w-5 h-5 invert" />
            </button>
        </div>
        <form action="" className="py-8" onSubmit={handleSubmit(submitHandler)}>
            <div className="flex gap-10  py-5 items-start">
                <label htmlFor="name" className="text-white text-lg font-bold w-35">Name*</label>
                <div className="flex flex-col">
                <input 
                type="text"
                 {...register  ("name" , {required:"Name is required." })}
                id="name"
                className=" h-10 w-100 border-none  rounded-sm bg-383838 outline-none px-4" />

                {errors.name && <p className="text-sm text-red-200">{errors.name.message}</p> }
                </div>
            </div>
            <div className="flex gap-10">
                <label htmlFor="type" className="text-white text-lg font-bold w-35">Type*</label>
                <div className="flex gap-10">
                    <div className="flex items-center gap-2">
                        <label htmlFor='domestic' className="flex items-center text-white text-lg font-medium cursor-pointer"> 
                        <input
                         type="radio"
                          value={'Domestic'}
                          {...register ("type")}
                          className='w-5 h-5'
                           id="domestic" />
                            <span className='ml-2'>Domestic</span>
                        </label>
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor='international' className="flex items-center text-white text-lg font-medium cursor-pointer"> 
                        <input
                         type="radio"
                         className='w-5 h-5'
                          value={'International'}
                          {...register ("type")}
                           id="international" />
                            <span className='ml-2'>International</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex gap-10  py-5 items-start">
                <label htmlFor="subject" className="text-white text-lg font-bold w-35">Purpose*</label>
                <div className="flex flex-col">
                <textarea  
                className="  w-100 border-none  rounded-sm bg-383838 outline-none px-4 py-4" 
                {...register  ("description" , {required:"Description is required."})}
                id="" 
                cols="30" 
                rows="4">
               </textarea>
                    {errors.description && <p className="text-sm text-red-200">{errors.description.message}</p>}
                </div>
            </div>
            <h2>
                Itinerary
            </h2>
            <div className="flex gap-10 mb-5">
                <label htmlFor="type" className="text-white text-lg font-bold w-35">Flight</label>
                <div className="flex gap-10">
                    <div className="flex gap-2">
                        <label htmlFor='one_way' className='cursor-pointer flex items-center'> 
                        <input
                         type="radio"
                         className='w-5 h-5'
                         {...register ("flight")}
                          value={'One-way'}
                           id="one_way" />
                            <span className="text-white text-lg font-medium w-25 ml-2">One-way</span>
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <label htmlFor='roundtrip' className='cursor-pointer flex items-center'> 
                        <input
                         type="radio"
                         className='w-5 h-5'
                         {...register ("flight")}
                          value={'Roundtrip'}
                           id="roundtrip" />
                            <span className="text-white text-lg font-medium w-25 ml-2">Roundtrip</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex gap-10 mb-5 items-start">
                <div className="flex gap-10">
                <label htmlFor="depart_from" className="text-white text-lg font-bold w-35">Depart from*</label>
                <div className="flex flex-col">
                <input 
                type="text"
                 {...register ("depart_location" , {required:"Please enter the depart from."}) }
                  id="depart_from"
                  className=" h-10 w-100 border-none  rounded-sm bg-383838 outline-none px-4" 
                   />
                   {errors.depart_location && <p className="text-sm text-red-200">{errors.depart_location.message}</p>}
                </div>
                </div>
                <div className="flex  gap-2">
                    <label htmlFor="date_from" className="text-white text-lg font-bold w-15">Date</label>
                    <div className="flex flex-col">
                    <input 
                    type="date"
                    {...register ("date_from" , {required:"Enter departure date."})}
                     id='date_from'
                     className=" h-10 w-40 border-none  rounded-sm bg-383838 outline-none px-4" 
                      />
                      {errors.date_from && <p className="text-sm text-red-200">{errors.date_from.message}</p>}
                    
                    </div>
                </div>
            </div>
            <div className="flex gap-10 mb-5 items-start">
                <label htmlFor="destination" className="text-white text-lg font-bold w-35">Destination*</label>
                <div className="flex flex-col">
                <input 
                type="text"
                {...register ("destination" , {required:"Please enter the destination."}) }
                  id="destination"
                  className=" h-10 w-100 border-none  rounded-sm bg-383838 outline-none px-4" 
                   />
                   {errors.destination && <p className="text-sm text-red-200">{errors.destination.message}</p>}
                </div>
                <div className="flex  gap-2">
                    <label htmlFor="date_to" className="text-white text-lg font-bold w-15">Date</label>
                    <div className="flex flex-col">
                    <input type="date" id='date_to'
                     {...register ("date_to" , {required:"Enter return date."}) }
                     className=" h-10 w-40 border-none  rounded-sm bg-383838 outline-none px-4"  />
                     {errors.date_to && <p className="text-sm text-red-200">{errors.date_to.message}</p>}
                    </div>
                </div>
            </div>
            <div className="flex gap-10 items-start mb-5">
                <label htmlFor="budget" className="text-white text-lg font-bold w-35">Budget limit*</label>
                <div className="flex flex-col">

                <input type="number"
                 id='budget'
                 {...register ("budget" , {required:"Please Enter the maximum budget."}) }
                 className=" h-10 w-100 border-none  rounded-sm bg-383838 outline-none px-4" 
                 />
                 {errors.budget && <p className="text-sm text-red-200">{errors.budget.message}</p>}
                </div>
            </div>
            <h3>Accomodation</h3>
            <div className="flex gap-10 mb-5 items-start">
                    <label htmlFor="checkIn" className="text-white text-lg font-bold w-35">Check-in*</label>
                <div className="flex flex-col">
                    <input type="date"  id="checkIn"
                     {...register ("checked_in" , {required:"Please mark checked in."}) }
                     className=" h-10 w-40 border-none  rounded-sm bg-383838 outline-none px-4" 
                    />
                    {errors.checked_in && <p className="text-sm text-red-200">{errors.checked_in.message}</p>}
                </div>
                <div className="flex gap-5 ">
                    <label htmlFor="checkOut" className="text-white text-lg font-bold w-25">Check-out*</label>
                    <div className="flex flex-col">
                    <input type="date"
                      id="checkOut"
                      {...register ("checked_out" , {required:"Please mark checkout."}) }
                      className=" h-10 w-40 border-none  rounded-sm bg-383838 outline-none px-4" 
                      />
                      {errors.checked_out && <p className="text-sm text-red-200">{errors.checked_out.message}</p>}
                    </div>
                </div>
            </div>
            <div className="flex justify-between gap-10">
                <div className="flex gap-10">
                    <label htmlFor="hotel" className="text-white text-lg font-bold w-35">Hotel*</label>
                <div className="flex flex-col ">
                    <input type="text"
                     id="hotel"
                     {...register ("hotel" , {required:"Please enter the hotel Name."}) }
                     className=" h-10 w-100 border-none  rounded-sm bg-383838 outline-none px-4" 
                     />
                     {errors.hotel && <p className="text-sm text-red-200">{errors.hotel.message}</p>}
                </div>
                </div>
                <div className="flex gap-5 items-center">
                <button className="text-white bg-gray-500 py-2 px-5 rounded-sm cursor-pointer">Save draft</button>
                <button className="text-white bg-green-500 py-2 px-5 rounded-sm cursor-pointer" >Save </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default NewTrip