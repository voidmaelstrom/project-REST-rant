const React = require('react')
const Def = require('../default')

function new_comment (data) {
  console.log(data)
    return (
        <Def>
          <main>
            <h1>Add a New Comment</h1>
            <form method="POST" action={`/places/${data.id}/comment`}>
            <div className="row">
                <div className="form-group col-sm-6">
                  <label htmlFor="author">Author</label>
                  <input className="form-control" id="author" name="author" type="text" required />
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="content">Comment</label>
                  <textarea className="form-control" id="content" name="content" required />
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="stars">Star Rating</label>
                  <input className="form-control" id="stars" name="stars" type="number" step="0.5" />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="rant">Rant </label>
                    <input type="checkbox" id="rant" name="rant" />
                </div>
              </div>
              <input className="btn btn-primary" type="submit" value="Add Comment"/>
            </form>
          </main>
        </Def>
    )
}

module.exports = new_comment