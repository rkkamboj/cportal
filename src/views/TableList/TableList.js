import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Order Details</h4>
            <p className={classes.cardCategoryWhite}>
              
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Order Number", "Status", "Customer PO#", "Bill No", "BillTo", "ShipTo", "Total Containers Shipped"]}
              tableData={[
                ["BWTEST000140", "Transit", "12345678", "87654321", "WALMART STORES", "WAL-MART 6010A"],
                ["WMS0000000096", "Shipped", "87654321", "12345678", "CLT - VS3856", "CLT - VS3856"],
                ["IGD0000127", "Shipped", "877777777", "10000224", "WALMART STORES", "WAL-MART 6010A"], 
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      
    </GridContainer>
  );
}
