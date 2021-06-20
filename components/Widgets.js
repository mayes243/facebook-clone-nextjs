import { ShareIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'
import Contact from './Contact'

const Contacts = [
    {
        id: '0',
        name: 'Rajendra Kandel',
        profile: '/images/r.jpg'
    },
    {
        id: '1',
        name: 'jeff bezos',
        profile: '/images/profile.jpg'
    },
    {
        id: '2',
        name: 'bill gates',
        profile: '/images/bill.jpg'
    },
    {
        id: '3',
        name: 'soveet regmi',
        profile: '/images/116107137_661053651421565_3694209682836249467_n.jpg'
    },
    {
        id: '4',
        name: 'mahesh babu',
        profile: '/images/mad.jpg'
    },
    {
        id: '5',
        name: 'Rashmika Mandanna',
        profile: '/images/rw.jpg'
    },
    {
        id: '6',
        name: 'Trihattar Bhandari',
        profile: '/images/t.jpg'
    },
]
const Widgets = () => {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5 ">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-9 icon" />
                    <ShareIcon className="h-9 icon" />
                    <DotsHorizontalIcon className="h-9 icon" />
                </div>
            </div>
            {Contacts.map(c => (
                <Contact key={c.id} src={c.profile} name={c.name} />
            ))}
        </div>
    )
}

export default Widgets
