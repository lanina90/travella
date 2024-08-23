import React from 'react';

import Button from "@/app/components/Button/Button";
import Typography from "@/app/components/Typography/Typography";
import Input from "@/app/components/Input/Input";
import AddLocationIcon from '@mui/icons-material/AddLocation';

const Header = () => {
  return (
    <div>
      <Typography element="h1">dfdfdfdf</Typography>
      <Button layout={"text"} shape={"rounded"}>dlfk</Button>
      <Input label="Username" type="text" id="username" placeholder={"Username"} icon={<AddLocationIcon />} />
      <Input label="Password" type="password" id="password" />
      <Input label="Email" type="email" id="email" />
      <Input label="Email" type="date" id="email" />
    </div>
  );
};

export default Header;