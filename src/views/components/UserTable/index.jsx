import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../Paginate';
import { getUsers } from '../../../application/selectors/users';
import { pageLoaded } from '../../../application/actions/ui';
import { getLoading } from '../../../application/selectors/ui';

let PageSize = 10;

const UserTable = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const loading = useSelector(getLoading);

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, users]);

  useEffect(() => {
    dispatch(pageLoaded);
  }, [dispatch]);

  return (
    <>
      <h1>Essential users</h1>
      {loading ? (
        'Loading users...'
      ) : (
        <ul>
          {currentTableData.map((user) => (
            <li
              style={{
                textDecoration: user.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {user?.name}
            </li>
          ))}
        </ul>
      )}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={users.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default UserTable;
