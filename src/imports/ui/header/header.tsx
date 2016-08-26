import * as React from 'react';

import BlazeTemplateComponent from '../blazeTemplate';

export default class HeaderComponent extends React.Component<{}, {}>{
    render() {
        var template = window['Template'];

        return (
            <header className="page-header">
                <h1>b2.ui</h1>
                <BlazeTemplateComponent template={template.loginButtons} />
            </header>
        );
    }
}