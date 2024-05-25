import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';

const AddSchema = Yup.object().shape({
  date: Yup.date()
    .required('Required'), 
  duration: Yup.string()
    .required('Required')
});

const BookingPage = () => {


  const { id } = useParams();
  const [officeData, setOfficeData] = useState(null);

  const [selFile, setSelFile] = useState('');
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const addForm = useFormik({
    initialValues: {
      user: currentUser._id,
      space: id,
      date: '',
      duration: '',
    },

    onSubmit: async (values, { resetForm }) => {
      values.image = selFile;
      console.log(values);
      resetForm();

      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/booking/add`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);
      if (res.status === 200) {
        enqueueSnackbar('Space Booked Successfully', {
          variant: 'success',
          anchorOrigin: {
            horizontal: 'center',
            vertical: 'top'
          }
        })
      } else {
        enqueueSnackbar('Something went wrong', {
          variant: 'error',
          anchorOrigin: {
            horizontal: 'center',
            vertical: 'top'
          }
        })
      }

      // send values to backend
    },

    validationSchema: AddSchema
  });


  const fetchData = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/space/getbyid/` + id);
    const data = await res.json();
    console.log(data);
    setOfficeData(data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const displayOffice = () => {
    if (officeData !== null) {
      return <div className='flex justify-center my-10'>

        <div className="max-w-screen-md p-6 bg-white border border-gray-200 rounded-lg shadow">
          <span className='text-4xl  font-medium'>Booking Office Spaces</span>
          <div>
            <img className='max-w-full h-auto' src={`${import.meta.env.VITE_BACKEND_URL}/` + officeData.image} alt="" />
            <h2>{officeData.title}</h2>
          </div>
          {/* <h1>{officeData.user}</h1> */}
          {/* <h1>{officeData.space}</h1> */}
          <form onSubmit={addForm.handleSubmit}>
            <label className='form-label'>Date</label>
            <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.date}</span>
            <input id='title' onChange={addForm.handleChange} value={addForm.values.date} className='block appearance-none w-full py-1 px-2 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="date" />
            <label className='form-label'>Duration</label>
            <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.duration}</span>
            <input id='title' onChange={addForm.handleChange} value={addForm.values.duration} className='block appearance-none w-full py-1 px-2 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="text" />

            <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 w-1/2">Confirm Booking</button>
          </form>

        </div>
      </div>
    } else {
      return <h1>Loading...</h1>
    }
  }

  return (
    <div>
      {displayOffice()}
    </div>
  )

}

export default BookingPage;