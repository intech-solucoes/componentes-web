import * as React from 'react';

export default class Abas extends React.Component<any, any> {

    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            activeTabIndex: 0,
        };
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(tabIndex: number) {
        this.setState({
            activeTabIndex: tabIndex === this.state.activeTabIndex ? this.state.activeTabIndex : tabIndex
        });
    }

    renderChildrenWithTabsApiAsProps() {
        return React.Children.map(this.props.children, (child: any, index) => {
            return React.cloneElement(child, {
                onClick: this.handleTabClick,
                tabIndex: index,
                isActive: index === this.state.activeTabIndex
            });
        });
    }

    renderActiveTabContent() {
        if (this.state.activeTabIndex !== undefined) {
            const { children } = this.props;
            const { activeTabIndex } = this.state;
            if (children != null) {
                if (children[activeTabIndex]) {
                    return children[activeTabIndex].props.children;
                }
            } else {
                console.dir('Erro! Não contem filhos!');
            }
        }
    }

    render() {
        return (
            <div className="card card-outline card-outline-tabs">
                <div className="card-header">
                    <ul className="nav nav-tabs">
                        {this.renderChildrenWithTabsApiAsProps()}
                    </ul>
                </div>

                <div className="card-body">
                    <div className="tab-content">
                        {this.renderActiveTabContent()}
                    </div>
                </div>
            </div>
        );

        // return (
        //     <div className="tabs">
        //         <ul className="tabs-nav nav nav-tabs ">
        //             {this.renderChildrenWithTabsApiAsProps()}
        //         </ul>
        //         <div className="tabs-active-content">
        //             {this.renderActiveTabContent()}
        //         </div>
        //     </div>
        // );
    }
}