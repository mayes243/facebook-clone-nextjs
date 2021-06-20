// /images/men.jpg
import { ChevronDownIcon, ShoppingCartIcon, UserGroupIcon } from '@heroicons/react/outline'
import { BookmarkIcon, CalendarIcon, ClockIcon, DesktopComputerIcon, UserIcon } from '@heroicons/react/solid'
import SidebarRow from './SidebarRow'


const Sidebar = () => {
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px] text-transform: capitalize">
            <SidebarRow src="/images/men.jpg" title="Ma Ýes" />

            <SidebarRow Icon={UserIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />

            <SidebarRow Icon={ShoppingCartIcon} title="Marketplace" />
            <SidebarRow Icon={DesktopComputerIcon} title="Watch" />

            <SidebarRow Icon={CalendarIcon} title="Events" />
            <SidebarRow Icon={ClockIcon} title="Memories" />

            <SidebarRow Icon={BookmarkIcon} title="saved" />
            <SidebarRow Icon={ChevronDownIcon} title="See More..." />

            <hr />
            <div className="flex">
                <p className="p-4 font-bold">Your Shortcuts</p>
                {/* <a href="" className="p-4">edit</a> */}
            </div>
        </div>
    )
}

export default Sidebar
