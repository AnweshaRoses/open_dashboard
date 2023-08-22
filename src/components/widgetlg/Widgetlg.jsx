import { Piechart } from "../pie/Piechart"
import "./widgetlg.css"

export default function Widgetlg() {

    return (
        <div className="widgetlg">
            <div className="top-lg">
                <div className="widgetlgtitle">Top Products</div>
                <div className="date">May- June 2021 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                    <path d="M6 9.5L2.354 5.854a.5.5 0 0 1 .708-.708L6 8.793l3.938-3.647a.5.5 0 0 1 .707.708L6 9.5z" />
                </svg>


                </div>
            </div>


            <div className="division">
                <Piechart />
            </div>

        </div>
    )
}

