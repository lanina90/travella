import React from 'react';
import Input from "@/app/components/Input/Input";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Typography from "@/app/components/Typography/Typography";
import styles from "./styles.module.scss";
import Button from "@/app/components/Button/Button";


const HeaderForm = () => {
  return (
    <div className={styles["header-form-container"]}>
      <Typography element='h3' className={styles["header-form-title"]}>Find Your Next Adventure</Typography>
      <form className={styles["header-form"]}>
        <Input
          label={"Destination"}
          type="text"
          name="destination"
          placeholder="Where"
          icon={<LocationOnIcon fontSize="medium" color="action"/>}
        />
        <Input
          label={"Check in"}
          type="date"
          name="check-in"
          datePicker
        />
        <Input
          label={"Check out"}
          type="date"
          name="check-out"
          datePicker
        />
        <Input
          label={"Your Email"}
          type="email"
          name="email"
          placeholder="Enter your email"
          icon={<AlternateEmailIcon fontSize="medium" color="action"/>}
        />
        <Button layout="text" shape="rounded" buttonStyle="primary">Submit</Button>
      </form>
    </div>
  );
};

export default HeaderForm;