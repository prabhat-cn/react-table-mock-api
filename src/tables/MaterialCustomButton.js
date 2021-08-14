import React, { useState } from "react";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from '@material-ui/icons/Add';

const MaterialCustomButton = () => {
  const [tableData, setTableData] = useState([
    {
      name: "Mona",
      email: "mona@gmail.com",
      phone: 7890225585,
      age: null,
      gender: "F",
      city: "Mumbai",
      fee: 7000,
    },
    {
      name: "Sima",
      email: "sima@gmail.com",
      phone: 9857485474,
      age: 18,
      gender: "F",
      city: "Kokata",
      fee: 8000,
    },
    {
      name: "Janvi",
      email: "janvi@gmail.com",
      phone: 7854896584,
      age: 27,
      gender: "F",
      city: "Kerala",
      fee: 9000,
    },
    {
      name: "John ",
      email: "john@gmail.com",
      phone: 5854714778,
      age: 12,
      gender: "M",
      city: "America",
      fee: 6000,
    },
    {
      name: "Roxen",
      email: "roxen@gmail.com",
      phone: 4857485479,
      age: 40,
      gender: "F",
      city: "Australia",
      fee: 10000.0,
    },
    {
      name: "Raj",
      email: "raj@gmail.com",
      phone: 9658574857,
      age: 25,
      gender: "M",
      city: "Jamsedhpur",
      fee: 11000.5,
    },
    {
      name: "Simran",
      email: "simran@gmail.com",
      phone: 8547584758,
      age: 80,
      gender: "F",
      city: "South India",
      fee: 5000.65,
    },
    {
      name: "Ramesh",
      email: "ramesh@gmail.com",
      phone: 9654758485,
      age: 32,
      gender: "M",
      city: "Gujrat",
      fee: 12000,
    },
    {
      name: "Ram",
      email: "Ram@gmail.com",
      phone: 6958471526,
      age: 12,
      gender: "M",
      city: "Kolkata",
      fee: 4000,
    },
    {
      name: "Mala",
      email: "mala@gmail.com",
      phone: 8574825845,
      age: 26,
      gender: "F",
      city: "Karachi",
      fee: 14000,
    },
    {
      name: "Amit",
      email: "amit@gmail.com",
      phone: 8574854758,
      age: 14,
      gender: "M",
      city: "Morokko",
      fee: 20000,
    },
  ]);

  const columns = [
    { title: "Name", field: "name" },
    { 
      title: "Email", 
      field: "email", 
      sorting: false, 
      filtering: false,
      cellStyle: {color: 'blue'},
      headerStyle: {color: '#fff'},
    },
    {
      title: "Phone Number",
      field: "phone",
      align: "center",
      filterPlaceholder: "Filter by phone",
    },
    {
      title: "Age",
      field: "age",
      emptyValue: () => <em>Null</em>,
      defaultSort: "asc",
      searchable: false,
      grouping: false,
      //  color change
      render: (rowData)=> <div style={{background: rowData.age >= 18 ? 'green' : 'red'}}>{rowData.age>= 18? '18+': '18-'}</div>,
    },
    { 
      title: "Gender", 
      field: "gender", 
      lookup: { M: "Male", F: "Female" },
      // defaultGroupOrder: 0, //0, 1, 2, 3
    },
    { 
      title: "City", 
      field: "city" 
    },
    {
      title: "Fee",
      field: "fee",
      type: "currency",
      currencySetting: { currencyCode: "INR", minimumFractionDigits: 1 },
    },
  ];


  return (
    <>
      <h2>Material Table</h2>
      <MaterialTable
        title="Employee List"
        columns={columns}
        data={tableData}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              console.log("newRow", newRow);
              setTableData([...tableData, newRow]);
              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (updatedRow, oldRow) =>
            new Promise((resolve, reject) => {
              // console.log('updateRow', updatedRow, oldRow);
              const updatedData = [...tableData];
              updatedData[oldRow.tableData.id] = updatedRow;
              setTableData(updatedData);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              // console.log('onRowDelete',selectedRow);
              const deletedData = [...tableData];
              deletedData.splice(selectedRow.tableData.id, 1);
              setTableData(deletedData);
              console.log("afterDelete", deletedData);
              setTimeout(() => resolve(), 1000);
            }),
        }}
        // custom buttons
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: "Click me to download",
            onClick: (e, data) => console.log("custom-but", data),
            // isFreeAction: true,
          },
        ]}
        onSelectionChange={(selectedRows) =>
          console.log("selectedRows", selectedRows)
        }
        options={{
          sorting: true,
          search: true,
          // searchText: 'raj',
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          searchFieldVariant: "standard", //outlined, filled
          filtering: true,
          paging: true,
          pageSize: 5,
          pageSizeOptions: [5, 10, 15, 20, 25],
          paginationType: "stepped",
          showFirstLastPageButtons: true,
          paginationPosition: "bottom", //both, bottom, top
          exportButton: true,
          exportAllData: true,
          exportFileName: "Employee-data",
          addRowPosition: "first", //first, last
          actionsColumnIndex: -1, //0, -1
          selection: true,
          showSelectAllCheckbox: false,
          showTextRowsSelected: true,
          selectionProps: (rowData) => ({
            disabled: rowData.age == null,
            // disabled: true,
            color: "primary", //checkbox color
          }),
          grouping: true,
          columnsButton: true,
          // customStyle: {customStyles}
          rowStyle:(data, index)=>(
            index%2==0?{background: '#f5f5f5'}: null
          ),
          headerStyle:{background: 'green', fontStyle: 'italic'}
        }}
        icons={{Add:() => <button><AddIcon/>Add Employee</button>}}
      />
    </>
  );
};

export default MaterialCustomButton;
