import "./featured.css"
// import {ArrowUpward,ArrowDownward}from '@material-ui/icons'; 
import Likes from '../icons/likes.svg'
import Camera from '../icons/revenue.svg'
import Tag from '../icons/transactions2.svg'
import User from '../icons/users2.svg'
import Topbar from "../Dashboard/Topbar"
export default function Featured() {
    return (
        <>
        <Topbar/>
        <div className='featured' >
            <div className="featureditem revanue">
                <img className="icon" src={Camera} alt="" />
                <div className="featuredtitle"> Total Revanue</div>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$2,129,430</span>
  
                </div>
            </div>
            <div className="featureditem sales">
            <img className="icon" src={Tag} alt="" />
                <span className="featuredtitle">Total Transactions</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">1,520</span>
                   
                </div>

            </div>
            <div className="featureditem likes">
            <img className="icon" src={Likes} alt="" />
                <span className="featuredtitle"> Total Likes</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">9,721</span>

                </div>

            </div>
            <div className="featureditem users">
            <img className="icon" src={User} alt="" />
                <span className="featuredtitle">Total Users</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">892</span>
                    
                </div>

            </div>
        </div>
        </>
    )
}
