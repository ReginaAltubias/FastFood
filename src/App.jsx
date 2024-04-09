import { useState } from 'react'
import { VscMenu } from "react-icons/vsc";
import image from './assets/Components/Images/hamburguer.png'
import './App.css'

function App() {
  

  return (
    <>
      <div className='body'>
      <div className='central'>
          <header>
            <h1>Fast Food</h1>
            <button className="Menu"><VscMenu /></button>
          </header>
          <main  class="row">
            <section>
              <article>
                <div class="col-1 ">
                 <div className='one'>
                    <span className='borderleft'></span>
                      <div className='anucio'>
                        <h3>AMAZING<br />BURGER</h3>
                        <h5>AT LOW PRICE</h5>
                      </div> 
                 </div>
                
                  <div className='two'>
                    <span >Get the best of your take away <br /> food whith a low budget</span>
                    <div className='bottons'>
                      <button className='view'>View menu</button>
                      <button className='book'>Book a table</button>
                    </div>
                  </div>
                  
                </div>
                  

                <div class="col-2">
                  <div className='image'>
                     <img src={image} alt="" />
                  </div>
                </div>
              </article>
            </section>
          </main>
          <footer>
            <span>
              <p className='title'>Breakfast</p>
              <p>6 Am to 11 Am</p>
            </span>
            <span>
              <p className='title'>Lunch</p>
              <p>12 Pm to 2 Pm</p>
            </span>
            <span>
              <p className='title'>Dinner</p>
              <p>6 Pm to 10 Am</p>
            </span>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
