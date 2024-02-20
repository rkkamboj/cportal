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

export default function ReportTableList() {
  const classes = useStyles();
  return (
    
    <GridContainer>
     
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>ASN Received</h4>
            <p className={classes.cardCategoryWhite}>
              
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ASN Receipt", "Receipt Date", "Close Date", "Carrier", "Open Qty", "Status", "Transport Status", "Container Key", "Advice No.", "Trailer No."]}
              tableData={[
               ["0000000176",  "2024-02-08",  "2024-02-11", "FEDX",, "0.0100", "ZZZZ", "Scheduled", "10001",  "111111", "5",],
                ["0000000184", "2024-02-11", "2024-02-16", "FEDX",, "0.0122", "ZZZZ", "Verify Close", "10002", "222222", "6"],
                
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      {
        <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>ASN Details</h4>
            <p className={classes.cardCategoryWhite}>
              
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ASN Receipt", "Receipt Line No.", "SKU", "Qty Expected", "Qty Recieved", "Status", "To Loc", "Container Key", "Advice No.", "Trailer No."]}
              tableData={[
                ["0000000176",  "00001", "HF-09013R", "34.00000000", "30.00000", "Scheduled", "10001",  "STAGE", "5","2001"],
                ["0000000176",  "00002", "HF-09013R", "34.00000000", "5.00000", "Scheduled", "10001",  "STAGE", "5","2001"],

                
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      }
    </GridContainer>
  );
}
