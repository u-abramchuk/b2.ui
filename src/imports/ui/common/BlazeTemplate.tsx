import * as React from 'react';
import * as ReactDOM  from 'react-dom';

interface BlazeTemplateProps extends React.Props<Blaze.Template> {
    template: any,
    component?: any
}

export default class BlazeTemplate extends React.Component<BlazeTemplateProps, {}> {

    static propTypes: React.ValidationMap<BlazeTemplateProps> = {
        template: React.PropTypes.any.isRequired,
    }

    static defaultProps = {
        component: 'div'
    }

    view: Blaze.View;

    componentDidMount() {
        const { template } = this.props;
        this.view = Blaze.render(template, ReactDOM.findDOMNode(this.refs['root']));
    }

    componentWillUnmount() {
        Blaze.remove(this.view);
    }

    render() {
        const component = this.props.component;
        return (<component ref="root" />);
    }
}