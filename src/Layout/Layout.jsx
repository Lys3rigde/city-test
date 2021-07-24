import { Footer } from './Footer';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Main } from './Main';
import './Layout.css'


    export const Layout = () => {
        return (
            <div className='wrapper'>
                <Header/>
                <Sidebar/>
                <Main />
                <Footer/>
            </div>
        )
    }