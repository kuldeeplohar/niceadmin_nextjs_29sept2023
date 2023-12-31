  'use client'
      import React, { useState, useEffect, useRef } from 'react';
      import { DataTable } from 'primereact/datatable';
      import { Column } from 'primereact/column';
      import { Button } from 'primereact/button';
      import { Tooltip } from 'primereact/tooltip';
    //  import { ProductService } from './service/ProductService';

    let information = [
      {
        id: '1',
        category: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
      },
      {
        id: '2',
        category: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
      },
      {
        id: '3',
        category: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
      },
      {
        id: '4',
        category: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
      },
      {
        id: '5',
        category: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
      },
      {
        id: '6',
        category: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
      },
      {
        id: '7',
        category: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
      },
      {
        id: '8',
        category: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
      },
      {
        id: '9',
        category: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
      },
      {
        id: '10',
        category: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
      },
      {
        id: '11',
        category: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
      },
      {
        id: '12',
        category: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
      },
      {
        id: '13',
        category: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
      },
      {
        id: '14',
        category: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
      },
      {
        id: '1000',
        category: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
      },
    ]

    export default function ExportDemo() {
        const [products, setProducts] = useState([information]);
        const dt = useRef(null);

        const cols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'description', header: 'Description' },
        ];

        const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));

        useEffect(() => {
           // ProductService.getProductsMini().then((data) => setProducts(data));
        }, []); // eslint-disable-line react-hooks/exhaustive-deps

        const exportCSV = (selectionOnly) => {
            dt.current.exportCSV({ selectionOnly });
        };

        const exportPdf = () => {
            import('jspdf').then((jsPDF) => {
                import('jspdf-autotable').then(() => {
                    const doc = new jsPDF.default(0, 0);

                    doc.autoTable(exportColumns, products);
                    doc.save('products.pdf');
                });
            });
        };

        const exportExcel = () => {
            import('xlsx').then((xlsx) => {
                const worksheet = xlsx.utils.json_to_sheet(products);
                const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
                const excelBuffer = xlsx.write(workbook, {
                    bookType: 'xlsx',
                    type: 'array'
                });

                saveAsExcelFile(excelBuffer, 'products');
            });
        };

        const saveAsExcelFile = (buffer, fileName) => {
            import('file-saver').then((module) => {
                if (module && module.default) {
                    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                    let EXCEL_EXTENSION = '.xlsx';
                    const data = new Blob([buffer], {
                        type: EXCEL_TYPE
                    });

                    module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
                }
            });
        };

        const header = (
            <div   className="flex align-items-center justify-content-end gap-2 float-end position-relative" style={{bottom: 3 + 'em'}} >
                <Button className='btn btn-danger' type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV"   >csv</Button>
                <Button className='btn btn-primary' type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS"   >XLXS</Button>
                <Button className='btn btn-warning' type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF"   >PDF</Button>
            </div>
        );

        return (

            <div className="card">
                <Tooltip target=".export-buttons>button" position="bottom" />

                <DataTable ref={dt} value={information} header={header} paginator rows={5} rowsPerPageOptions={[10, 20,30]} tableStyle={{ minWidth: '50rem' }}>
                    {cols.map((col, index) => (
                        <Column key={index} field={col.field} header={col.header} />
                    ))}
                </DataTable>
            </div>
        );
    }
        