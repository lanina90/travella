import React, {useMemo} from 'react';
import {Anchor} from "@/app/types/homeSections";
import SectionContainer from "@/app/components/Container/Container";
import Typography from "@/app/components/Typography/Typography";
import styles from "./styles.module.scss"
import classNames from "classnames";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";

const ContactUs = React.forwardRef<HTMLElement, {}>((props, ref) => {

  const inputClasses = useMemo(() => {
    return {
      label: styles["contacts-form-input-label"],
      input: styles["contacts-form-input"],

    }
  }, [])
  return (
    <section ref={ref} id={Anchor.contacts}>
      <SectionContainer>
        <Typography element="h2" className="heading-center">
          Lets create amazing Travel <span className="d-block">experience together</span>
        </Typography>
        <form action="" className={styles["contacts-form"]}>
          <div className={styles["contacts-form-shadow"]} />
          <div className={classNames(styles["contacts-form-shadow"], styles["contacts-form-shadow-left"])} />
          <div className={styles["contacts-form-grid"]}>
            <Input
              id="name"
              name="name"
              label="Name"
              placeholder="Enter your name"
              type={"text"}
              classes={inputClasses}
            />
            <Input
              id="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              type={"email"}
              classes={inputClasses}
            />
            <Input
              id="number"
              name="number"
              label="Mobile Number"
              placeholder="Enter your number"
              type={"text"}
              classes={inputClasses}
            />
            <Input
              id="country"
              name="country"
              label="Country"
              placeholder="Enter your country"
              type={"text"}
              classes={inputClasses}
            />
          </div>
          <label>
            <div className={inputClasses.label}>Message</div>
            <textarea name="message" id="message" cols="30" rows="10" className={inputClasses.input} placeholder="Enter your message"></textarea>
          </label>

          <Button type="submit" shape="rounded" buttonStyle="primary" className={styles["contacts-form-button"]}>
            Send Message
          </Button>
        </form>
      </SectionContainer>
    </section>
  );
});

export default ContactUs;