import React from 'react'


function Header(props) {
  return (
    <header>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <a className="navbar-brand" href='/'>Anime Catalog</a>
          </div>
          <div class="col-6">
            <div className="navBarCenter">
              <a href='/' target="_blank" rel="noreferrer">Home</a>
              <a href='/About' target="_blank" rel="noreferrer">About</a>
            </div>
          </div>

          <div class="col">
            <form 
              className="d-flex"
              role="search"
              onSubmit={props.handleSearch}>
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search"
                required
                value={props.search}
                onChange={e => props.SetSearch(e.target.value)} />

              <button className="btn btn-outline-success" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header