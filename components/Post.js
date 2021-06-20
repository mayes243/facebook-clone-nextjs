import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import Posts from './Posts'

const Post = () => {

    const [realtimePost] = useCollection(
        db.collection('tbl_post').orderBy('timeStamp', 'desc')
    );
    return (
        <div>
            {realtimePost?.docs.map((p) => (
                <Posts key={p.id} message={p.data().message} timeStamp={p.data().timeStamp} postImage={p.data().postImage} />
            ))}
        </div>
    )
}

export default Post
