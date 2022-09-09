import Header from '../components/Header'
import Chat from '../components/Chat'
import Member from '../components/Member'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Header />
      <div className="flex gap-4">
        <Member />
        <Chat />
      </div>
      <Footer />
    </div>
  )
}

export default Home
