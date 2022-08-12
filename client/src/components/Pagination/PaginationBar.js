import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';

function PaginationBar({ moviesCount }) {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentPage = Number(location.search.split('=')[1]);

  const totalPages = Math.ceil(moviesCount / 4);

  async function buttonClickHandler(number) {
    setActive(number);
    navigate(`?page=${number}`);
  }

  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => buttonClickHandler(number)}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <div style={{ marginTop: 20, display: "flex", alignContent: "center", justifyContent: "center" }}>
      <Pagination>
        <Pagination.First
          disabled={currentPage <= 1 ? true : false}
          onClick={() => buttonClickHandler(currentPage - 1)}
        />
        {items}
        <Pagination.Last 
          disabled={currentPage >= totalPages ? true : false} 
          onClick={() => buttonClickHandler(currentPage + 1)}
        />
      </Pagination>
    </div>
  );
}

export default PaginationBar;