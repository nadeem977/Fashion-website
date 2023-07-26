import React from "react";
import { Container, Box, Typography ,Button} from "@mui/material";
import box1 from "../../assets/box1.png";
import box2 from "../../assets/box2.png";
import box3 from "../../assets/box3.png";
import box4 from "../../assets/box4.png";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Dashboardbar from "../../components/Dashboardbar";


const boxes = {
  padding: "1rem",
  borderRadius: "11px",
  height: "110px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const createData = (id, date, amount, status, paymentMethod, actions) => {
  return { id, date, amount, status, paymentMethod, actions };
};

const rows = [
  createData(
    "2020202020",
    "23-4-2021",
    "$320.00",
    "Pending",
    "Credit Card",
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        style={{
          background: "transparent",
          color: "#5AB27E",
          border: "1px solid #5AB27E",
        }}
      >
        Actions
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item>Accept Order</Dropdown.Item>
        <Dropdown.Item>Assign Order</Dropdown.Item>
        <Dropdown.Item>Cancel Order</Dropdown.Item>
        <Dropdown.Item>Reject Order</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
  createData(
    "2020202020",
    "23-4-2021",
    "$320.00",
    "Pending",
    "Credit Card",
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        style={{
          background: "transparent",
          color: "#5AB27E",
          border: "1px solid #5AB27E",
        }}
      >
        Actions
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item>Accept Order</Dropdown.Item>
        <Dropdown.Item>Assign Order</Dropdown.Item>
        <Dropdown.Item>Cancel Order</Dropdown.Item>
        <Dropdown.Item>Reject Order</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
  createData(
    "2020202020",
    "23-4-2021",
    "$320.00",
    "Pending",
    "Credit Card",
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        style={{
          background: "transparent",
          color: "#5AB27E",
          border: "1px solid #5AB27E",
        }}
      >
        Actions
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item>Accept Order</Dropdown.Item>
        <Dropdown.Item>Assign Order</Dropdown.Item>
        <Dropdown.Item>Cancel Order</Dropdown.Item>
        <Dropdown.Item>Reject Order</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
  createData(
    "2020202020",
    "23-4-2021",
    "$320.00",
    "Pending",
    "Credit Card",
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        style={{
          background: "transparent",
          color: "#5AB27E",
          border: "1px solid #5AB27E",
        }}
      >
        Actions
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item>Accept Order</Dropdown.Item>
        <Dropdown.Item>Assign Order</Dropdown.Item>
        <Dropdown.Item>Cancel Order</Dropdown.Item>
        <Dropdown.Item>Reject Order</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
  createData(
    "2020202020",
    "23-4-2021",
    "$320.00",
    "Pending",
    "Credit Card",
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        style={{
          background: "transparent",
          color: "#5AB27E",
          border: "1px solid #5AB27E",}}>
        Actions
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Accept Order</Dropdown.Item>
        <Dropdown.Item>Assign Order</Dropdown.Item>
        <Dropdown.Item>Cancel Order</Dropdown.Item>
        <Dropdown.Item>Reject Order</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
];

const DashboardDesigner = () => {


  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const issmall90 = useMediaQuery("(max-width:950px)");
  const issmall40 = useMediaQuery("(max-width:450px)");

  return (
    <>
      <Dashboardbar/>
      <Container maxWidth="xl">
        <Box style={{ margin: "2rem auto" }}>
          <Typography
            variant="h6"
            style={{ fontSize: "35px", fontWeight: "600" }}
          >
            Dashboard
          </Typography>
          <Typography variant="body1" style={{ color: "#838383" }}>
            Check all your stats in one dashboard
          </Typography>
        </Box>

        <Box
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            flexDirection: issmall90 ? "column" : "row",}}>
          <Box style={{ width: "100%",margin:'1rem auto'}}>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <Box
                style={boxes}
                sx={{
                  border: "1px solid #21BDCA",
                  width: issmall40 ? "100%" : "200px", }}>
                <Typography variant="body1" color="#999999">
                Open <br />
                 Orders
                </Typography>
                <Box
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h6">125</Typography>
                  <img src={box1} alt="images" />
                </Box>
              </Box>
              <Box
                style={boxes}
                sx={{
                  border: "1px solid #5372E7",
                  width: issmall40 ? "100%" : "200px",
                }}
              >
                <Typography variant="body1" color="#999999">
                Active <br />
                Orders
                </Typography>
                <Box
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h6">23</Typography>
                  <img src={box2} alt="images" />
                </Box>
              </Box>
              <Box
                style={boxes}
                sx={{
                  border: "1px solid #64C882",
                  width: issmall40 ? "100%" : "200px",
                }} >
                <Typography variant="body1" color="#999999">
                Completed <br />
                 Orders
                </Typography>
                <Box
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h6">12</Typography>
                  <img src={box3} alt="images" />
                </Box>
              </Box>
              <Box
                style={boxes}
                sx={{
                  border: "1px solid #64C882",
                  width: issmall40 ? "100%" : "200px",
                }}
              >
                <Typography variant="body1" color="#999999">
                Assigned <br />
                Orders
                </Typography>
                <Box
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h6">12</Typography>
                  <img src={box3} alt="images" />
                </Box>
              </Box>
              <Box
                style={boxes}
                sx={{
                  border: "1px solid #FF9F24",
                  width: issmall40 ? "100%" : "200px",
                }}
              >
                <Typography variant="body1" color="#999999">
                Customer Rejected <br />
                 Orders
                </Typography>
                <Box
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h6">12</Typography>
                  <img src={box4} alt="images" />
                </Box>
              </Box>
              <Box
                style={boxes}
                sx={{
                  border: "1px solid #FF9F24",
                  width: issmall40 ? "100%" : "200px",
                }}
              >
                <Typography variant="body1" color="#999999">
                Stylist Rejected  <br />
               Orders
                </Typography>
                <Box
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h6">12</Typography>
                  <img src={box4} alt="images" />
                </Box>
              </Box>

            </Box>
          </Box>
        </Box>
        <Box style={{ display: "flex", justifyContent: "space-between" ,flexWrap:'wrap',gap:'10px'}}>
          <Typography variant="h6" fontWeight={600}>
            My Orders
          </Typography>
          <Dropdown style={{zIndex:100}}>
            <Dropdown.Toggle
              id="dropdown-basic"
              style={{
                background: "transparent",
                color: "#5AB27E",
                border: "1px solid #5AB27E",
                marginBottom:issmall90? '0px': '-5rem',zIndex:"100"}} >
              Filter by Status
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Pending</Dropdown.Item>
              <Dropdown.Item>Confirmed</Dropdown.Item>
              <Dropdown.Item>Cancelled</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Box>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Open" value="1" />
                <Tab label="Assigned" value="2" />
                <Tab label="Completed" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1" style={{ padding: "20px 0px" }}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ color: "#5AB27E", fontWeight: 600 }}>
                        Order ID
                      </TableCell>
                      <TableCell style={{ color: "#5AB27E", fontWeight: 600 }}>
                        Request Date
                      </TableCell>
                      <TableCell style={{ color: "#5AB27E", fontWeight: 600 }}>
                        Budget
                      </TableCell>
                      <TableCell style={{ color: "#5AB27E", fontWeight: 600 }}>
                        Status
                      </TableCell>
                      <TableCell style={{ color: "#5AB27E", fontWeight: 600 }}>
                        Payment Method
                      </TableCell>
                      <TableCell style={{ color: "#5AB27E", fontWeight: 600 }}>
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row,index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ color: "#828282 " }}
                        >
                          {row.id}
                        </TableCell>
                        <TableCell style={{ color: "#828282 " }}>
                          {row.date}
                        </TableCell>
                        <TableCell style={{ color: "rgb(83, 114, 231)" }}>
                          {row.amount}{" "}
                        </TableCell>
                        <TableCell style={{ color: "#B7B94B" }}>
                          {row.status}
                        </TableCell>
                        <TableCell style={{ color: "#828282 " }}>
                          {row.paymentMethod}
                        </TableCell>
                        <TableCell style={{ color: "#828282 " }}>
                          {row.actions}
                        </TableCell>
                        <TableCell style={{ color: "#828282 " }}>
                          <Button variant="outlined" style={{color:'#5AB27E',border:'1px solid #5AB27E'}}>

                            <Link to="/OrderDetails" style={{color:'#5AB27E',textDecoration:'none'}}>View Style profiles</Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel value="2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa, velit, voluptates quae dolore ab consectetur nobis suscipit, similique possimus accusamus aliquid. Earum mollitia fugit, omnis debitis eveniet dicta dolor doloremque, reiciendis impedit ipsam nesciunt, libero autem accusamus cupiditate? Dolorum.</TabPanel>
            <TabPanel value="3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores deserunt perferendis voluptatem voluptatum quia modi praesentium nostrum laboriosam nisi, atque ad assumenda dolores neque. Reprehenderit sed soluta et natus recusandae ex minus illum. Quis vel eius commodi inventore beatae quibusdam dicta incidunt numquam illo laudantium? Nihil dolor, sequi voluptas laborum veritatis modi iusto ipsam debitis assumenda delectus qui numquam tempore eos reiciendis labore quidem necessitatibus, velit provident quibusdam expedita alias odio. Quis, reprehenderit perferendis officiis quo obcaecati illum nesciunt quisquam molestiae veritatis libero placeat quae! Labore totam rerum quia recusandae voluptatibus provident, illo commodi perferendis quas placeat ducimus fugiat cupiditate, itaque explicabo beatae asperiores doloribus optio consequuntur sint aperiam soluta modi necessitatibus excepturi. Corrupti, neque? Ratione officia tempora voluptate dolor commodi eligendi illum quam, voluptatum ipsum non incidunt impedit blanditiis, perspiciatis suscipit placeat odit debitis accusantium magni distinctio quis mollitia ducimus. Amet dolor fugit, excepturi in consectetur itaque doloremque molestias pariatur autem asperiores dolorum.</TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
};

export default DashboardDesigner;
