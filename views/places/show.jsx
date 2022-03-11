const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div key={c.content} className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
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
      <div className="row">
          <h2>Comments</h2>
          <a href={`/places/${data.place.id}/comment`} className="btn btn-warning"> 
              Add a comment
          </a> 
          {comments}
      </div>
    </Def>
  )
}

module.exports = show