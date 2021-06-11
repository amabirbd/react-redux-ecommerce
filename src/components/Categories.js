// // import { menueCategories } from "../data/categories";

// export default function Categories() {
//   return (
//     <div className="categories">
//       <ul className="category-ul">
//         <li>
//           Men
//           <ul>
//             <li>Shirts</li>
//             <li>pants</li>
//             <li>t-shirts</li>
//           </ul>
//         </li>

//         <li>
//           Women
//           <ul>
//             <li>Shirts</li>
//             <li>pants</li>
//             <li>t-shirts</li>
//             <li>skirts</li>
//           </ul>
//         </li>
//         <li>
//           Child
//           <ul>
//             <li>Shirts</li>
//             <li>pants</li>
//             <li>toys</li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// }

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import ListSubheader from "@material-ui/core/ListSubheader";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import Collapse from "@material-ui/core/Collapse";
// import ExpandLess from "@material-ui/icons/ExpandLess";
// import ExpandMore from "@material-ui/icons/ExpandMore";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper
//   },
//   nested: {
//     paddingLeft: theme.spacing(4)
//   }
// }));

// export default function Categories() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(true);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   return (
//     <List
//       component="nav"
//       aria-labelledby="nested-list-subheader"
//       subheader={
//         <ListSubheader component="div" id="nested-list-subheader">
//           Nested List Items
//         </ListSubheader>
//       }
//       className={classes.root}
//     >
//       <ListItem button>
//         <ListItemText primary="Sent mail" />
//       </ListItem>
//       <ListItem button>
//         <ListItemText primary="Drafts" />
//       </ListItem>
//       <ListItem button onClick={handleClick}>
//         <ListItemText primary="Inbox" />
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItem>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItem button className={classes.nested}>
//             <ListItemText primary="Starred" />
//           </ListItem>
//         </List>
//       </Collapse>
//     </List>
//   );
// }
