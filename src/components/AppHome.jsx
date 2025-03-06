import Header from './NavBar';
import PageFooter from './PageFooter';

const AppHome = () => {
  return (
    <>
      <Header />
      <div style={{ paddingLeft: '14em', paddingTop: '4em'}}>
          <h2 className="text-indigo-800">Bem Vindo a Minha Primeira Página Usando React!!!</h2>
          <img src="/assets/private-public-routing-react.png" alt="Descrição da imagem" width="700" height="300" />
      </div>
      <div style={{ paddingTop: '1em'}}>
        <PageFooter />
      </div>
    </>
  )
}

export default AppHome