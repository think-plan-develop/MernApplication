import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SubpartAboutUs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Timeline" {...a11yProps(1)} />
        
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
     
      <div className="row ">
      
            <div className="col-6">
                    <p className="id_data" style={{fontSize:"1rem"}}>User Id</p>
                </div>
                <div className="col-6">
                <p > {props.id}</p>
                </div>
          
            <div className="col-6">
           <p>Name</p>
                </div>
                <div className="col-6">
               <p> {props.name}</p>
                </div>
           
            <div className="col-6">
                <p>Email </p>
                
                </div>
                <div className="col-6">
                <p>{props.email}</p>
                </div>
            
            <div className="col-6">
            <p>Profession</p>
                </div>
                <div className="col-6">
                <p>{props.work}</p>
                </div>
            </div>

          



      </TabPanel>
      <TabPanel value={value} index={1}>
         <div className="row">
            <div className="col-6 mt-md-2">
            Experience
                </div>
                <div className="col-6 mt-md-2">
                Data
                </div>


                <div className="col-6 mt-md-2">
           Total Projects
                </div>
                <div className="col-6 mt-md-2">
                Data 
                </div>



            </div>
      </TabPanel>
     
    </div>
  );
}
