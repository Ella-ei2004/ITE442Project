 // Shared auth functions
      function getUsers(){ return JSON.parse(localStorage.getItem('bts_users')||'[]') }
      function saveUser(u){ const users=getUsers(); users.push(u); localStorage.setItem('bts_users', JSON.stringify(users)) }
      function findUserByEmail(email){ return getUsers().find(x=>x.email===email) }

      function setLoggedIn(email){ localStorage.setItem('bts_loggedIn', email); updateAuthUI() }
      function logout(){ localStorage.removeItem('bts_loggedIn'); updateAuthUI() }
      function updateAuthUI(){ 
        const email=localStorage.getItem('bts_loggedIn') 
        const welcome=document.getElementById('welcomeText') 
        const loginBtn=document.getElementById('loginBtn') 
        const logoutBtn=document.getElementById('logoutBtn') 
        if(email){ const u=findUserByEmail(email) 
          welcome.textContent = 'Welcome, ' + (u?u.username:email) 
          welcome.style.display='inline-block' 
          loginBtn.style.display='none' 
          logoutBtn.style.display='inline-block'
        } 
        else { 
          welcome.style.display='none' 
          loginBtn.style.display='inline-block' 
          logoutBtn.style.display='none' 
        }
      }

document.getElementById('logoutBtn').addEventListener('click', function () {
    logout(); alert('Logged out')
    window.location.href = 'index.html'
})
      updateAuthUI()

      // Featured concerts data
      const featured = [
        {id:1, city:"Seoul", venue:"Jamsil Olympic Stadium", date:"2025-10-03T19:00:00", price:120, img:"img/img1.jpg", popular:true},
        {id:2, city:"Tokyo", venue:"Tokyo Dome", date:"2025-10-12T18:30:00", price:135, img:"img/img2.jpg", popular:true},
        {id:3, city:"Los Angeles", venue:"SoFi Stadium", date:"2025-11-02T19:30:00", price:149, img:"img/img3.jpg", popular:true},
        {id:4, city:"Bangkok", venue:"Rajamangala Stadium", date:"2025-11-15T19:00:00", price:99, img:"img/img4.jpg", popular:true},
        {id:5, city:"London", venue:"Wembley Stadium", date:"2025-12-05T19:30:00", price:140, img:"img/img5.jpg"},
        {id:6, city:"New York", venue:"MetLife Stadium", date:"2025-12-12T19:30:00", price:142, img:"img/img6.webp"},
        {id:7, city:"Singapore", venue:"National Stadium", date:"2026-01-10T19:00:00", price:110, img:"img/img7.jpg"},
        {id:8, city:"Sydney", venue:"Accor Stadium", date:"2026-01-25T19:00:00", price:115, img:"img/img8.jpg"}
      ]

       const container = document.getElementById('featuredConcerts')
      // Show only the first 3 concerts
      featured.slice(0, 3).forEach(c => {
        const div = document.createElement('div')
        div.className = 'col-md-4 mb-4'
        div.innerHTML = `
          <div class="card card-ticket glass h-100">
            <img src="${c.img}" class="card-img-top" alt="${c.city}">
            <div class="card-body">
              <h5 class="card-title">${c.city} — ${c.venue}</h5>
              <p class="card-text text-white-50">${new Date(c.date).toLocaleDateString()} • ${c.time}</p>
              <a href="concert-details.html?id=${c.id}" class="btn btn-sm accent-btn">Details</a>
            </div>
          </div>`
        container.appendChild(div)
      })

      // Create "See More" button
      const seeMoreDiv = document.createElement('div')
      seeMoreDiv.className = 'col-12 d-flex justify-content-center mt-3' // center + spacing
      seeMoreDiv.innerHTML = `
        <a href="concerts.html" class="btn btn-lg accent-btn">See More &rarr;</a>
      `
      container.appendChild(seeMoreDiv)
/*---------------End of index.html CSS------------------*/


