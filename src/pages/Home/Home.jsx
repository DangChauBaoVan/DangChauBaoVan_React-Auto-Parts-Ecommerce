import React from 'react'
import Header from '../../components/Header/Header'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Banner from '../../components/Banner/Banner'
import ProductFilterSidebar from '../../components/ProductFilterSidebar/ProducFilterSidebar'
import ProductPage from '../Product/Product'

function Home() {
  return (
    <div>
    
    <Banner/>
    <ProductPage/>
    </div>
  )
}

export default Home