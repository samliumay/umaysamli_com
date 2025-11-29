import Layout from './components/Layout'
import OperatorProfile from './components/OperatorProfile'
import OperationalHistory from './components/OperationalHistory'
import AcademicDatabase from './components/AcademicDatabase'
import DeployedProjects from './components/DeployedProjects'
import References from './components/References'
import EncryptedComms from './components/EncryptedComms'

function App() {
  return (
    <Layout>
      <OperatorProfile />
      <OperationalHistory />
      <AcademicDatabase />
      <DeployedProjects />
      <References />
      <EncryptedComms />
    </Layout>
  )
}

export default App
