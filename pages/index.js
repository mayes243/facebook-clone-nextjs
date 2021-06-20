import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

export default function Home() {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      {/* header */}
      <Header />

      {/* Sidebar */}
      <main className="flex">
        <Sidebar />
        {/* Feed */}
        <Feed />

        {/* widgets */}
        <Widgets />
      </main>
    </div>
  )
}
