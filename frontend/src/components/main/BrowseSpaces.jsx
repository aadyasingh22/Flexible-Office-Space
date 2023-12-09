import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const BrowseSpaces = () => {

  const [spaceList, setspaceList] = useState([]);

  const getSpaceData = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/space/getall`);
    console.log(res.status);
    const data = await res.json();
    console.table(data);
    setspaceList(data);
  }

  useEffect(() => {

    //when component opens
    getSpaceData();
  }, [])

  return (
    <div>
      <div className="container mx-auto sm:px-4">

        <div className="flex flex-wrap ">
          {spaceList.map((space) => (
            <div className="md:w-1/4 pr-4 pl-4">
              <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mx-auto my-5" style={{ overflow: 'hidden' }}>
                <img src={`${import.meta.env.VITE_BACKEND_URL}`+space.image} alt="" className='my-card-img' />

                <div className="flex-auto p-6">

                  <h2>{space.title}</h2>
                  <h4>{space.description}</h4>
                  <h4>{space.area}</h4>
                  <h4>{space.services}</h4>
                  <h3>₨ {space.cost}</h3>

                  <Link to={'/main/details/'+space._id} className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">Add to Cart</Link>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default BrowseSpaces