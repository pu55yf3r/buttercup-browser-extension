import React from "react";

import ArchiveList from "./ArchiveList";
import IconButton from "./IconButton";
import ConfigureIcon from "react-icons/lib/fa/cogs";

class App extends React.Component {

    render() {
        return (
            <div>
                <h2 className="green">Buttercup</h2>
                <ArchiveList />
                { this.props.children }
                <IconButton className="configure" onClick={(e) => this.setupClicked(e)}>
                    <ConfigureIcon />
                </IconButton>
            </div>
        );
    }

    setupClicked(event) {
        event.preventDefault();
        chrome.tabs.create({'url': chrome.extension.getURL('setup.html#/')}, function(tab) { });
    }

}

export default App;
