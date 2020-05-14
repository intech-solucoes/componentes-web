import * as React from 'react';
export default class Abas extends React.Component<any, any> {
    constructor(props: any, context: any);
    handleTabClick(tabIndex: number): void;
    renderChildrenWithTabsApiAsProps(): React.FunctionComponentElement<{
        onClick: (tabIndex: number) => void;
        tabIndex: number;
        isActive: boolean;
    }>[];
    renderActiveTabContent(): any;
    render(): JSX.Element;
}
