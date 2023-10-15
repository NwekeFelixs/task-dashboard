import React from 'react'
import Footer from './fragments/Footer'
import './css/style.css'
import Task from './fragments/Task'
import Project from './fragments/Project'
import Hero from './fragments/Hero'
import Header from './fragments/Header'

function Home() {
  return (
    <div>
      <Header/>
      <main>
        <article className="container article">
            <h2 class="h2 article-title">Hi Felix</h2>

            <p class="article-subtitle">Welcome to Dashboard!</p>
            <Hero/>
            <Project/>
            <Task/>
        </article>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
