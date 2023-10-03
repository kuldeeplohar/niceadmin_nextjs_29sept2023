"use client"

import { usePathname } from 'next/navigation'
import React from 'react'


export default function BreadCrumb() {
  const pathname = usePathname()
  const tittle = pathname.split('/').pop()
   //console.log(pathname.split('/').pop())
  return (
    <div>
       <div className="pagetitle">
          <h1>{tittle}</h1>
          <nav>
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active">{tittle}</li>
            </ul>
          </nav>
        </div>{/* End Page Title */}
    </div>
  )
}
