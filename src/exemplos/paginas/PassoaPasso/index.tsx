import React, { Component } from 'react';

import PassoUm from './Passos/passoum';
import PassoDois from './Passos/passodois';
import PassoTres from './Passos/passotres';

import { PassoWizard } from '../../../componentes/passoapasso/PassoWizard';
import MasterPage from '../../MasterPage';

export class ExemploPassoaPasso extends React.Component {
	render() {

		const steps = [
			{ name: 'Passo Um', component: <PassoUm />, preventNext: false },
			{ name: 'Passo Dois', component: <PassoDois />, preventNext: false },
			{ name: 'Passo Três', component: <PassoTres />, preventNext: true },
		];

		return (
			<MasterPage {...this.props}>
				<div className={'card'}>
					<div className={'card-body'}>
						<PassoWizard
							steps={steps}
							// sendAction={() => alert('Send')}
							// printAction={() => alert('Print')}
						/>
					</div>
				</div>
			</MasterPage>
		);
	}
}