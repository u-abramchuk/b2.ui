import * as React from 'react';
import * as reactMixin from 'react-mixin';
import { ReactMeteorData } from 'meteor/react-meteor-data';

@reactMixin.decorate(ReactMeteorData)
export default class MeteorComponent<TProps, TState, TData> extends React.Component<TProps, TState> {
    data: TData;

    getMeteorData() {
        return {} as TData;
    }
}