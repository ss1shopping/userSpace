import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { DefaultLayout } from "../defaultLayout"
import { Tab } from "./tab"
import { Delivery } from './delivery'
import { Order } from './order'

export const Body = () => {
  return (
    <DefaultLayout>
      <div >
        <div>
          <Tab></Tab>
        </div>
        <div>
        </div>
      </div>
    </DefaultLayout>
  )
}
