import React from 'react'
import BaseLayout from '../../components/layout/BaseLayout'
import { withRouter } from 'next/router'
import Axios from 'axios'


class Portfolio extends React.Component {
    static async getInitialProps({ query }) {
        let post = {}
        try {
            const res = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
            post = res.data
        }
        catch (e) {
            console.log(e)
        }
        return { portfolio: post }

    }
    render() {
        const { portfolio } = this.props
        return (
            <BaseLayout>
                <br />
                <h3>{this.props.router.query.id}</h3>
                <h1>{portfolio.title}</h1>
                <p>BODY: {portfolio.body}</p>
            </BaseLayout>

        )
    }
}


export default withRouter(Portfolio)