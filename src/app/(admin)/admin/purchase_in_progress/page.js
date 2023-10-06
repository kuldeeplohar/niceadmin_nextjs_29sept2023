 'use client'
import React from 'react'
import DataTable from 'react-data-table-component';


 const columns = [
  {
      name: 'id',
      selector: row => row.id,
  },
  {
      name: 'GIFT Amount',
      selector: row => row.Giftamount,
  },
    {
        name: 'TSX Amount',
        selector: row => row.TSXamount,
    },
    {
        name: 'Final price',
        selector: row => row.finalprice,
    },
    {
        name: 'Giftcard OTP',
        selector: row => row.Giftcardotp  ,
    },
    {
        name: 'Purchase OTP',
        selector: row => row.purchaseotp  ,
    },
    {
        name: 'Remark',
        selector: row => row.remark  ,
    },
    {
        name: 'Purchase started at',
        selector: row => row.pur_start_at  ,
    },
    {
        name: 'status',
        selector: row => row.status  ,
    },
    {
        name: 'Action',
        selector: row => row.Action  ,
        cell:() => <button onClick={' ' } className='btn btn-danger'  >Delete</button>,
           
            
    },
  ]

  const data = [
    {
        id: 1,
        Giftamount:'500',
        TSXamount:'100',
        finalprice:'10000',
        Giftcardotp:'125120',
        purchaseotp:'203201',
        remark:'Done',
        pur_start_at:'11:00AM',
        status:'pandding',
        Action:'Delete',
    },
    {
        id: 1,
        Giftamount:'500',
        TSXamount:'100',
        finalprice:'10000',
        Giftcardotp:'125120',
        purchaseotp:'203201',
        remark:'Done',
        pur_start_at:'11:00AM',
        status:'pandding',
        Action:'Delete',
    },
    {
        id: 1,
        Giftamount:'500',
        TSXamount:'100',
        finalprice:'10000',
        Giftcardotp:'125120',
        purchaseotp:'203201',
        remark:'Done',
        pur_start_at:'11:00AM',
        status:'pandding',
        Action:'Delete',
    },
    {
        id: 1,
        Giftamount:'500',
        TSXamount:'100',
        finalprice:'10000',
        Giftcardotp:'125120',
        purchaseotp:'203201',
        remark:'Done',
        pur_start_at:'11:00AM',
        status:'pandding',
        Action:'Delete',
    },
    {
        id: 1,
        Giftamount:'500',
        TSXamount:'100',
        finalprice:'10000',
        Giftcardotp:'125120',
        purchaseotp:'203201',
        remark:'Done',
        pur_start_at:'11:00AM',
        status:'pandding',
        Action:'Delete',
    },
    {
        id: 1,
        Giftamount:'500',
        TSXamount:'100',
        finalprice:'10000',
        Giftcardotp:'125120',
        purchaseotp:'203201',
        remark:'Done',
        pur_start_at:'11:00AM',
        status:'pandding',
        Action:'Delete',
    },
    {
        id: 1,
        Giftamount:'500',
        TSXamount:'100',
        finalprice:'10000',
        Giftcardotp:'125120',
        purchaseotp:'203201',
        remark:'Done',
        pur_start_at:'11:00AM',
        status:'pandding',
        Action:'Delete',
    },
    {
        id: 1,
        Giftamount:'500',
        TSXamount:'100',
        finalprice:'10000',
        Giftcardotp:'125120',
        purchaseotp:'203201',
        remark:'Done',
        pur_start_at:'11:00AM',
        status:'pandding',
        Action:'Delete',
    },
    {
        id: 1,
        Giftamount:'500',
        TSXamount:'100',
        finalprice:'10000',
        Giftcardotp:'125120',
        purchaseotp:'203201',
        remark:'Done',
        pur_start_at:'11:00AM',
        status:'pandding',
        Action:'Delete',
    },
    {
        id: 1,
        Giftamount:'500',
        TSXamount:'100',
        finalprice:'10000',
        Giftcardotp:'125120',
        purchaseotp:'203201',
        remark:'Done',
        pur_start_at:'11:00AM',
        status:'pandding',
        Action:'Delete',
    },
    {
        id: 1,
        Giftamount:'500',
        TSXamount:'100',
        finalprice:'10000',
        Giftcardotp:'125120',
        purchaseotp:'203201',
        remark:'Done',
        pur_start_at:'11:00AM',
        status:'pandding',
        Action:'Delete',
    },

]



   
  export default function page() {
  
  return (
    <div>
     
    <section className="section dashboard">
      <div classname="row">

      <div classname="col-lg-12 ">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">

                  <DataTable 
                   columns={columns}
                   data ={data} 
                   pagination
                 ></DataTable>
                </h5>
              </div>
            </div>    
          </div>
        </div>
      </div>
</div>

    </section>
  
   </div>
  )
}
