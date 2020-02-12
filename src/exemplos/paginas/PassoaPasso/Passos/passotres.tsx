import React from 'react';

const PassoTres = () => {

		return (
				<section>
						<div className="row">
								<div className="col-md-6">
										<div className="form-group">
												<label htmlFor="wfirstName2"> Finalizar:
														<span className="danger">*</span>
												</label>
												<input type="text" className="form-control required"
												       id="wfirstName2" name="firstName" required /></div>
								</div>
								<div className="col-md-6">
										<div className="form-group">
												<label htmlFor="wlastName2">Finalizar 2:
														<span className="danger">*</span>
												</label>
												<input type="text" className="form-control required"
												       id="wlastName2" name="lastName" /></div>
								</div>
						</div>
						<div className="row">
								<div className="col-md-6">
										<div className="form-group">
												<label htmlFor="wemailAddress2"> Finalizar 3 :
														<span className="danger">*</span>
												</label>
												<input type="email" className="form-control required"
												       id="wemailAddress2" name="emailAddress" /></div>
								</div>
								<div className="col-md-6">
										<div className="form-group">
												<label htmlFor="wphoneNumber2">Finalizar 4 :</label>
												<input type="tel" className="form-control" id="wphoneNumber2" />
										</div>
								</div>
						</div>
				</section>
		);
};

export default PassoTres;