import PageContent from "../components/PageContent"

const Page = ({page}) => {
  return (
    <div>
      <p>This is using the Page template</p>
      <PageContent page={page} />
    </div>
  )
}

export default Page
