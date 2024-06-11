import React from 'react'
import UploadPic from './UploadPic'

const MemberPics = () => {
  return (
    <div>
        <UploadPic uploadEndpoint="member" />
    </div>
  )
}

export default MemberPics