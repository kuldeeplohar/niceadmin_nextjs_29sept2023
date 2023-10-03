import React from 'react'
import Link from 'next/link'

export default function Aside() {
  return (
    <div>
        <aside id="sidebar" className="sidebar">
          <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
              <a className="nav-link " href="index.html">
                <i className="bi bi-grid" />
                <span>Dashboard</span>
              </a>
              </li>{/* End Dashboard Nav */}
              <li className="nav-item">
              <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-menu-button-wide" /><span>Purchasing</span><i className="bi bi-chevron-down ms-auto" />
              </a>
              <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                  <Link href="/admin/purchase_start">
                    <i className="bi bi-circle" /><span>Start</span>
                  </Link>
                </li>
                <li>
                  <Link href="/admin/purchase_in_progress">
                    <i className="bi bi-circle" /><span>inProgress</span>
                  </Link>
                </li>
                <li>
                  <Link href="/admin/purchase_completed">
                    <i className="bi bi-circle" /><span>Completed</span>
                  </Link>
                </li>
               
              </ul>
            </li>{/* End Components Nav */}
          </ul>
      </aside>{/* End Sidebar*/}
    </div>
  )
}
