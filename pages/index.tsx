import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
// import Report from './dashboards/reports'
const inter = Inter({ subsets: ['latin'] })
import Index from './dashboards/home'
export default function Home() {
  return (
    <>
   <div>
    {/* <Report /> */}
    <Index />
   </div>
    </>
  )
}
