import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
// core components
import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";

const useStyles = makeStyles(styles);

export default function Tasks(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([...props.checkedIndexes]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const { tasksIndexes, tasks, rtlActive } = props;
  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive
  });
  return (
    <Table className={classes.table}>
      <TableBody>
        {tasksIndexes.map(value => (
          <TableRow key={value} className={classes.tableRow}>
            <TableCell className={tableCellClasses}>
              
            </TableCell>
            <TableCell className={tableCellClasses}>{tasks[value]}</TableCell>
            <TableCell className={classes.tableActions}>
         
            <span>50</span>
          
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

Tasks.propTypes = {
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
  tasks: PropTypes.arrayOf(PropTypes.node),
  rtlActive: PropTypes.bool,
  checkedIndexes: PropTypes.array
};
