import "./sidebar.css"

import { Link } from "react-router-dom";
import Dash from '../icons/dashboard.svg'
import Trans from '../icons/transactions.svg'
import Schedule from '../icons/schedules.svg'
import Users2 from '../icons/users.svg'
import Settings from '../icons/settings.svg'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Board.</h3>
                    <ul className="sidebarlist">
                        <Link to="/" className="link" >
                        <li className="sidebarlistitem">
                           <img src={Dash} className="sidebaricon" alt="" />
                            
                            <span className="iconText">Dashboard</span>
                        </li>
                        </Link>
                        <li className="sidebarlistitem">
                             <img src={Trans} className="sidebaricon" alt="" />
                           <span className="iconText">Transactions</span>
                        </li>
                        <li className="sidebarlistitem">
                             <img src={Schedule} className="sidebaricon" alt="" />
                             <span className="iconText">Schedules</span>
                            
                        </li>
                        <li className="sidebarlistitem">
                            <img src={Users2} className="sidebaricon" alt="" />
                            <span className="iconText">Users</span>
                            
                        </li>
                        <li className="sidebarlistitem">
                             <img src={Settings} className="sidebaricon" alt="" />
                             <span className="iconText">Settings</span>
                            
                        </li>
                    </ul>
                </div>
                <div className="sidebar-bottom">
                    <div className="top">
                        
                        Help
                    </div>
                    <div className=" bottom">
                        
                        Contact Us
                    </div>

                </div>
            </div>
        </div>
    )
}
