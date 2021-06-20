import StoryCard from "./StoryCard"

const stories = [
    {
        id: '0',
        name: 'Ma Ýes',
        story: '/images/men1.jpg',
        profile: '/images/men.jpg'
    },
    {
        id: '1',
        name: 'jeff bezos',
        story: '/images/mobile.jpg',
        profile: '/images/profile.jpg'
    },
    {
        id: '2',
        name: 'bill gates',
        story: '/images/mi.jpg',
        profile: '/images/bill.jpg'
    },
    {
        id: '3',
        name: 'allu arjun',
        story: '/images/d.jpg',
        profile: '/images/download.jpg'
    },
    // {
    //     id: '4',
    //     name: 'mahesh babu',
    //     story: '/images/m.jpg',
    //     profile: '/images/ma.jpg'
    // },
    {
        id: '5',
        name: 'Lili Reinhart',
        story: '/images/ll.jpg',
        profile: '/images/Lil.png'
    },
]

const Stories = () => {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((s) => (
                <StoryCard key={s.id} name={s.name} story={s.story} profile={s.profile} />
            ))}
        </div>
    )
}

export default Stories
