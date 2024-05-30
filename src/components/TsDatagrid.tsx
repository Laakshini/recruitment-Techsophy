import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface propsSchema {
  rows: any[];
  columns: GridColDef[];
  pageSize?: number;
  totalElements?: number;
  pageSizeArray?: any[];
  getSelectedRowsData?: (item: any) => void;
  handlePageSizeChange?: (item: any) => void;
  handlePageChange?: (item: any) => void;
  isCheckboxSelection?: boolean;
  [key: string]: any;
}

export default function TsDatagrid(props: propsSchema) {
  const {
    rows,
    columns,
    pageSize,
    totalElements,
    pageSizeArray,
    getSelectedRowsData,
    handlePageSizeChange,
    handlePageChange,
    isCheckboxSelection,
    ...other
  } = props;

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      // rowCount={totalElements}
      // pageSize={pageSize}
      rowsPerPageOptions={[]}
      checkboxSelection={isCheckboxSelection}
      // onSelectionModelChange={getSelectedRowsData}
      // onPageSizeChange={handlePageSizeChange}
      // onPageChange={handlePageChange}
      disableVirtualization
      disableColumnSelector
      disableSelectionOnClick
      disableColumnFilter
      disableColumnMenu
      hideFooter
      {...other}
    />
  );
}
