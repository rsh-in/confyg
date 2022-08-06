import reactLogo from './assets/react.svg'
import React, { useEffect, useState } from "react";

import { HeadProvider } from 'react-head';
import {useImage} from 'react-image'
import { Link } from "react-router-dom";

import { Input, TextArea} from '@web3uikit/core';

import "/home/roshin/PROJECTS/confyg/styles/globals.css";
import "/home/roshin/PROJECTS/confyg/styles/users.css";


function App()
{

  return (
    <>
      <Input
        label = 'Name'
        name='nameChange'
        width='100%'
        labelBgColor='#141d26'
      />

      <Input
        label = 'username'
        name='usernameChange'
        width='100%'
        labelBgColor='#141d26'
      />

      <Input
        label = 'Email'
        name='test email input'
        width='100%'
        labelBgColor='#141d26'
        type='email'
      />

      <Input
        label = 'website'
        name='websiteChange'
        width='100%'
        labelBgColor='#141d26'
      />

      <TextArea
        label="Bio"
        name="Test TextArea Default"
        onBlur={function noRefCheck(){}}
        onChange={function noRefCheck(){}}
        placeholder="Type here field"
        value="Tell us something about yourself"
      />

    </>
  );
}

export default App
