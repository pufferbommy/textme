import Header from '../components/Header'
import ChatBox from '../components/ChatBox'
import MemberBox from '../components/MemberBox'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Header />
      <main className="flex flex-col sm:flex-row gap-6 h-[calc(100vh-64px-52px)] pt-0 sm:pt-10">
        <MemberBox />
        <ChatBox />
      </main>
      <Footer />
    </div>
  )
}

export default Home
