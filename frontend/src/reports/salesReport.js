import React,{ useRef} from 'react';
import { Button } from 'react-bootstrap';
import {useReactToPrint} from 'react-to-print';

export const SalesReport = () => {
    const componentRef = useRef()
    const handPrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'sales-data',
        onAfterPrint: () => alert('Print sucess')
    });

  return (
        <div ref={componentRef} style={{width: '100%', height: window.innerHeight}}>
            <h1 className='text-center my-3 border py-2'>Sales Report</h1>
            <table className='w-75 mx-auto' bordered >
                <thead>
                    <th>Medicine Name</th>
                    <th>Sold Quantity</th>
                    <th>Category</th>
                    <th>Sold Price</th>
                    <th>Remaining Amount</th>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
            <Button onClick={handPrint}>Print this out</Button>
        </div>
  )
}
