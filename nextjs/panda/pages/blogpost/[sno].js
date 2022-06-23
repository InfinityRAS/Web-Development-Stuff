import { useRouter } from 'next/router';

const Post = () => {
    const router = useRouter();
    const { sno } = router.query;

    return <p>your post is :{sno}</p>
}

export default Post;