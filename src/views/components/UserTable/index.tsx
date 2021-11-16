import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getUsers } from '../../../application/selectors/users';
import { pageLoaded } from '../../../application/actions/ui';
import { getLoading } from '../../../application/selectors/ui';
import { UserEntityType } from '../../../application/entities/UserEntityType';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SkeletonUserTable from './skeleton';
import TablePaginationActions from './TablePaginationComponent';
import { Title, BoxHeader, TitleFilter } from './style';

export default function CustomPaginationActionsTable() {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const loading = useSelector(getLoading);
  const [nameSearched, setNameSearched] = useState('');
  const [ageSearched, setAgeSearched] = useState('');
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setUserList(users);
  }, [users]);

  useEffect(() => {
    dispatch(pageLoaded);
  }, [dispatch]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userList.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const onChangeName = (value: string) => {
    setNameSearched(value);
    let usersFiltered = [];
    if (value.length <= 0) {
      setUserList(users);
    } else {
      usersFiltered = users.filter(({ name = '' }: UserEntityType) =>
        name.toLowerCase().includes(nameSearched.toLowerCase())
      );
      setUserList(usersFiltered);
    }
  };

  const onChangeAge = (value: string) => {
    setAgeSearched(value);
    let usersFiltered: any = [];
    if (value.length <= 0 || value === '') {
      setTimeout(() => {
        setUserList(users);
      }, 500);
    } else {
      usersFiltered = users.filter(({ age }: UserEntityType) => age === +value);

      setTimeout(() => {
        setUserList(usersFiltered);
      }, 500);
    }
  };

  return (
    <>
      <Title>Lista de Usuários</Title>

      {loading ? (
        <SkeletonUserTable />
      ) : (
        <>
          <BoxHeader>
            <Grid container spacing={2}>
              <Grid item xs={4} alignItems="flex-end">
                <TitleFilter>Filtrar por:</TitleFilter>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="outlined-name"
                  label="Nome"
                  size="small"
                  onChange={(evt) => onChangeName(evt.target.value)}
                  value={nameSearched}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="outlined-uncontrolled"
                  label="Idade"
                  size="small"
                  onChange={(evt) => onChangeAge(evt.target.value)}
                  value={ageSearched}
                />
              </Grid>
            </Grid>
          </BoxHeader>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell align="right">Idade</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? userList.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : userList
                ).map((row: UserEntityType) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell style={{ width: 160 }} align="right">
                      {row?.age}
                    </TableCell>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      10,
                      20,
                      50,
                      { label: 'All', value: -1 }
                    ]}
                    colSpan={3}
                    count={userList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        'aria-label': 'rows per page'
                      },
                      native: true
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
}
