import reactLogo from './assets/react.svg'
import React, { useEffect, useState } from "react";

import { HeadProvider } from 'react-head';
import {useImage} from 'react-image'
import { Link } from "react-router-dom";

import { Input } from '@web3uikit/core';

import "/home/roshin/PROJECTS/confyg/styles/globals.css";
import "/home/roshin/PROJECTS/confyg/styles/users.css";


function App()
{

  // const { name, username, email, website, bio } = "";
  // const name = 'roshin';
  // const username = 'r0x';
  // const email = 'roshin@gmail.com';
  // const website = 'roninn.com';
  // const bio = 'blahhhhh';


  return (
    <>
      <Input
        label = 'Name'
        name='nameChange'
        width='100%'
        labelBgColor='#141d26'
      />
    </>
  );
}

export default App
