import Header from './NavBar';
import PageFooter from './PageFooter';

const AppHome = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '4em', paddingBottom: '1em', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 className="text-grey-800" style={{ textAlign: 'center' }}>Bem Vindo a minha Aplicação React!!!</h2>
        <img src="/assets/private-public-routing-react.png" alt="Descrição da imagem" width="700" height="300" />
      </div>
      <PageFooter />
    </>
  )
}

export default AppHome