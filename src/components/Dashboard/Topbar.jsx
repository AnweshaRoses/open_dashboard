import React from 'react'
import "./topbar.css"
import Notification from "../icons/notification.svg"
import Search from "../icons/search.svg"
import Profile from "../icons/person.svg"

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarwrapper">
                <div className="topleft">
                    <span className='logo'>Dashboard</span>
                </div>
                <div className="topright">
                    <div className="topbariconcontainer">
                    <input className="search-input" type="text" placeholder="Search..." name="search" />
                            <button className="search-button" type="submit">
                        <img src={Search} alt="" />
                        </button>
                    </div>

                    <div className="topbariconcontainer">
                    <img src={Notification} alt="" />

                    </div>
                    <img src={Profile} alt="" className="topavatar" />
                </div>
            </div>
        </div>
    )
}
