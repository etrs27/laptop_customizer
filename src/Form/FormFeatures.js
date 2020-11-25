import React from 'react';
import FormFeaturesItems from './FormFeaturesItems';
import FEATURES from '../STORE'



class FormFeatures extends React.Component {
    state={
        features: FEATURES
    }

    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <FormFeaturesItems 
                    selected={this.props.selected}
                    features={this.state.features}
                    updateFeature={this.props.updateFeature}
                />
            </form>
        )
    }
}


export default FormFeatures