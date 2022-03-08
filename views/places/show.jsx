const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
            <h4>Not Rated</h4>
            <h2>Description</h2>
            <img src={data.place.pic} alt={data.place.name} className="center" />
            <h4>{data.place.showEstablished()}</h4>
            <h4>Serving {data.place.cuisines}</h4>
            <h4>Located in {data.place.city}, {data.place.state}</h4>
          </main>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            Edit
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form> 
        </Def>
    )
}

module.exports = show