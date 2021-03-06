import React from 'react';
import { ViewCell } from '@innovic/components/shared/anatomy';

class View extends React.Component {
  render() {
    return <ViewCell getUrlPrefix="/vendors/" name="Vendors" list={[{ title: 'Name', accessor: 'name' }]} />;
  }
}

export default View;
