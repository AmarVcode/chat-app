import React from 'react'
import { redirect } from 'react-router';

const Privateroute = ({...routeprops}) => {



const loader = async () => { const user = await getUser(); if (!user) { return redirect("/signin"); } }

  return (
    <div>Privateroute</div>
  )
}

export default Privateroute