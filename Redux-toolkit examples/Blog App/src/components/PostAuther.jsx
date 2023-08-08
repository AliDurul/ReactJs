import { selectAllUsers } from '../features/users/userSlice';
import { useSelector } from 'react-redux';

const PostAuther = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId);

    return <span>by {author ? author.name : 'Unknown author'}</span>
}

export default PostAuther