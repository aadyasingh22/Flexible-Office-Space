import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {

    const {id} = useParams();
  const [officeData, setOfficeData] = useState(null);

  const fetchData = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/space/getbyid/`+id);
    const data = await res.json();
    console.log(data);
    setOfficeData(data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const displayOffice = () => {
    if(officeData!==null){
      return <div className='container'>
        <div className="row">
          <div className="col-md-4">
            <img className='img-fluid' src={`${import.meta.env.VITE_BACKEND_URL}`+officeData.image} alt="" />
          </div>
          <div className="col-md-8">
            <h1>{officeData.title}</h1>
          </div>
        </div>
      </div>
    }else{
      return <h1>Loading ...</h1>
    }
  }

  return (
    <div>
      {displayOffice()}
    </div>
  )
}

export default Details