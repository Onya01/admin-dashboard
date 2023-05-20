import './sidebar.css';
import LineStyle from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUp from '@mui/icons-material/TrendingUp';
import PermIdentity from '@mui/icons-material/PermIdentity';
import Storefront from '@mui/icons-material/Storefront';
import MailOutline from '@mui/icons-material/MailOutline';
import DynamicFeed from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline';
import WorkOutline from '@mui/icons-material/WorkOutline';
import Timeline from '@mui/icons-material/Timeline';
import Report from '@mui/icons-material/Report';
import Paid from '@mui/icons-material/Paid';
import Leaderboard from '@mui/icons-material/Leaderboard';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to='/' className='link'>
                            <li className="sidebarListItem active">
                            <LineStyle className='sidebarIcon'/>
                            Home
                            </li>
                        </Link>

                        <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                        </li>

                        <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebaeTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className='link'>
                            <li className="sidebarListItem">
                            <PermIdentity className='sidebarIcon'/>
                            Users
                            </li>
                        </Link>
                        <Link to="/products" className='link'>
                            <li className="sidebarListItem">
                            <Storefront className='sidebarIcon'/>
                            Products
                            </li>
                        </Link>

                        <li className="sidebarListItem">
                        <Paid className='sidebarIcon'/>
                        Transactions
                        </li>

                        <li className="sidebarListItem">
                        <Leaderboard className='sidebarIcon'/>
                        Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebaeTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <MailOutline className='sidebarIcon'/>
                        Mail
                        </li>

                        <li className="sidebarListItem">
                        <DynamicFeed className='sidebarIcon'/>
                        Feedback
                        </li>

                        <li className="sidebarListItem">
                        <ChatBubbleOutline className='sidebarIcon'/>
                        Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebaeTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <WorkOutline className='sidebarIcon'/>
                        Manage
                        </li>

                        <li className="sidebarListItem">
                        <TimelineIcon className='sidebarIcon'/>
                        Analytics
                        </li>

                        <li className="sidebarListItem">
                        <Report className='sidebarIcon'/>
                        Reports
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
}
 
export default Sidebar;