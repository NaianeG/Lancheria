import Logo from '../../assets/logotipo.png'
import XSaladaImage from '../../assets/X-Salada.png'
import XBaconImage from '../../assets/X-Bacon.jpg'
import TFrios from '../../assets/tabua de frios.jpg'
import ProductCard from '../../Components/ProductCard/ProductCard'
import './PageCards.css'
import MenuPrincipal from '../../Components/MenuPrincipal/MenuPrincipal'

const PageCards = () => {
    return (
      <>
        <header>
          <nav>
            <MenuPrincipal name="Venda Lanches" logoUrl={Logo} />
          </nav>
        </header>
        <body>
          <div >
            <div className="products-display">
              <ProductCard
                image={XSaladaImage}
                description="Esse é um delicioso X-Salada"
                whereToGo="Adicionar"
                cardTitle="X-Salada"
              />
              <ProductCard
                image={XBaconImage}
                description="Esse é um delicioso X-Bacon"
                whereToGo="Adicionar"
                cardTitle="X-Bacon"
              />
              <ProductCard
                image={TFrios}
                description="Essa é para a turma toda"
                whereToGo="Adicionar"
                cardTitle="X-Salada"
              />
            </div>
          </div>
        </body>
      </>
    );
  }
  
  export default PageCards;
  