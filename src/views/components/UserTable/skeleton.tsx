import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import Skeleton from '@mui/material/Skeleton';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';

export default function CustomPaginationActionsTable() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4} alignItems="flex-end">
          <p style={{ display: 'block', textAlign: 'right' }}>
            <Skeleton
              variant="text"
              style={{ display: 'inline-block' }}
              width={90}
            />
          </p>
        </Grid>
        <Grid item xs={4}>
          <Skeleton variant="rectangular" width={170} height={40} />
        </Grid>
        <Grid item xs={4}>
          <Skeleton variant="rectangular" width={170} height={40} />
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Skeleton variant="text" width={50} />
              </TableCell>
              <TableCell align="right">
                <Skeleton
                  variant="text"
                  style={{ display: 'inline-block' }}
                  width={50}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <Skeleton variant="text" width={80} />
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Skeleton
                  variant="text"
                  style={{ display: 'inline-block' }}
                  width={30}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Skeleton variant="text" width={120} />
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Skeleton
                  variant="text"
                  style={{ display: 'inline-block' }}
                  width={30}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Skeleton variant="text" width={60} />
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Skeleton
                  variant="text"
                  style={{ display: 'inline-block' }}
                  width={30}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Skeleton variant="text" width={80} />
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Skeleton
                  variant="text"
                  style={{ display: 'inline-block' }}
                  width={30}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Skeleton variant="text" width={120} />
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Skeleton
                  variant="text"
                  style={{ display: 'inline-block' }}
                  width={30}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Skeleton variant="text" width={60} />
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Skeleton
                  variant="text"
                  style={{ display: 'inline-block' }}
                  width={30}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Skeleton variant="text" width={80} />
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Skeleton
                  variant="text"
                  style={{ display: 'inline-block' }}
                  width={30}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Skeleton variant="text" width={120} />
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Skeleton
                  variant="text"
                  style={{ display: 'inline-block' }}
                  width={30}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Skeleton variant="text" width={60} />
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Skeleton
                  variant="text"
                  style={{ display: 'inline-block' }}
                  width={30}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <Skeleton variant="text" width={80} />
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Skeleton
                  variant="text"
                  style={{ display: 'inline-block' }}
                  width={30}
                />
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell style={{ width: 160 }} align="right">
                <Skeleton
                  variant="circular"
                  style={{ display: 'inline-block' }}
                  width={20}
                  height={20}
                />
              </TableCell>
              <TableCell>
                <Skeleton
                  variant="circular"
                  style={{ display: 'inline-block' }}
                  width={20}
                  height={20}
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
