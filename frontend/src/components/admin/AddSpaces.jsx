import { useFormik } from 'formik';
import React, { useState } from 'react'
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import * as Yup from 'yup';

const AddSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    description: Yup.string()
        .min(2, 'Too Short!')
        .max(500, 'Too Long!')
        .required('Required'),
    area: Yup.number().required('Required'),
    cost: Yup.number().required('Required'),
    services: Yup.string().required('Required'),
    createdat: Yup.date().required('Required')
});

const AddSpaces = () => {

    const [selFile, setSelFile] = useState('');

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

            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/space/add`, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(res.status);
            if (res.status === 200) {
                enqueueSnackbar('Space Added successfully', {
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
        <div className='flex justify-center my-10'>
<<<<<<< HEAD
=======
        
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
            <span className='text-4xl font-medium'>Office Spaces</span>
            <form onSubmit={addForm.handleSubmit}>
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
                <label className='form-label'>Created At</label>
                <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.createdat}</span>
                <input id='createdat' onChange={addForm.handleChange} value={addForm.values.createdat} className='block appearance-none w-full py-1 px-2 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="date" />
                <label className='form-label'>Image</label>
                <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.image}</span>
                <input id='image' value={addForm.values.image} className='block appearance-none w-full py-1 px-2 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="file" onChange={uploadFile} />
>>>>>>> 2babc9c0f98ec23e295d6399667512d216ced362

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <span className='text-4xl font-medium'>Office Spaces</span>
                <form onSubmit={addForm.handleSubmit}>
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
                    <label className='form-label'>Created At</label>
                    <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.createdat}</span>
                    <input id='createdat' onChange={addForm.handleChange} value={addForm.values.createdat} className='block appearance-none w-full py-1 px-2 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="date" />
                    <label className='form-label'>Image</label>
                    <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.image}</span>
                    <input id='image' value={selFile} className='block appearance-none w-full py-1 px-2 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="file" onChange={uploadFile} />

                    <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 w-full">Add</button>
                </form>

            </div>
        </div>

    )
}

export default AddSpaces