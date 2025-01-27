import AddBadge from "../components/ui/AddBadge"
import { ExpenseIcon, ReceiptIcon, ReportIcon, TripIcon } from "../svgs"
const Home = () => {
  const Tasks = [
    {
      id:1,
      name:'New expense',
      img:ExpenseIcon,
      to:'new-expense'
    },
    {
      id:2,
      name:'Add receipt',
      img:ReceiptIcon,
      to:'add-receipt'
    },
    {
      id:3,
      name:'Create report',
      img:ReportIcon,
      to:'create-report'
    },
    {
      id:4,
      name:'Create trip',
      img:TripIcon,
      to:'create-trip'
    },
  ]
  return (
    <>
    
    <div className='card border-1 border-white rounded-sm border-solid'>
      <div className="py-2 px-4 border-b border-white">
        <h2 className="text-white font-bold text-lg">Quick Access</h2>
      </div>
      <div className="card-body flex justify-between px-20 py-5">
        {Tasks.map((task) => (
          <AddBadge key={task.id} img={task.img} name={task.name} to={task.to} />
        ))}
      </div>
    </div>
    
    </>
  )
}

export default Home