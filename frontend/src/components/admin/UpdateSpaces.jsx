import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateSpaces = () => {

    const { id } = useParams();
    const [spaceData, setSpaceData] = useState(null);
    const navigate = useNavigate();

    const fetchSpaceData = async () => {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/space/getbyid/` + id);
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setSpaceData(data)
    }

    useEffect(() => {
        fetchSpaceData()
    }, []);

    const submitForm = async (values) => {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/space/update/` + id, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(res.status);
        if (res.status === 200) {
            enqueueSnackbar('Space Updated successfully', {
                variant: 'success',
                anchorOrigin: {
                    horizontal: 'center',
                    vertical: 'top'
                }
            })
            navigate('/managespaces')
        }
        console.log(values);
    }

    const uploadFile = (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        setSelFile(file.name);
        fd.append("myfile", file);
        fetch(`${import.meta.env.VITE_BACKEND_URL}/util/uploadfile`, {
            method: "POST",
            body: fd,
        }).then((res) => {
            if (res.status === 200) {
                console.log("file uploaded");
            }
        });
    };

    return (
        <div className='flex justify-center my-20'>
            <div className='container mx-auto sm:px-4'>
                <div className="flex flex-wrap ">
                    <div className="md:w-1/3 pr-4 pl-4 mx-auto flex items-center">
                        <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                            <div className="flex-auto p-6">
                            <span className='text-4xl font-medium'>Update Spaces</span>

                                {
                                    spaceData !== null ? (
                                        <Formik
                                            initialValues={spaceData}
                                            onSubmit={submitForm}
                                        >
                                            {(addForm) => (
                                                <form className='my-5' onSubmit={addForm.handleSubmit}>
                                                    <label className='form-label'>Title</label>
                                                    <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.title}</span>
                                                    <input id='title' onChange={addForm.handleChange} value={addForm.values.title} className='block appearance-none w-full py-1 px-2 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="text" />
                                                    <label className='form-label'>Description</label>
                                                    <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.description}</span>
                                                    <input id='description' onChange={addForm.handleChange} value={addForm.values.description} className='block appearance-none w-full py-1 px-2 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="text" />
                                                    <label className='form-label'>Area</label>
                                                    <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.area}</span>
                                                    <input id='area' onChange={addForm.handleChange} value={addForm.values.area} className='block appearance-none w-full py-1 px-2 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="number" />
                                                    <label className='form-label'>Cost</label>
                                                    <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.cost}</span>
                                                    <input id='cost' onChange={addForm.handleChange} value={addForm.values.cost} className='block appearance-none w-full py-1 px-2 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="number" />
                                                    <label className='form-label'>Services</label>
                                                    <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.services}</span>
                                                    <input id='services' onChange={addForm.handleChange} value={addForm.values.services} className='block appearance-none w-full py-1 px-2 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="text" />
                                                    <label className='form-label'>Image</label>
                                                    <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.image}</span>
                                                    <input id='image' className='block appearance-none w-full py-1 px-2 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="file" onChange={uploadFile} />

                                                    <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 w-full">Update</button>
                                                </form>
                                            )}
                                        </Formik>
                                    ) :
                                        <h1>Loading...</h1>
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateSpaces