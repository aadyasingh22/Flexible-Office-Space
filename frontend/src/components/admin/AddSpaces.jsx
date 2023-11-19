import { useFormik } from 'formik';
import React from 'react'

const AddSpaces = () => {

    const addForm = useFormik({
        initialValues: {
          title: '',
          description: '',
          area: '',
          cost: '',
          services: '',
          createdat: ''
        },
    
        onSubmit: async (values, { resetForm }) => {
          values.image = selFile;
          console.log(values);
          resetForm();
    
          const res = await fetch('http://localhost:5173/space/add', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-Type': 'application/json'
            }
          });
    
          console.log(res.status);
        //   if (res.status === 200) {
        //     Swal.fire({
        //       icon: 'success',
        //       title: 'Added Successfully',
        //       text: 'A new Product is here!'
        //     });
        //   } else {
        //     Swal.fire({
        //       icon: 'error',
        //       title: 'Error',
        //       text: 'Something went wrong!!'
        //     })
        //   }
    
          // send values to backend
        },
    
        // validationSchema: AddSchema
      });

  return (
    
      <div className='container mx-auto sm:px-4'>
        <div className="flex flex-wrap ">
          <div className="md:w-1/3 pr-4 pl-4 mx-auto flex items-center">
            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
              <div className="flex-auto p-6">
                <h1>Adding Office Spaces</h1>
                <form onSubmit={addForm.handleSubmit}>
                  <label className='form-label'>Title</label>
                  <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.title}</span>
                  <input id='title' onChange={addForm.handleChange} value={addForm.values.title} className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="text" />
                  <label className='form-label'>Description</label>
                  <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.description}</span>
                  <input id='description' onChange={addForm.handleChange} value={addForm.values.description} className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="text" />
                  <label className='form-label'>Area</label>
                  <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.area}</span>
                  <input id='area' onChange={addForm.handleChange} value={addForm.values.area} className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="number" />
                  <label className='form-label'>Cost</label>
                  <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.cost}</span>
                  <input id='cost' onChange={addForm.handleChange} value={addForm.values.cost} className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="number" />
                  <label className='form-label'>Services</label>
                  <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.services}</span>
                  <input id='services' onChange={addForm.handleChange} value={addForm.values.services} className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="text" />
                  <label className='form-label'>Created At</label>
                  <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.createdat}</span>
                  <input id='createdat' onChange={addForm.handleChange} value={addForm.values.createdat} className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="date" />

                  {/* <input type="file" onChange={uploadFile} /> */}

                  <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 w-full">Add</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default AddSpaces