import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { db, storage } from '../firebase'
import firebase from 'firebase/app';

const InputBox = () => {
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    const [imagePost, setImagePost] = useState(null)

    const sendPost = (e) => {
        e.preventDefault();

        if (!inputRef.current.value) return;

        db.collection('tbl_post').add({

            message: inputRef.current.value,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()

        }).then(doc => {
            if (imagePost) {
                // upload
                const uploadTask = storage.ref(`tbl_post/${doc.id}`).putString(imagePost, 'data_url')

                removeImage();

                uploadTask.on("state_change", null, error => console.error(error), () => {

                    // when the upload complete
                    storage.ref(`tbl_post`).child(doc.id).getDownloadURL().then(url => {

                        db.collection('tbl_post').doc(doc.id).set({
                            postImage: url
                        }, { merge: true })

                    })
                }
                )
            }
        })
        inputRef.current.value = ''
    }

    const AddImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setImagePost(readerEvent.target.result)
        }
    }
    const removeImage = () => {
        setImagePost(null)
    }


    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">

                {/* <Image src="/images/men.jpg" title="Ma Ýes" height={40} width={40} className="rounded-full" layout="fixed" /> */}
                <form className="flex flex-1" >

                    <input className="rounded-full bg-gray-100 h-12 flex-grow px-5 focus:outline-none hover:cursor-pointer" ref={inputRef} type="text" placeholder="What's On Your mind Ma Ýes ?" />
                    <button hidden type="submit" onClick={sendPost}>
                        submit
                    </button>

                </form>
                <Image src="/images/men.jpg" title="Ma Ýes" height={40} width={40} className="rounded-full" layout="fixed" />

                {imagePost && (
                    <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
                        <img className="h-10 object-contained" src={imagePost} alt="" />
                        <p className="text-xs text-red-500 text-center">Remove</p>
                    </div>
                )}
            </div>
            <hr className="border-1" />
            <div className="flex justify-evenly p-3 text-transform: capitalize">

                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500" />

                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>

                <div className="inputIcon" onClick={() => filePickerRef.current.click()}>
                    <CameraIcon className="h-7 text-green-400" />
                    <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                    <input ref={filePickerRef} type='file' hidden onChange={AddImageToPost} />
                </div>

                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300" />
                    <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>

            </div>
        </div>
    )
}

export default InputBox
