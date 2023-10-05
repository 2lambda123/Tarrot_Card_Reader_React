import React from 'react'
import Header from '../Components/Nav/Header'
import { Container } from 'react-bootstrap'
import Footer from '../Components/Footer/Footer'

function About() {
  return (
    <Container fluid className='bg-dark cover '>
        <Header/>
        <div className='bg-dark bg-size  p-5 m-5'>
        <h2 className='text-white text-center'>Tarrot Reading</h2>
        <p className='text-white test-wrap  p-5'>Tarot cards are fascinating, aren't they? They've been around for centuries, and people have used them for various purposes. Originally, tarot cards were playing cards in the 15th century Europe, but they later evolved into a tool for divination and self-reflection.

    A standard tarot deck consists of 78 cards, divided into the Major Arcana and Minor Arcana. The Major Arcana represents significant life events and spiritual lessons, while the Minor Arcana deals with day-to-day matters. Each card has its own symbolism, and the way they are laid out in a reading can provide insights into different aspects of life.
    
    People use tarot cards for gaining insights, seeking guidance, or simply as a tool for self-reflection. While some see it as a form of mystical divination, others view it more as a psychological tool to tap into one's subconscious thoughts and feelings.
    
    Have you ever had a tarot reading or thought about trying one?
    
    
    
    
    </p>
    </div>
    <Footer/>
    </Container>
  )
}

export default About