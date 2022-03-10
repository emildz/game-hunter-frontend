import { Card } from "antd"
import './main.css'


export default function Main(){
    return (
        <>
        <div className="main">
            <Card className="card" title="Card title" bordered={false} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Card className="card" title="Card title" bordered={false} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Card className="card" title="Card title" bordered={false} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            </div>
        </>
    )
}