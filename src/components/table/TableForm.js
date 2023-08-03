import React from 'react';
import { useTable, usePagination } from 'react-table';

const TableForm = ({ columns, data }) => {
  // Configuración de la tabla y la paginación
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    state: { pageIndex, pageSize },
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 2 }, // Página inicial y tamaño de página
    },
    usePagination // Habilitar la paginación
  );

  return (
    <div>
      <table {...getTableProps()} style={{ border: '1px solid black', width: '100%' }}>
        {/* Encabezados */}
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} style={{ borderBottom: 'solid 3px red', textAlign: 'left' }}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* Cuerpo de la tabla */}
        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            return (
              <tr key={index} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td key={cell.column.id} {...cell.getCellProps()} style={{ padding: '10px', border: 'solid 1px gray', textAlign: 'left' }}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Paginación */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Anterior
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Siguiente
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>
        <span>
          Página{' '}
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>{' '}
        </span>
        <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
          {[2, 5, 10].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Mostrar {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TableForm;
