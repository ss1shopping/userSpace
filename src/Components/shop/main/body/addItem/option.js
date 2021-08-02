import React ,{useState}from 'react'
import { MoreOption } from './moreOption'
import { useDispatch, useSelector } from 'react-redux'
import { itemActions } from '../../../../../app/store/ducks/itemReducer'
export const Option = ({group,nameProduct}) => {
	const dispatch = useDispatch()
	const [number, setNumber] = useState(1)
	const tier_variations = useSelector(state => state.itemReducer.tier_variations)
	const handle_SetTier_variation = (index, name) => {
        let newobj = {
            name,
            options:tier_variations[index]&& tier_variations[index].options?tier_variations[index].options:[]

        }
        if (name.length > 0) {
           // index === 1 ? settier_varaitionStatus1(false) : settier_varaitionStatus(false)
        }
        tier_variations[index] = newobj
        //console.log(index, name);

        //index === 1 ? settier_varaitionLength1(name.length) : settier_varaitionLength(name.length)
        dispatch(itemActions.setTier_variations(tier_variations))

    }
	return (
		<>
		 <div className="grid-edit-row">
			<div className="edit-label">
				<span>Group {group}</span>
			</div>
		 <div className="variation-edit-wrapper">
		<div className="options-panel">
			<span className="options-close" >
				<i className="btn-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
						<path d="M28 6.1L25.9 4 16 13.9 6.1 4 4 6.1l9.9 9.9L4 25.9 6.1 28l9.9-9.9 9.9 9.9 2.1-2.1-9.9-9.9L28 6.1z"></path>
					</svg>
				</i>
			</span>
			<div className="group-name">
			<div className="edit-label">
				<span>Group Name</span>
			</div>
			<div className="edit-text">
				<div className="variation-form" size="large" placeholder="Input Group name, such as: Color, Size, etc.">
					<div className="variation-form__content">
						<div className="product-input">
							<div className="product-input__inner">
								<input type="text"
									placeholder="Input Group name, such as: Color, Size, etc."
									resize="vertical" rows="2"
									minrows="2" minlength="10"
									restrictiontype="input"
									max="Infinity"
									min="-Infinity"
									isround="true"
									unicodenormalized="true"
									class="product-input__input"
									onChange={(e) => handle_SetTier_variation(group, e.target.value, [])}
								/>
								<div className="product-input__sulfix">
									<span className="product-input__sulfix-split"></span>
									{0}/14
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{[...Array(number)].map((_, i) => <MoreOption key={i} count={i} index={group} group={"group1"}  numberOption={number}  nameProduct={nameProduct}/>)}
		<div className="btn-type-container">
		<div className="edit-label"></div>
		<div class="edit-type-add">
			<button type="button" className="type-btn" onClick={() => setNumber(number+1)}>
				<span>
					<i className="type-btn__icon">
						<svg data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
							<g data-name="Layer 1">
								<path d="M512 1024A512.2 512.2 0 0 1 312.7 40.2a512.12 512.12 0 0 1 398.6 943.5A507.07 507.07 0 0 1 512 1024zm0-960a447.88 447.88 0 0 0-316.8 764.8A448 448 0 1 0 686.4 99.2 444.4 444.4 0 0 0 512 64z"></path>
								<path d="M768 480H544V256a32 32 0 0 0-64 0v224H256a32 32 0 0 0 0 64h224v224a32 32 0 0 0 64 0V544h224a32 32 0 0 0 0-64z"></path>
							</g>
						</svg>
					</i>
					Added ({number}/20)
				</span>
			</button>
		</div>
	</div>
	</div>
	</div>
            </div>                           
		</>
	)
}
