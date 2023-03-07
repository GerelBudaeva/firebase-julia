import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth';
import Navbar from './components/Navbar';
import Chat from './components/Chat';

const style = {
    appContainer: `max-w-[728px] mx-auto text-center`,
    sectionContainer: `flex flex-col h-[90vh] bg-gray-100 at-10 shadow-xl border`
}

function App() {

    const [user] = useAuthState(auth);
    // console.log(user)

    return (
        <div className={style.appContainer}>
            <section className={style.sectionContainer}>
                <Navbar/>
                {user ? <Chat/> : null}
            </section>
        </div>
    );
}

export default App;
