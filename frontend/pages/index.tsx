import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookCard from '../components/BookCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>Futuristic Library</title>
        <meta name="description" content="AI-powered futuristic library portal" />
      </Head>
      <Header />
      <main className="px-6 py-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Welcome to the Futuristic Library</h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BookCard title="AI in Libraries" author="Jane Doe" available />
          <BookCard title="Digital Cataloging" author="John Smith" available={false} />
          <BookCard title="Library Automation" author="Emily Clark" available />
        </section>
      </main>
      <Footer />
    </>
  )
}