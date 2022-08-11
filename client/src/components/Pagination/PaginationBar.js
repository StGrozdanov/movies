import Pagination from 'react-bootstrap/Pagination';

function PaginationBar() {
  return (
    <div style={{ marginTop: 20, display: "flex", alignContent: "center", justifyContent: "center" }}>
      <Pagination>
        <Pagination.First />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Last />
      </Pagination>
    </div>
  );
}

export default PaginationBar;