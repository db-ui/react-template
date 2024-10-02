import React from 'react';
import './App.css';
import {DBSection, DBLink} from '@db-ui/react-components';

function App() {
    return (
        <div className="App">
            <DBSection width="large">
                <h1>DB UI Playground</h1>
                <p>Test the components of the DB UX Design System here.</p>
				<DBLink
					href="https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system"
					content="external">
					Docs
				</DBLink>
            </DBSection>
        </div>
    );
}

export default App;
