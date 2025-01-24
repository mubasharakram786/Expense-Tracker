import { Link } from 'react-router-dom';
import { IconHome2,IconCalendarDollar,IconCopyCheck,IconPlaneDeparture,IconAdjustmentsCog,IconLifebuoy     } from '@tabler/icons-react';

const Sidebar = () => {
  return (
    <div className='expense-sidebar'>
        <div className="user-info">
            <div className="user-img">
                
            </div>
            <h1>Janice Chandler</h1>
        </div>
        <ul>
            <li>
              <Link to="/">
                <IconHome2/>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/expenses">
                <IconCalendarDollar/>
                <span>Expenses</span>
              </Link>
            </li>
            <li>
              <Link to="/trips">
                <IconPlaneDeparture />
                <span>Trips</span>
              </Link>
            </li>
            <li>
              <Link to="/approvals">
                <IconCopyCheck />
                <span>Approvals</span>
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <IconAdjustmentsCog />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <Link to="/support">
                <IconLifebuoy />
                <span>Support</span>
              </Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar