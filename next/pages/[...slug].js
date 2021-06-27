import React from 'react'
import ErrorPage from 'next/error'

import { headlessApiRequest } from '../api/silverstripe'

import PageTypeNotFound from '../components/PageTypeNotFound'
import HomePage from '../pagetypes/HomePage'
import Page from '../pagetypes/Page'

const RootPage = ({ page }) => {
  if (!page) {
    return <ErrorPage  statusCode={404} />;
  }
  const Components = {
    'HomePage': HomePage,
    'Page': Page,
  }

  const PageComponent = () => (
    React.createElement(Components[page.ClassName] || PageTypeNotFound, {page})
  )
  
  return (
    <PageComponent />
  )
}

export async function getServerSideProps({req, params, query }) {
  let slug = params ? params.slug.join('/') : ''
  const queryStr = query.stage ? `?stage=${query.stage}` : ''
  const page = await headlessApiRequest(`/url/${slug + queryStr}`, req)
  const common = await headlessApiRequest(`/common${queryStr}`, req)

  return {
    props: {
      common,
      page
    }, // will be passed to the page component as props
  }
}


export default RootPage

