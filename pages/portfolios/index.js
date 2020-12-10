import React from 'react';
import BaseLayout from '../../components/layout/BaseLayout';
import Axios from 'axios';
import Link from 'next/link';
import BasePage from '../../components/basePage';

// import { Link } from '../routes'

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
                <BasePage>
                    <h1>I am Portfolio Page</h1>
                    <ul>
                        {this.props.posts.map(post =>
                            <li key={post.id} >
                                <Link as={`/portfolios/${post.id}`} href='/portfolios/[id]'>
                                    <a>{post.title} </a>
                                </Link>
                            </li>)}
                    </ul>
                </BasePage>

            </BaseLayout>
        )
    }
}

export default Portfolios;