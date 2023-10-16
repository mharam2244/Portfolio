import React from 'react'

export default function CopyRight() {
    let year = new Date().getFullYear()
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
    <p className="text-center text-light my-1">
        &copy; CopyRight {year}. All Right Reserved By M.Haram
    </p>
        </div>
      </div>
    </div>
    </>
  )
}
