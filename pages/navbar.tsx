import React from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { Welcome } from "../types";

const navbar = ({ users }: Welcome[]) => {
  console.log(users);

  return (
    <div className={styles.navbar}>
      <div>
        <Image
          className={styles.navbar_img}
          src="/logo.png"
          alt="logo"
          width="100%"
          height="100%"
        />
      </div>
      <div>
        <Image src="/profile.png" alt="profile" width="51px" height="51px" />
        <p>{users}</p>
      </div>
    </div>
  );
};

export default navbar;
