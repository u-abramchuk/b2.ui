import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IRouterContext, IInjectedProps } from 'react-router';

import { Workspaces } from '../api/workspaces';

export default class WorkspaceCreateComponent extends React.Component<IInjectedProps, {}> {
    context: IRouterContext;

    static contextTypes: React.ValidationMap<any> = {
        router: React.PropTypes.object.isRequired
    }
    
    handleSubmit(event) {
        event.preventDefault();

        const element = ReactDOM.findDOMNode<HTMLInputElement>(this.refs['nameInput']);
        const text = element.value.trim();

        Meteor.call('createWorkspace', text);

        element.value = '';

        this.context.router.push('/');
    }

    render() {
        return (
            <form className="new-workspace" onSubmit={this.handleSubmit.bind(this) }>
                <input type="text"
                    ref="nameInput"
                    placeholder="Workspace name"
                    name="name" />
            </form>
        );
    }
}