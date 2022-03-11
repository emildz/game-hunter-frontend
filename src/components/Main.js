import { Card } from "antd"
import './main.css'


export default function Main(){
    return (
        <>
        <div className="main">
            <Card className="card" title="Team Superman" bordered={false} style={{ width: 300 }}>
                <p>Location: Delray Beach</p>
                <p>Time: 8:30am</p>
                <p>Date: 03/15/2022</p>
                <p>Number of Players: 14</p>
            </Card>
            <Card className="card" title="Team Batman" bordered={false} style={{ width: 300 }}>
                <p>Location: Miami</p>
                <p>Time: 2:00pm </p>
                <p>Date: 03/20/22</p>
                <p>Number of Players: 12</p>
            </Card>
            <Card className="card" title="Team Boca Code" bordered={false} style={{ width: 300 }}>
            <p>Location: Boca Raton</p>
                <p>Time: 6:00pm </p>
                <p>Date: 03/25/22</p>
                <p>Number of Players: 16</p>
            </Card>
            </div>
        </>
    )
}