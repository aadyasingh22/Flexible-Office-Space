import React from 'react'

const AddSpaces = () => {
  return (
    <div className="addspacebody">
      <div className='container'>
        <div className="row">
          <div className="col-md-4 mx-auto d-flex align-items-center">
            <div className="card">
              <div className="card-body">
                <h1>Adding Handicrafts</h1>
                <form onSubmit={addForm.handleSubmit}>
                  <label className='form-label'>Title</label>
                  <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.title}</span>
                  <input id='title' onChange={addForm.handleChange} value={addForm.values.title} className='form-control mb-3' type="text" />
                  <label className='form-label'>Material</label>
                  <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.material}</span>
                  <input id='material' onChange={addForm.handleChange} value={addForm.values.material} className='form-control mb-3' type="text" />
                  <label className='form-label'>Category</label>
                  <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.category}</span>
                  <input id='category' onChange={addForm.handleChange} value={addForm.values.category} className='form-control mb-3' type="text" />
                  <label className='form-label'>Price</label>
                  <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.price}</span>
                  <input id='price' onChange={addForm.handleChange} value={addForm.values.price} className='form-control mb-3' type="text" />

                  <input type="file" onChange={uploadFile} />

                  <button className="btn btn-primary w-100">Add</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddSpaces