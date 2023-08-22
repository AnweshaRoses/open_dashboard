
import Chart from "../../components/charts/Chart"
import Featured from "../../components/featured/Featured"
import "./home.css"
import { userData } from "../../dummyData"
import Widgetsm from "../../components/widgetsm/Widgetsm"
import Widgetlg from "../../components/widgetlg/Widgetlg"


export default function Home() {
    return (
        <>
        
        <div className="home">
            <Featured/>
            <Chart data={userData} title="Activities" grid dataKey="sale"/>
            <div className="homeWidgets">
                <Widgetlg/>
 
                <Widgetsm/>
            </div>
        </div>
        </>
    )
}
