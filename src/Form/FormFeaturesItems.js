import React from 'react';
import slugify from 'slugify'
import FormItem from './FormItem';



class FormFeaturesItems extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <FormItem
                        key={itemHash}
                        itemHash={itemHash}
                        item={item}
                        name={item.name}
                        cost={item.cost}
                        selected={this.props.selected}
                        updateFeature={this.props.updateFeature}
                        feature={feature}
                        slugify={slugify}
                    />
                );
            });

            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    {options}
                </fieldset>
            );
        });

        return features
    }
}


export default FormFeaturesItems