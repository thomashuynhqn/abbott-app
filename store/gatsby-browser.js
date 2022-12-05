import Medusa from "@medusajs/medusa-js"
import React from "react"
import Layout from "./src/components/layout"
import { MedusaProvider } from "./src/context/medusa-context"

const BASE_URL =
  process.env.GATSBY_MEDUSA_BACKEND_URL || "https://abbott-app-production.up.railway.app/"

const medusaClient = new Medusa({ baseUrl: BASE_URL })

export const wrapPageElement = ({ element, props }) => {
  return (
    <MedusaProvider client={medusaClient}>
      <Layout {...props}>{element}</Layout>
    </MedusaProvider>
  )
}
