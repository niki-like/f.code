import React from 'react';
class Page extends React.Component {
    render() {
        return(
            <>
                <p>{this.props.value}</p>
            </>
        )
    }
}
export default Page;