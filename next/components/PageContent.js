import React from 'react'

const PageContent = ({page}) => {
  return (
    <div>
      <h1>{page.Title}</h1>
      <div className="content" dangerouslySetInnerHTML={{ __html: page.Content }}></div>
    </div>
  )
}

export default PageContent
