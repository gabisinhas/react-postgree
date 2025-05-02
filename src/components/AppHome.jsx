import Header from './NavBar';
import PageFooter from './PageFooter';

const AppHome = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '6em', minHeight: 'calc(100vh - 4em)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 className="text-indigo-800" style={{ textAlign: 'center' }}>Bem Vindo a Minha Primeira Página Usando React!!!</h2>
        <img src="/assets/private-public-routing-react.png" alt="Descrição da imagem" width="700" height="300" />
        <div style={{ marginTop: 'auto', paddingTop: '1em', width: '100%' }}>
          <PageFooter />
        </div>
      </div>
    </>
  )
}

export default AppHome