import React from "react";
import { Container, Box, Typography } from "@mui/material/";
import { useMediaQuery } from "@mui/material";
import ylo from "../assets/ylo.png";
import dlwry from "../assets/dwry.png";
import del from "../assets/sal.png";
import MinaNavbar from "../components/MinaNavbar";
import Footer from "../components/Footer";

const Howitworks = () => {
  const isLargeS12 = useMediaQuery("(max-width:1150px)");
  const issmall80 = useMediaQuery("(max-width:880px)");

  return (
    <>
     <MinaNavbar/>
      <Container
        maxWidth="xl"
        style={{ margin: "4rem auto", textAlign: "center" }}
      >
        <Box>
          <Typography
            variant="h6"
            style={{
              fontSize: isLargeS12 ? "30px" : "48px",
              fontWeight: "600",
            }}
          >
            Keeping You In Style, Whenever You Land
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="xl" style={{ margin: "6rem auto" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "30px",
            flexDirection: isLargeS12 ? "column" : "row",
          }}
        >
          <Box style={{ width: isLargeS12 ? "100%" : "50%" }}>
            <img
              src={ylo}
              alt="images"
              style={{ width: isLargeS12 ? "100%" : "78%" }}
            />
            <Box
              style={{
                display: "flex",
                gap: "20px",
                width: "100%",
                flexDirection: issmall80 ? "column" : "row",
              }}
            >
              <img
                src={dlwry}
                alt="images"
                style={{
                  width: isLargeS12 ? "100%" : "38%",
                  height: isLargeS12 ? "100%" : "38%",
                }}
              />
              <img
                src={del}
                alt="images"
                style={{
                  width: isLargeS12 ? "100%" : "38%",
                  height: isLargeS12 ? "100%" : "38%",
                }}
              />
            </Box>
          </Box>
          <Box style={{ width: isLargeS12 ? "100%" : "50%" }}>
            <Typography
              variant="h6"
              style={{
                fontSize: issmall80 ? "22px" : "35px",
                fontWeight: "600",
              }}
            >
              3 Easy Ways For How It Works
            </Typography>
            <Box
              style={{
                boxShadow: "0px 4px 31px rgba(0, 0, 0, 0.1)",
                background: "#FFFFFF",
                borderRadius: "10px",
                padding: "1.5rem",
                margin: "1rem auto",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: issmall80 ? "20px" : "30px",
                  fontWeight: "600",
                }}
              >
                1. Sign Up &Take The Quiz!
              </Typography>
              <Typography variant="subtitle1" color="#838383">
                Once you sign up, it’s fun quiz time—a simple process for us to
                get the perfect outfit for you. Once we know your style
                preferences and the occasion of your travel, one of our
                professional stylists will get in touch with you.
              </Typography>
            </Box>
            <Box
              style={{
                boxShadow: "0px 4px 31px rgba(0, 0, 0, 0.1)",
                background: "#FFFFFF",
                borderRadius: "10px",
                padding: "1.5rem",
                margin: "1rem auto",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: issmall80 ? "20px" : "30px",
                  fontWeight: "600",
                }}
              >
                2. Everything Delivered To You
              </Typography>
              <Typography variant="subtitle1" color="#838383">
                To any location whenever you go, we’ll get your stylist-picked
                outfits delivered in sync with you. Then you dress to impress
                and we’ll take care of the rest—picking up the outfits when
                you’re done, cleaning them, and sending them back to you.
              </Typography>
            </Box>
            <Box
              style={{
                boxShadow: "0px 4px 31px rgba(0, 0, 0, 0.1)",
                background: "#FFFFFF",
                borderRadius: "10px",
                padding: "1.5rem",
                margin: "1rem auto",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: issmall80 ? "20px" : "30px",
                  fontWeight: "600",
                }}
              >
                3. Your Fashion Made Effortless
              </Typography>
              <Typography variant="subtitle1" color="#838383">
                Traveling with someone else? Got different occasions planed?
                StyleWire is all about giving you flexibility. You choose the
                budget, needed and unneeded items, location, context, and more.
                Don’t need it delivered or want a rental? We’ll handle it too.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer/>
    </>
  );
};

export default Howitworks;
