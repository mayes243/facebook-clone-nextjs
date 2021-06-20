import Image from 'next/image'
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, PlusCircleIcon, PlusIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid'
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon'

const Header = () => {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* Left start */}
            <div className="flex items-center">
                <Image src="/images/FacebookLogo.png" width={40} height={40} layout="fixed" />

                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">

                    <SearchIcon className="h-6 text-gray-600" />
                    <input className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search Facebook" />

                </div>
            </div>


            {/* End Left */}

            {/* Center start */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    

                    <HeaderIcon Icon={PlayIcon} />

                    <HeaderIcon Icon={FlagIcon} />
                
                    <HeaderIcon Icon={ShoppingCartIcon} />

                    <HeaderIcon Icon={UserGroupIcon} />
                </div>

            </div>
            {/* End Center */}

            {/* Right start */}
            <div className="flex items-center sm:space-x-2 justify-end">
                <Image src="/images/men.jpg" title="Ma Ýes" height={36} width={36} className="rounded-full" />

                <p className="whitespace-nowrap p-3 font-bold">Ma Ýes</p>

                <PlusIcon className="icon" />
                <ViewGridIcon className="icon" />

                <ChatIcon className="icon" />
                <BellIcon className="icon" />

                <ChevronDownIcon className="icon" />
            </div>
            {/* End Right */}

        </div>
    )
}

export default Header
