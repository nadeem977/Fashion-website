import React, { useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import box1 from "../../assets/box1.png";
import box2 from "../../assets/box2.png";
import box3 from "../../assets/box3.png";
import box4 from "../../assets/box4.png";
import dp1 from "../../assets/dp1.png";
import dp2 from "../../assets/dp2.png";
import dp3 from "../../assets/dp3.png";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "bootstrap/dist/css/bootstrap.min.css";
import mcrd from "../../assets/mcrd.png";
import visa from "../../assets/visa 1.png";
import paypl from "../../assets/paypl.png";
import cradit from "../../assets/cradit.png";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useMediaQuery } from "@mui/material";
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const boxes = {
  padding: "1rem",
  borderRadius: "11px",
  height: "110px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const createData = (
  id,
  date,
  amount,
  status,
  paymentMethod,
  actions,
  icons
) => {
  return { id, date, amount, status, paymentMethod, actions, icons };
};

const rows = [
  createData(
    "2020202020",
    "23-4-2021",
    "Wedding Style Profile",
    "$320.00",
    "Pending",
    "Credit Card ",
    <ExpandMoreIcon />
  ),
  createData(
    "7341846837",
    "12-8-2021",
    "Formal Style Profile",
    "$120.00",
    "Confirmed",
    "Paypal",
    <ExpandMoreIcon />
  ),
  createData(
    "2020202020",
    "03-5-2021",
    "Graduation Style Profile",
    "$320.00",
    "Cancelled",
    "Master Card",
    <ExpandMoreIcon />
  ),
];

const Dashbord = () => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const isLargeS13 = useMediaQuery("(max-width:1350px)");
  const issmall90 = useMediaQuery("(max-width:950px)");
  const issmall40 = useMediaQuery("(max-width:470px)");

  return (
    <>
      <Dashboardbar />
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
            flexDirection: issmall90 ? "column" : "row",
          }}
        >
          <Box
            style={{ width: issmall90 ? "100%" : isLargeS13 ? "50%" : "68%" }}
          >
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
                  width: issmall40 ? "100%" : "200px",
                }}
              >
                <Typography variant="body1" color="#999999">
                  Total <br />
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
                  Total <br />
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
                }}
              >
                <Typography variant="body1" color="#999999">
                  Total <br />
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
                  Total <br />
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
            <Typography
              variant="h6"
              style={{ margin: "3rem 0px", fontWeight: "600" }}
            >
              Payment Options
            </Typography>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                margin: "1rem 0px",
                flexWrap: "wrap",
                flexDirection: issmall40 ? "column" : "row",
              }}
            >
              <Button
                variant="contained"
                style={{
                  display: "flex",
                  gap: "10px",
                  background: "transparent",
                  color: "#5AB27E",
                  border: "1px solid #5AB27E",
                }}
              >
                <img src={mcrd} alt="images" /> Master Card
              </Button>
              <Button
                variant="contained"
                style={{
                  display: "flex",
                  gap: "10px",
                  background: "transparent",
                  color: "#5AB27E",
                  border: "1px solid #5AB27E",
                }}
              >
                <img src={visa} alt="images" /> VISA Card
              </Button>
              <Button
                variant="contained"
                style={{
                  display: "flex",
                  gap: "10px",
                  background: "transparent",
                  color: "#5AB27E",
                  border: "1px solid #5AB27E",
                }}
              >
                <img src={paypl} alt="images" /> Paypal
              </Button>
              <Button
                variant="contained"
                style={{
                  display: "flex",
                  gap: "10px",
                  background: "transparent",
                  color: "#5AB27E",
                  border: "1px solid #5AB27E",
                }}
              >
                <img src={cradit} alt="images" /> Credit Card
              </Button>
              <Button
                variant="contained"
                style={{
                  display: "flex",
                  gap: "10px",
                  background: "#5AB27E",
                  color: "white",
                  border: "1px solid #5AB27E",
                }}
              >
                <AddCircleOutlineIcon style={{ color: "white !important" }} />{" "}
                Add Another Payment method
              </Button>
            </Box>
          </Box>

          <Box
            style={{
              border: "1px solid #5372E7",
              padding: "1rem",
              width: issmall90 ? "100%" : "450px",
              height: "fit-content",
              borderRadius: "11px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography variant="h6">Your Style Profiles</Typography>
            <Box
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-between",
                flexDirection: issmall40 ? "column" : "row",
              }}
            >
              <Box
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <img
                  src={dp1}
                  alt="images"
                  style={{ width: "40px", height: "40px" }}
                />
                <Box>
                  <Typography
                    variant="body1"
                    style={{
                      fontSize: "15px",
                      color: "#656565",
                      fontWeight: "600",
                    }}
                  >
                    Party Style Profile
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#999999"
                    style={{ fontSize: "13px", fontWeight: "600" }}
                  >
                    Created: 2 months ago
                  </Typography>
                </Box>
              </Box>
              <Link to="/DashboardDesigner" style={{textDecoration:'none'}}>
                <Button
                  variant="contained"
                  style={{
                    border: "1px solid #5AB27E",
                    color: "#5AB27E",
                    background: "transparent",
                    display: "flex",
                    gap: "10px",}}>
                  <AddCircleOutlineIcon /> Create Order
                </Button>
              </Link>
            </Box>
            <Box
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-between",
                flexDirection: issmall40 ? "column" : "row",
              }}
            >
              <Box
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <img
                  src={dp2}
                  alt="images"
                  style={{ width: "40px", height: "40px" }}
                />
                <Box>
                  <Typography
                    variant="body1"
                    style={{
                      fontSize: "15px",
                      color: "#656565",
                      fontWeight: "600",
                    }}
                  >
                    Formal Style Profile
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#999999"
                    style={{ fontSize: "13px", fontWeight: "600" }}
                  >
                    Created: 15 days ago
                  </Typography>
                </Box>
              </Box>
              <Link to="/DashboardDesigner" style={{textDecoration:'none'}}>
                <Button
                  variant="contained"
                  style={{
                    border: "1px solid #5AB27E",
                    color: "#5AB27E",
                    background: "transparent",
                    display: "flex",
                    gap: "10px",}}>
                  <AddCircleOutlineIcon /> Create Order
                </Button>
              </Link>
            </Box>
            <Box
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-between",
                flexDirection: issmall40 ? "column" : "row",
              }}
            >
              <Box
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <img
                  src={dp3}
                  alt="images"
                  style={{ width: "40px", height: "40px" }}
                />
                <Box>
                  <Typography
                    variant="body1"
                    style={{
                      fontSize: "15px",
                      color: "#656565",
                      fontWeight: "600",
                    }}
                  >
                    Wedding Style Profile
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#999999"
                    style={{ fontSize: "13px", fontWeight: "600" }}
                  >
                    Created: 3 days ago
                  </Typography>
                </Box>
              </Box>
              <Link to="/DashboardDesigner" style={{textDecoration:'none'}}>
                <Button
                  variant="contained"
                  style={{
                    border: "1px solid #5AB27E",
                    color: "#5AB27E",
                    background: "transparent",
                    display: "flex",
                    gap: "10px",}}>
                  <AddCircleOutlineIcon /> Create Order
                </Button>
              </Link>
            </Box>
            <Box
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-between",
                flexDirection: issmall40 ? "column" : "row",}}>
              <Box
                style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <img
                  src={dp3}
                  alt="images"
                  style={{ width: "40px", height: "40px" }}/>
                <Box>
                  <Typography
                    variant="body1"
                    style={{
                      fontSize: "15px",
                      color: "#656565",
                      fontWeight: "600",
                    }}
                  >
                    Party Style Profile
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#999999"
                    style={{ fontSize: "13px", fontWeight: "600" }}
                  >
                    Created: 2 months ago
                  </Typography>
                </Box>
              </Box>
              <Link to="/DashboardDesigner" style={{textDecoration:'none'}}>
                <Button
                  variant="contained"
                  style={{
                    border: "1px solid #5AB27E",
                    color: "#5AB27E",
                    background: "transparent",
                    display: "flex",
                    gap: "10px",}}>
                  <AddCircleOutlineIcon /> Create Order
                </Button>
              </Link>
            </Box>
            <Box
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-between",
                flexDirection: issmall40 ? "column" : "row",
              }}
            >
              <Box
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <img
                  src={dp3}
                  alt="images"
                  style={{ width: "40px", height: "40px" }}
                />
                <Box>
                  <Typography
                    variant="body1"
                    style={{
                      fontSize: "15px",
                      color: "#656565",
                      fontWeight: "600",
                    }}
                  >
                    Party Style Profile
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#999999"
                    style={{ fontSize: "13px", fontWeight: "600" }}
                  >
                    Created: 2 months ago
                  </Typography>
                </Box>
              </Box>
              <Link to="/DashboardDesigner" style={{textDecoration:'none'}}>
                <Button
                  variant="contained"
                  style={{
                    border: "1px solid #5AB27E",
                    color: "#5AB27E",
                    background: "transparent",
                    display: "flex",
                    gap: "10px",}}>
                  <AddCircleOutlineIcon /> Create Order
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={600}>
            My Orders
          </Typography>
        </Box>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Total" value="1" />
                <Tab label="Active" value="2" />
                <Tab label="Pending" value="3" />
                <Tab label="Cancelled" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1" style={{ padding: "20px 0px" }}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        style={{
                          color: "#5AB27E",
                          fontWeight: 600,
                          fontSize: "17px",
                        }}
                      >
                        Order ID
                      </TableCell>
                      <TableCell
                        style={{
                          color: "#5AB27E",
                          fontWeight: 600,
                          fontSize: "17px",
                        }}
                      >
                        Request Date
                      </TableCell>
                      <TableCell
                        style={{
                          color: "#5AB27E",
                          fontWeight: 600,
                          fontSize: "17px",
                        }}
                      >
                        Style Profile
                      </TableCell>
                      <TableCell
                        style={{
                          color: "#5AB27E",
                          fontWeight: 600,
                          fontSize: "17px",
                        }}
                      >
                        Budget
                      </TableCell>
                      <TableCell
                        style={{
                          color: "#5AB27E",
                          fontWeight: 600,
                          fontSize: "17px",
                        }}
                      >
                        Status
                      </TableCell>
                      <TableCell
                        style={{
                          color: "#5AB27E",
                          fontWeight: 600,
                          fontSize: "17px",
                        }}
                      >
                        Payment Method
                      </TableCell>
                      <TableCell
                        style={{ color: "#5AB27E", fontWeight: 600 }}
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
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
                        <TableCell style={{ color: "#828282 " }}>
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
                        <TableCell>
                          <Typography
                            component={"span"}
                            variant="subtitle1"
                            style={{
                              background: "#5AB27E",
                              padding: "7px  4px",
                              borderRadius: "30px",
                              color: "white",
                            }}
                          >
                            {row.icons}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel value="2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam
              tenetur minima beatae ex, ipsa quos cum id laudantium itaque
              magnam repudiandae odit velit, laborum ea eaque atque? Voluptatum
              fugit explicabo praesentium esse ipsam obcaecati est suscipit
              omnis nam qui modi dolore culpa, sed dolorum deserunt? Quo
              perspiciatis eaque sed. Molestias, recusandae exercitationem
              alias, est deleniti illo obcaecati ipsum error laboriosam, sint
              dolorum veritatis ipsa optio porro fugiat? Officia, quos? Magni
              fuga consequatur molestiae quasi laudantium obcaecati dolorum!
              Labore aut quibusdam nesciunt voluptatibus ab, praesentium porro
              quisquam tenetur, ex repudiandae dolores quo amet, eos natus ullam
              mollitia assumenda corporis perspiciatis? Ex, aliquam? Hic fugit,
              nemo dicta velit repellendus quos maxime fuga id perferendis rerum
              debitis deleniti, quis, repellat quae dolorem error. Atque aut cum
              officiis omnis, a error ipsam exercitationem quasi perspiciatis
              dolor voluptate! Unde totam velit adipisci, odio esse eaque illum
              dolore, aut dolorum consectetur enim quis? Rerum in cupiditate
              sint quae expedita dolore quasi provident numquam soluta nam
              praesentium neque porro alias itaque voluptates, et maxime ipsam
              earum. Facere officia quasi rem beatae cum, quam blanditiis
              expedita sit reprehenderit laudantium dolore optio repudiandae
              modi necessitatibus. Similique eaque in itaque laudantium dolorem
              voluptates maxime quos cumque quas! Ipsa ipsam labore magnam ad
              soluta fugiat possimus! Fuga tenetur quo non. Iusto numquam amet
              aut temporibus dolor nemo mollitia porro inventore eligendi? Odit
              quia hic error ducimus consequuntur neque animi dolorem
              accusantium repudiandae harum omnis impedit porro deleniti
              architecto ab incidunt, inventore molestias maiores fugit minima
              adipisci illo ipsam possimus. Reprehenderit, hic dignissimos enim
              fuga dolores minima voluptatibus praesentium labore error ad,
              aliquam dolore totam numquam quibusdam odit dicta vel culpa
              voluptate amet laboriosam quis quasi. Aut voluptatem totam facilis
              illo repudiandae quia perferendis, iste corporis a ratione quam
              voluptas odit rerum optio modi. Ad quisquam fugit animi in quod
              hic minima soluta voluptatum quos omnis, eos culpa illo.
              Voluptatum nemo quod autem et ipsa aperiam similique cumque in
              optio aut dolorem atque beatae, ullam totam quis dicta ex ducimus
              vitae? Eveniet repellendus quibusdam mollitia animi! Adipisci
              optio dignissimos repellat natus eum aspernatur, consequuntur
              deleniti porro?
            </TabPanel>
            <TabPanel value="3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              praesentium nihil illum, optio saepe aliquid dolorum tempora id
              nostrum. Voluptatibus facere quibusdam incidunt molestiae natus
              harum sequi culpa, voluptatum ipsa et quos voluptas eos placeat.
              Deleniti, saepe. A placeat harum magni tenetur, inventore pariatur
              ipsum totam in iusto fugit impedit quia voluptas fugiat blanditiis
              quo laboriosam perferendis tempora ducimus rem labore natus magnam
              illo modi. Cupiditate tenetur odio recusandae quod numquam omnis
              asperiores est exercitationem voluptates! Vitae recusandae
              distinctio tempore quasi repudiandae! Explicabo sed animi
              recusandae maxime asperiores quaerat accusamus accusantium quo,
              ipsa suscipit saepe iste culpa, provident adipisci assumenda!
            </TabPanel>
            <TabPanel value="4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi possimus sequi vero dolorum delectus totam aspernatur ea
              laborum, quasi autem placeat fugit iusto! Perspiciatis hic iusto
              iure autem, ex corrupti non illo repudiandae ratione eveniet quo,
              optio vel, dolorum accusamus distinctio quia laboriosam recusandae
              ipsam incidunt nihil veritatis fuga cupiditate ipsum dignissimos.
              Aliquam sapiente quaerat consequatur vero quam ipsa exercitationem
              aliquid necessitatibus sed commodi fugit rem tempora, vitae soluta
              voluptate quas error? Earum, eligendi ducimus odit fuga nemo quis
              tempore illum sunt id alias! Iure, id necessitatibus? Quibusdam
              nostrum nobis amet. Iste ullam quidem quasi aliquid? Odit harum
              magni esse doloremque atque quod illum vero veniam architecto
              maxime explicabo dignissimos, incidunt perspiciatis repellat
              voluptates eligendi labore, quidem quae corporis sint aspernatur
              quia iste?
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
};

export default Dashbord;
