import { Header } from './components/header';
import { Categories } from './components/categories';
import { RelatedProducts } from './components/RelatedProducts';
import { PartnersBanner } from './components/partnersBanner';
import { Brands } from './components/brands';
import { Footer } from './components/footer';

export function App() {
  return (
    <div>
      <Header />
      <Categories />      
      <RelatedProducts showCategoryTabs={true} />      
      <PartnersBanner />     
      <RelatedProducts showCategoryTabs={false} />
      <PartnersBanner />
      <Brands/>
      <RelatedProducts showCategoryTabs={false} />
      <Footer/>
    </div>
  );
}