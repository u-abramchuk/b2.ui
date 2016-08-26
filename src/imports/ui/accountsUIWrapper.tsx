import * as React from 'react';
import * as ReactDOM  from 'react-dom';

interface BlazeTemplateProps extends React.Props<Blaze.Template> {
    template: any,
    component?: any,
}

export default class AccountsUIWrapperComponent
    extends React.Component<BlazeTemplateProps, {}> {

    static propTypes: React.ValidationMap<BlazeTemplateProps> = {
        template: React.PropTypes.any.isRequired,
    }

    static defaultProps = {
        component: 'div',
    }

    view: Blaze.View;

    componentDidMount() {
        let { template } = this.props;
        this.view = Blaze.render(template, ReactDOM.findDOMNode(this.refs['root']));
    }

    componentWillUnmount() {
        Blaze.remove(this.view);
    }

    render() {
        let Component = this.props.component;
        return <Component {...this.props} ref="root" />;
    }
}