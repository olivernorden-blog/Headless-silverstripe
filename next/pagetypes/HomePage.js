import PageContent from "../components/PageContent"

const HomePage = ({page}) => {
  return (
    <div>
      <p>This is using the HomePage template</p>
      <PageContent page={page} />
    </div>
  )
}

export default HomePage
