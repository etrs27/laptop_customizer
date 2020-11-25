import React from 'react';
import SummaryTotal from './SummaryTotal';
import SummaryItems from './SummaryItems'


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class SummaryCart extends React.Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];

            return (
                <SummaryItems
                    USCurrencyFormat={USCurrencyFormat}
                    key={selectedOption.name}
                    const={selectedOption.const}
                    selectedOption={selectedOption}
                    featureHash={featureHash}
                />
            );
        });

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                
                <SummaryTotal
                    USCurrencyFormat={USCurrencyFormat} 
                    selected={this.props.selected}
                />
            </section>
        )
    }
}


export default SummaryCart