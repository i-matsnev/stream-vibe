import '@/styles'
import { Head } from "minista"
import Header from "@/layouts/Header"
import Footer from "@/layouts/Footer"
import Content from "@/layouts/Content"

export default function (props) {
  const {
    children,
    title,
  } = props

  return (
    <>
      <Head htmlAttributes={{lang: 'en'}}>
        <title>Stream Vibe | {title}</title>
        <script src="/src/main.js" type="module"/>
      </Head>
      <Header/>
      <Content>
        {children}
      </Content>
      <Footer/>
    </>
  )
}
