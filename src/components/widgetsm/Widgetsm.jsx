
import "./widgetsm.css";
export default function Widgetsm() {
    return (
        <div className="widgetsm">
            <div className="top-elements">
            <div className="widgetsmtitle">Today's Schedule</div>
            <div className="date">See All <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path d="M11.646 8.646a.5.5 0 0 0 0-.708L8.293 4.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414L9.586 8 6.879 10.707a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0l3.353-3.353a.5.5 0 0 0 0-.708z"/>
</svg>


 </div>
            </div>

            <div className="elements">

            <ul className="widgetsmlist">
                <li className="widgetsmlistitem green-border">
                <div className="widgetsmuser">
                Metting with suppliers from Kuta Bali
                    .
                    </div>
                    <div className="widgetsmuser">
                        14:00-15:00
                    </div>
                    <div className="widgetsmuser">
                    At sunset Road
                    </div>
                </li>

            </ul>
            </div>
            <div className="elements">
            <ul className="widgetsmlist">
                <li className="widgetsmlistitem purple-border ">
                <div className="widgetsmuser">
                Check Operation at Giga Factory 1
                    </div>
                    <div className="widgetsmuser">
                        18:00-20:00
                    </div>
                    <div className="widgetsmuser">
                    At Central Jakarta
                    </div>
                </li>

            </ul>
            </div>

        </div>
    )
}
