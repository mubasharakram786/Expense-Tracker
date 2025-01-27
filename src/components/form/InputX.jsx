

const InputX = ({className, placeholder, type,label,id,name,value}) => {
  return (
    <div className={className}>
        <label className="text-white font-bold text-lg" htmlFor={id}>{label}</label>
        <input className="rounded-sm border-1 border-solid border-white px-5 bg-gray-200 outline-none" type={type} placeholder={placeholder} id={id} name={name} value={value} />
    </div>
  )
}

export default InputX