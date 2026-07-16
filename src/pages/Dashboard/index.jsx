`use strict`;
import Layout from '../../components/Layout';
import './Style.css';
import iconeLogo from '../../assets/icone-logo.png'

function Dashboard() {
    return (
        <Layout>
            <img id="icone-logo" src={iconeLogo} alt="Ícone Logo" />
            <div className="dashboard-container">
               
            </div>
        </Layout>
    );
}

export default Dashboard;