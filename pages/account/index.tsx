import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'



import Header from '@/components/Header';
import Todos from '@/components/Todos';
import Footer from '@/components/Footer';



export default function Index() {
  
  return (
    <>
      <Header />
      <div className='flex flex-col w-1/3 mx-auto mt-5'>
        <Todos username="" />
      </div>
      <Footer />
    </>
  )
}
