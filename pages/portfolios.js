import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import Axios from 'axios';
import Link from 'next/link';

class Portfolios extends React.Component {

    static async getInitialProps() {
        let posts = []
        try {
            const res = await Axios.get('https://jsonplaceholder.typicode.com/posts')
            posts = res.data;
        } catch (e) {
            console.log(e)
        }

        return { posts: posts.slice(0, 10) }
    }
    render() {
        return (
            <BaseLayout>
                <h1>I am Portfolio Page</h1>
                <ul>
                    {this.props.posts.map(post =>
                        <li key={post.id} style={{ "fontSize": "20px" }}>
                            <Link href={`/portfolios/${post.id}`}>
                                <a>{post.title} </a>
                            </Link>
                        </li>)}
                </ul>
            </BaseLayout>
        )
    }
}

export default Portfolios;