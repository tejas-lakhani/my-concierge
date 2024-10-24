import { Box, Button, FormControl, Menu, MenuItem, MenuList, OutlinedInput, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
const ChatPage = () => {
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const [adminValue, setAdminValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [membershipValue, setMembershipValue] = useState('');

  const handleChange = (event, newValue) => {
    switch (event.target.name) {
      case 'admin':
        setAdminValue(newValue);
        break;
      case 'category':
        setCategoryValue(newValue);
        break;
      case 'date':
        setDateValue(newValue);
        break;
      case 'membership':
        setMembershipValue(newValue);
        break;
      default:
        break;
    }
  };


  const [personName, setPersonName] = React.useState([]);
  console.log("adminValue",adminValue)    
  const handleChanges = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <div className="bg-white p-9">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Chat</h1>
      </div>
      {/* <div className="flex justify-center gap-20">
        <div>
          <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{ background: "#666666" ,borderRadius:"12px",width:"100%" }}
            className="flex items-center justify-between text-sm font-medium bg-[#666666] text-gray-800"
          >
            <span className="text-white">All Admin</span>
            <ExpandMoreIcon className="text-white" />
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}

            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuList>
              <MenuItem onClick={handleClose}>
                <div className="text-gray-800">Lorem ipsum</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div className="text-gray-800">Lorem ipsum</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div className="text-gray-800">Lorem ipsum</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div className="text-gray-800">Lorem ipsum</div>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div>
          <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{ background: "#666666",borderRadius:"12px"  }}
            className="flex items-center justify-between text-sm font-medium bg-[#666666] text-gray-800"
          >
            <span className="text-white">All category</span>
            <ExpandMoreIcon className="text-white" />
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}

            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuList>
              <MenuItem onClick={handleClose}>
                <div className="text-gray-800">Lorem ipsum</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div className="text-gray-800">Lorem ipsum</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div className="text-gray-800">Lorem ipsum</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div className="text-gray-800">Lorem ipsum</div>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div>
          <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{ background: "#666666",borderRadius:"12px"  }}
            className="flex items-center justify-between text-sm font-medium bg-[#666666] text-gray-800"
          >
            <span className="text-white">mm / dd / yyyy</span>
            <ExpandMoreIcon className="text-white" />
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}

            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuList>
              <MenuItem onClick={handleClose}>
                <div className="text-gray-800">Lorem ipsum</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div className="text-gray-800">Lorem ipsum</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div className="text-gray-800">Lorem ipsum</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div className="text-gray-800">Lorem ipsum</div>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div>
          <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{ background: "#666666",borderRadius:"12px" }}
            className="flex items-center justify-between text-sm font-medium bg-[#666666] text-gray-800"
          >
            <span className="text-white">All Membership</span>
            <ExpandMoreIcon className="text-white" />
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}

            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuList>
              <MenuItem onClick={handleClose}>
                <div className="text-gray-800">Lorem ipsum</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div className="text-gray-800">Lorem ipsum</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div className="text-gray-800">Lorem ipsum</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <div className="text-gray-800">Lorem ipsum</div>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>

      </div> */}
      {/* <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          displayEmpty
          value={personName}
          style={{background:"#666666",color:"white"}}
          onChange={handleChanges}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Placeholder</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              // style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="20px"
    >
      <Select
        value={adminValue}
        onChange={handleChange}
        name="admin"
        sx={{
          width: '150px',
          background: '#333',
          color: 'white',
          borderRadius: '8px',
          '&:focus': {
            outline: 'none',
          },
          '& .MuiSelect-icon': {
            color: '#fff',
          },
        }}
        displayEmpty
        inputProps={{   'aria-label': 'Without label' }}
      >
        <MenuItem value="">
          <Typography variant="subtitle1" color="black">
            All Admin
          </Typography>
        </MenuItem>
        <MenuItem value="All Admin">
          <Typography variant="subtitle1" color="black">
            All Admin
          </Typography>
        </MenuItem>
        <MenuItem value="krishna">
          <Typography variant="subtitle1" color="black">
            krishna
          </Typography>
        </MenuItem>
        <MenuItem value="">
          <Typography variant="subtitle1" color="black">
            All Admin
          </Typography>
        </MenuItem>
        <MenuItem value="">
          <Typography variant="subtitle1" color="black">
            All Admin
          </Typography>
        </MenuItem>
        {/* Add your admin options here */}
      </Select>
      </Box>
    </div>
  );
};

export default ChatPage;
