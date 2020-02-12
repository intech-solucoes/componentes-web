import React from 'react';

export const Botao = ( { cls, position, title, handle } ) => {

		const className = `${ cls } ${ position }`;
		return (
				<input className={ className }
				       value={ title }
				       type={ 'submit' }
				       onClick={ handle } />
		);
};

Botao.propTypes = {};