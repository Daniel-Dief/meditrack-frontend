import Navbar from "../../templates/Navbar"
import Sidebar from "../../templates/Sidebar"
import Notification from "../../templates/Notifications"
import OverView from "../../templates/OverView"

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="flex justify-between">
                <Sidebar />
                <div className="w-full">
                    <OverView />
                    <Notification />
                </div>
            </div>
        </div>
    )
}