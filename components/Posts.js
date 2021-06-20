import Image from 'next/image';
import { ShareIcon, ThumbUpIcon, ChatAltIcon } from '@heroicons/react/outline'

const Posts = ({ message, timeStamp, postImage }) => {
    return (
        <div className="flex flex-col">
            <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-xl-400">

                <div className="flex items-center space-x-2">

                    <Image src="/images/men.jpg" title="Ma Ýes" height={40} width={40} className="rounded-full" />

                    <div>
                        <p className="font-medium">Ma Ýes</p>
                        <p className="text-xs text-gray-400">{new Date(timeStamp?.toDate()).toLocaleString()}</p>
                    </div>

                </div>
                <p className="pt-4">{message}</p>
            </div>
            {postImage && (
                <div className="relative h-56 md:h-96 bg-white">
                    <Image src={postImage} className="" objectFit="cover" layout="fill" />
                </div>
            )}
            {/* like comment share button */}
            <div className="flex items-center justify-between rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
                <div className="inputIcon rounded-none rounded-bl-2xl">
                    <ThumbUpIcon className="h-4" />
                    <p className="text-xs sm:text-base">Like 121</p>
                </div>
                <div className="inputIcon rounded-none">
                    <ChatAltIcon className="h-4" />
                    <p className="text-xs sm:text-base">Comment 64</p>
                </div>
                <div className="inputIcon rounded-none rounded-br-2xl">
                    <ShareIcon className="h-4" />
                    <p className="text-xs sm:text-base">Share 13</p>
                </div>
            </div>
        </div>
    )
}

export default Posts
