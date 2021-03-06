import React from 'react';
import { ListCell } from '@innovic/components/shared/anatomy';
import { Link } from 'react-router-dom';

class List extends React.Component {
  render() {
    return (
      <ListCell
        name="Vendors"
        getUrl="/Vendors"
        importLink="/master/vendor/import-excel"
        tableColumns={[
          {
            Header: 'Key',
            accessor: 'key',
            Cell: ({ original }) => <Link to={'/master/vendor/' + original.id + '/view'}>{original.key}</Link>,
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
        ]}
      />
    );
  }
}

export default List;
