
import { Link } from "react-router-dom"
const AddBadge = ({img, name,to}) => {
  console.log(img)
  return (
    <div className='flex justify-center items-center p-5 rounded-sm bg-gray-600'>
          <Link to={to} className="flex items-center">
        <div className={`circle-icon rounded-full w-5 h-5 ${name}`}>
        <img src={img} alt={name} className="w-4 h-4 invert" />
        </div>
        <span className='text-white font-bold text-lg'>{name}</span>
          
          </Link>
    </div>
  )
}

export default AddBadge