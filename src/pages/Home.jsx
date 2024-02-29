import React, { useState } from 'react'
import AddVideo from '../component/AddVideo'
import Category from '../component/Category'
import { Link } from 'react-router-dom'
import ViewVideo from '../component/ViewVideo'

function Home() {
    const [uploadVideoResponse,setUploadVideoResponse]=useState("")
    const [removeCategoryVideoResponse,setRemoveCategoryVideoResponse]=useState("")
    
  return (
    <>
    <div className="container mt-5 d-flex justify-content-between">
      <AddVideo setUploadVideoResponse={setUploadVideoResponse}/>
    <Link to={'/Watch'}>View History</Link>
    </div>
    <div className="conatier-fluid mt-5 mb-5 row">
      <div className="col-lg-6">
        <h3 style={{height:'50px'}}>All Videos</h3>
        <ViewVideo uploadVideoResponse={uploadVideoResponse} setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse}/>
      </div>
      <div className="col-lg-6">
          <Category/>
        </div>
      </div>
    </>
  )
}






























export default Home