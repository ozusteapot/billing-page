import styles from "../styles/Home.module.css";
import Billing from "../components/Billing";
import MyInvoices from "../components/MyInvoices";
import DesktopSidebar from "../components/DesktopSidebar";
import DesktopFooter from "../components/DesktopFooter";
import BillingHeader from "../components/BillingHeader";
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const invoiceNumbers = [
  {
    id: 123455123455,
    price: 49.99,
    status: "ISSUED",
    statusColor: "#63cefb",
    date: "21/10/2020",
  },
  {
    id: 234567234567,
    price: 79.99,
    status: "overdue",
    statusColor: "#cf4520",
    date: "21/09/2020",
  },
  {
    id: 341678345678,
    price: 49.99,
    status: "overdue",
    statusColor: "#cf4520",
    date: "21/08/2020",
  },
  {
    id: 456589456789,
    price: 49.99,
    status: "paid",
    statusColor: "#7DBE00",
    date: "21/07/2020",
  },
  {
    id: 547890567890,
    price: 49.99,
    status: "paid",
    statusColor: "#7DBE00",
    date: "21/06/2020",
  },
  {
    id: 356789456789,
    price: 49.99,
    status: "paid",
    statusColor: "#7DBE00",
    date: "21/07/2020",
  },
  {
    id: 267890567890,
    price: 49.99,
    status: "paid",
    statusColor: "#7DBE00",
    date: "21/06/2020",
  },
  {
    id: 156789456789,
    price: 49.99,
    status: "paid",
    statusColor: "#7DBE00",
    date: "21/07/2020",
  },
];

export default function Home() {
  const theme = useTheme();
  const isBelowThreshold = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container sx={{ height: "100%", width: "100%" }}>
      <DesktopSidebar sx={{ background: "#fff" }} />
      <Grid
        item
        sx={{
          width: isBelowThreshold ? "100vw" : "calc(100vw - 15rem)",
          marginLeft: isBelowThreshold ? 0 : "auto",
        }}
      >
        <BillingHeader />
        <Billing invoiceIds={invoiceNumbers} />

        <MyInvoices invoiceIds={invoiceNumbers} />
      </Grid>

      <DesktopFooter />
    </Grid>
  );
}
