import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';
import Todos from '@/components/Todos';
import { useRouter } from 'next/router';



function Username() {
    const router=useRouter();
    const {username}=router.query;
    return (
        <>
        <Header />
        <div className='flex flex-col w-1/3 mx-auto mt-5'>
            <Todos username={String(username)} />
        </div>
        <Footer />
        </>
    )
}

export default Username;