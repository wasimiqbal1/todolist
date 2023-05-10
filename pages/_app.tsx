import Header  from "@/components/Header";
import Footer  from "@/components/Footer";
import '@/styles/globas.css'
import { Component } from "react";



export default function App = ({components, pagePropfs}) => {
  return (
    <>
    <Header/>
    <Component{...pagePropfs}/>
    <Footer/>
    </>
  )
}
