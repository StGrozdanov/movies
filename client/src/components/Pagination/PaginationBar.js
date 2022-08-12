import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

function PaginationBar({ moviesCount }) {
  const [active, setActive] = useState(1);

  let items = [];
  for (let number = 1; number <= moviesCount; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => setActive(number)}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <div style={{ marginTop: 20, display: "flex", alignContent: "center", justifyContent: "center" }}>
      <Pagination>
        <Pagination.First />
        {items}
        <Pagination.Last />
      </Pagination>
    </div>
  );
}

export default PaginationBar;