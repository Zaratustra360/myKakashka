import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import TopButton from "@/components/TopButton";
import {TodoList} from "@/components/TodoList";
import {TotalTodo} from "@/components/TotalTodo";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <>
      <div style={{'width': '50%',
                  'margin': '0 auto',
                    'display': 'flex',
    'justify-content': 'center'}}>
        <TopButton>All</TopButton>
        <TopButton>Not completed</TopButton>
        <TopButton>Completed</TopButton>
    </div>
      <TodoList />
  <TotalTodo />
  </>



}
