import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='expense-sidebar py-5 px-5
    '>
        <div className="flex justify-center items-center flex-col">
            <div className="user-img mb-3">
                  <img src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=" className='rounded-full w-25 h-25' alt="profile" />
            </div>
            <h1 className='text-white font-bold text-lg'>Janice Chandler</h1>
        </div>
        <ul>
            <li>
              <Link to="/" className='flex align-center p-3 rounded-sm'>
                {/* <IconHome2/> */}
                <span className='text-white font-medium text-lg'>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/expenses" className='flex align-center p-3 rounded-sm'>
                {/* <IconCalendarDollar/> */}
                <span className='text-white font-medium text-lg'>Expenses</span>
              </Link>
            </li>
            <li>
              <Link to="/trips" className='flex align-center p-3 rounded-sm'>
                {/* <IconPlaneDeparture /> */}
                <span className='text-white font-medium text-lg'>Trips</span>
              </Link>
            </li>
            <li>
              <Link to="/approvals" className='flex align-center p-3 rounded-sm'>
                {/* <IconCopyCheck /> */}
                <span className='text-white font-medium text-lg'>Approvals</span>
              </Link>
            </li>
            <li>
              <Link to="/settings" className='flex align-center p-3 rounded-sm'>
                {/* <IconAdjustmentsCog /> */}
                <span className='text-white font-medium text-lg'>Settings</span>
              </Link>
            </li>
            <li>
              <Link to="/support" className='flex align-center p-3 rounded-sm'>
                {/* <IconLifebuoy /> */}
                <span className='text-white font-medium text-lg'>Support</span>
              </Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar