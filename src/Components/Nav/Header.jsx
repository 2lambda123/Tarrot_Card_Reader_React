import React from 'react'

function Header() {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid ">
      <a class="navbar-brand" href="#">Tarrot Universe</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav align-tems-center">
       
          <li class="nav-item">
            <a class="nav-link text-white" href="/home" >Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link  text-white" href="/about" >About</a>
          </li>
        
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Header