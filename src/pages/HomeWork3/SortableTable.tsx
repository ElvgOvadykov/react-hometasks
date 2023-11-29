import React from 'react';

interface IProps {
  rows: Array<Record<string, string | number>>;
}

enum ESortType {
  // Не определен
  Undefined = 'undefined',
  // По возрастанию
  Asc = 'asc',
  // По убыванию
  Desc = 'desc',
}

export const SortableTable = ({ rows }: IProps) => {
  const [sortField, setSortField] = React.useState<string | undefined>();
  const [sortType, setSortType] = React.useState(ESortType.Undefined);

  const sortButtonHandler = (field: string) => {
    if (field !== sortField) {
      setSortField(field);
      setSortType(ESortType.Asc);
    } else {
      switch (sortType) {
        case ESortType.Undefined:
          setSortType(ESortType.Asc);
          break;
        case ESortType.Asc:
          setSortType(ESortType.Desc);
          break;

        default:
          setSortType(ESortType.Undefined);
          break;
      }
    }
  };

  const getSortIcon = (key: string) => {
    if (key !== sortField) {
      return <span>&#8597;</span>;
    } else {
      switch (sortType) {
        case ESortType.Asc:
          return <span>&#8593;</span>;
        case ESortType.Desc:
          return <span>&#8595;</span>;

        default:
          return <span>&#8597;</span>;
      }
    }
  };

  const getSortedRows = () => {
    if (sortType === ESortType.Undefined) {
      return rows;
    } else if (sortField) {
      return rows.slice().sort((a, b) => {
        if (sortType === ESortType.Asc) {
          return a[sortField] >= b[sortField] ? 1 : -1;
        }

        return b[sortField] >= a[sortField] ? 1 : -1;
      });
    }

    return rows;
  };

  return (
    <table className="sortable-table">
      <thead>
        <tr>
          {Object.keys(rows[0]).map(key => (
            <th key={key}>
              {key} <button onClick={() => sortButtonHandler(key)}>{getSortIcon(key)}</button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {getSortedRows().map(row => (
          <tr key={row.id}>
            {Object.values(row).map(value => (
              <td key={value}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
