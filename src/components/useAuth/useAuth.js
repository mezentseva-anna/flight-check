import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UseAuth() {
    const history = useHistory();
    const user = useSelector((state) => state.user?.email ? state.user : null);
    
    useEffect(() => {
        if (!!user) {
            history.push('/main');

        } else {
            history.push('/');

        }
    }, [user]);
    return user
}

export default UseAuth;
